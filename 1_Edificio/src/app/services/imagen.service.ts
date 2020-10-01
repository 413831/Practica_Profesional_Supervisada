import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Imagen, TipoImagen } from '../clases/imagen';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { database } from 'firebase';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../clases/usuario';
import { UploadMetadata } from '@angular/fire/storage/interfaces';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  public static fotosFeas: Imagen[] = [];
  public static fotosBonitas: Imagen[] = [];
  public static test: number = 0;
  public imagenes = [];

  constructor(private storage : AngularFireStorage, private toastController: ToastController) 
  {
  }

  async sacarFoto(usuario: Usuario, tipo: TipoImagen) : Promise<Imagen>
  {
    let imagen: Imagen = new Imagen();
    let carpeta;

    Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Prompt,
      promptLabelHeader: 'Subir foto',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Subir desde galería',
      promptLabelPicture: 'Nueva foto',
      
    })
    .then( imageData => {
      console.log(imageData);
      imagen.base64 = imageData.base64String;
      imagen.fecha = new Date();
      imagen.usuario = usuario.id;
      imagen.nombreUsuario = usuario.nombre;
      imagen.tipo = tipo;
      imagen.votos = [];
  
      if(tipo == TipoImagen.POSITIVA)
      {
        ImagenService.fotosBonitas.push(imagen);
        //ImagenService.fotosBonitas.sort((a,b) => this.comparadorFechas(a.fecha,b.fecha));
        carpeta = "bonitas";
      }
      else if(tipo == TipoImagen.NEGATIVA)
      {
        ImagenService.fotosFeas.push(imagen);
        carpeta = "feas";
      }

      // Se sube imagen a Base de Datos
      this.crear(imagen).then( img => {
        imagen = img;
        // Se guarda imagen en el Storage
        this.guardarImagen(imagen, carpeta)
            .then(snapshot => snapshot.ref.getDownloadURL()
                                      .then(res => imagen.url = res))
            .finally(() => this.actualizar(imagen));
      })
      .catch(console.error);
    })
    .catch( error => {
      this.presentToast(error);
    })
    return imagen;
  }

  async guardarImagen(imagen: Imagen, carpeta: string)
  {
    console.log("Guardar imagen-----------------------");
    const metadata: UploadMetadata = {
      contentType: 'image/jpeg',
      customMetadata: {
        user : imagen.usuario,
        userName : imagen.nombreUsuario,
        date : imagen.fecha.toDateString(),
        puntaje: imagen.votos.length.toString()
      }
    };

    console.log(imagen);
    // Se sube imagen al Firebase Storage
    return this.storage.ref(`${carpeta}/${imagen.id}`)
                        .putString(imagen.base64, firebase.storage.StringFormat.BASE64, metadata);
  }

  public async descargarImagen(carpeta: string, usuario: string)
  {
    return this.storage.ref(`${carpeta}/${usuario}`).getDownloadURL()
  }

  private async crear(imagen: Imagen)
  {
    console.log(imagen);
    database().ref('imagenes')
                    .push()
                    .then( snapshot => imagen.id = snapshot.key)
                    .catch(() => console.info("No se pudo realizar alta"));
    return imagen;
  }

  public actualizar(imagen: Imagen): Promise<any>
  {
    return database().ref('imagenes/' + imagen.id)
                    .update(imagen)
                    .then(() => console.info("Actualizacion exitosa"))
                    .catch(() => console.info("No se pudo actualizar"));
  }

  public borrar(id: number): Promise<any>
  {
    return database().ref('imagenes/' + id)
                    .remove()
                    .then(() => console.info("Imagen eliminada"))
                    .catch(() => console.info("No se pudo realizar la baja."));
  }

  public fetchAll()
  {
    this.imagenes = [];
    console.info("Fetch de todas las imagenes");

    database().ref('imagenes').on('value',(snapshot) => 
    {           
      snapshot.forEach((child) =>
      {
        var data = child.val();
        let aux = Imagen.CrearImagen(data.id, data.base64, data.url, data.usuario, data.nombreUsuario,
                                      data.fecha, data.tipo, data.votos);
        this.imagenes.push(aux);
        console.log(this.imagenes);
      });
      console.info("Fetch imagenes");
    });
    console.log(this.imagenes);
    return this.imagenes;
  }

  public fetchUsuario(usuario: string): Imagen[]
  {
    let imagenes = [];
    console.info("Fetch de imagnes del usuario");

    database().ref('imagenes').on('value',(snapshot) => {          
      imagenes = [];  
        snapshot.forEach((child) =>{
          var data = child.val();
          if(data.usuario == usuario)
          {
            imagenes.push(Imagen.CrearImagen(data.id, data.base64, data.url, data.usuario, data.nombreUsuario,
                                              data.fecha, data.tipo, data.votos));
          }
        });
        console.info("Fetch imagenes");
    })
    return imagenes;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  comparadorFechas(fechaA: Date, fechaB: Date)
  {
    if(fechaA.getMilliseconds > fechaB.getMilliseconds)
    {
      return -1;
    }
    else if(fechaA.getMilliseconds < fechaB.getMilliseconds)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

}
