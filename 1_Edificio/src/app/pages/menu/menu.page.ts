import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Imagen, TipoImagen } from 'src/app/clases/imagen';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { ImagenService } from 'src/app/services/imagen.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: Usuario;
  imagenes: Imagen[] = [];
  imageElement;

  constructor(private dataService: DataService, private imagenService: ImagenService,
              private loadingController: LoadingController, private toastController: ToastController)
  { 
    this.usuario = new Usuario();
    this.presentLoading("Cargando...");
    this.dataService.obtenerLocal()
                  .then( data => {
                    this.usuario = Object.assign(new Usuario, data);
                  });
  }

  ngOnInit() {
  }

  async sacarFoto() {
    let imagen: Imagen = new Imagen();

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
      imagen.usuario = this.usuario.id;
      imagen.tipo = TipoImagen.POSITIVA;
  
      console.log("Base 64: ", imagen.id);
      console.log("URL: ", imagen.url);
      console.log("Fecha: ", imagen.fecha);
      console.log("Usuario: ", imagen.usuario);
  
      ImagenService.imagenes.push(imagen);
      ImagenService.test = 1;
      console.log(ImagenService.imagenes);
      console.log(ImagenService.test);

      this.imagenService.guardarImagen(imagen)
            .then(snapshot => 
            {
              snapshot.ref.getDownloadURL().then(res => imagen.url = res);
            },error => console.log);
      // this.encodeImageUri(imagen.url, (image64) => {
      //   console.log("IMAGE 64", image64);
      //   imagen.url = image64;
      //   this.imagenService.guardarImagen(imagen)
      //       .then(snapshot => 
      //       {
      //         snapshot.ref.getDownloadURL().then(res => this.presentToast(res))
      //       },error => console.log);
      // });
    })
    .catch( error => {
      this.presentToast(error);
    });
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  encodeImageUri(imageUri, callback) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    var img = new Image();

    img.onload = function () {
      var aux:any = this;
      canvas.width = aux.width;
      canvas.height = aux.height;
      context.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/jpeg");
      var imagen = 
      // Se utiliza el callback para retornar el URL de la imagen
      callback(dataURL);
    };
    img.src = imageUri;
  };

}
