import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Imagen, TipoImagen } from '../clases/imagen';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ToastController } from '@ionic/angular';
import { Usuario } from '../clases/usuario';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  public static fotosFeas: Imagen[] = [];
  public static fotosBonitas: Imagen[] = [];
  public static test: number = 0;

  constructor(private storage : AngularFireStorage, private toastController: ToastController) { }

  async sacarFoto(usuario: Usuario, tipo: TipoImagen) 
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
      imagen.id = imageData.base64String;
      imagen.fecha = new Date();
      imagen.usuario = usuario.id;
      imagen.nombreUsuario = usuario.nombre;
      imagen.tipo = tipo;
  
      console.log("Base 64: ", imagen.id);
      console.log("URL: ", imagen.url);
      console.log("Fecha: ", imagen.fecha);
      console.log("Usuario: ", imagen.usuario);
  
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

      this.guardarImagen(imagen, carpeta)
            .then(snapshot => 
            {
              snapshot.ref.getDownloadURL().then(res => imagen.url = res);
            },error => console.log);
    })
    .catch( error => {
      this.presentToast(error);
    });
  }

  async guardarImagen(imagen: Imagen, carpeta: string)
  {
    console.log("Guardar imagen-----------------------");
    const metadata = {
      contentType: 'image/jpeg',
      user : imagen.usuario,
      date : imagen.fecha.toDateString()
    };

    console.log(imagen);
    // Se sube imagen a la base de datos
    return this.storage.ref(carpeta).child(imagen.usuario)
                        .putString(imagen.id, firebase.storage.StringFormat.BASE64, metadata);
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
