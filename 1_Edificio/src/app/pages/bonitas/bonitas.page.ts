import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Imagen, TipoImagen } from 'src/app/clases/imagen';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { ImagenService } from 'src/app/services/imagen.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-bonitas',
  templateUrl: './bonitas.page.html',
  styleUrls: ['./bonitas.page.scss'],
})
export class BonitasPage implements OnInit {
  usuario: Usuario;
  imagenes: Imagen[] = [];
  imageElement;

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
    this.imagenes = ImagenService.fotosBonitas;
  }

  ngOnInit() {
  }

  async subirFoto() 
  {
    this.imagenService.sacarFoto(this.usuario, TipoImagen.POSITIVA);  
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 1000,
      spinner: 'crescent'
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
