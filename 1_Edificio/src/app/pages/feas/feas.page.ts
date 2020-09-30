import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Imagen, TipoImagen } from 'src/app/clases/imagen';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { ImagenService } from 'src/app/services/imagen.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-feas',
  templateUrl: './feas.page.html',
  styleUrls: ['./feas.page.scss'],
})
export class FeasPage implements OnInit {
  usuario: Usuario;
  imagenes: Imagen[] = [];
  // imagenes = [ "https://firebasestorage.googleapis.com/v0/b/web-apps---practica.appspot.com/o/seidman-cancer-center-building-at-daytime-668298.jpg?alt=media&token=20b609f0-f4c3-44d7-85da-4ffa0ef6dfc0",
  //           "https://firebasestorage.googleapis.com/v0/b/web-apps---practica.appspot.com/o/edificios_1.jpeg?alt=media&token=e33e99b2-392a-425a-a4d5-9a5a1710bb48"
  //             ];
  
  constructor(private dataService: DataService, 
              private imagenService: ImagenService,
              private loadingController: LoadingController,
              private toastController: ToastController) 
  {
    this.presentLoading("Cargando...");
    this.usuario = new Usuario();
    // Cargo el usuario logueado
    this.dataService.obtenerLocal()
        .then( data => {
          this.usuario = Object.assign(new Usuario, data);
        });

    // Cargo las imagenes guardadas
    this.imagenes = ImagenService.fotosFeas;
    
  }

  ngOnInit() {
  }

  async subirFoto() 
  {
    this.imagenService.sacarFoto(this.usuario, TipoImagen.NEGATIVA);  
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 1000,
      spinner: "crescent"
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
}
