import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
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
            private loadingController: LoadingController) 
  {
    // Cargo el usuario logueado
    this.dataService.obtenerLocal().then(user => this.usuario = user);
    this.presentLoading("Cargando...");

    // Cargo las imagenes guardadas
    this.imagenes = ImagenService.imagenes;
    ImagenService.test = 2;
    console.log("TEST", ImagenService.test);
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

}
