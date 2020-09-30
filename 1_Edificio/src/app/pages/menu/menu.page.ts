import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Imagen, TipoImagen } from 'src/app/clases/imagen';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { ImagenService } from 'src/app/services/imagen.service';
import { FeasPage } from '../feas/feas.page';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: Usuario;
  imagenes: Imagen[] = [];
  imageElement;
  rutas = 
  [
    {
      nombre: 'Feas',
      ruta: '/feas',
      src: "/assets/img/feo.jpg",
    },
    {
      nombre: 'Bonitas',
      ruta: '/bonitas',
      src: "/assets/img/bonito.jpg",
    }
  ];
  seleccionado: string = '/feas';

  constructor(private router: Router,private loadingController: LoadingController)
  { 
  }

  ngOnInit() {
  }

  
  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 2000,
      spinner: 'bubbles'
    });
    await loading.present();
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

  navegar(ruta: string)
  {
      this.router.navigate([ruta]);
      console.log(ruta);
  }

}
