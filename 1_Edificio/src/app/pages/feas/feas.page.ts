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
  
  constructor(private dataService: DataService, 
              private imagenService: ImagenService,
              private loadingController: LoadingController,
              private toastController: ToastController) 
  {
    // Cargo las imagenes guardadas
    ImagenService.fotosFeas = this.imagenService.fetchAll()
                                                .filter( img => img.tipo == TipoImagen.NEGATIVA);
    this.imagenes = ImagenService.fotosFeas;
    console.log(this.imagenes);
    // ImagenService.fotosBonitas = this.imagenes.filter( img => img.tipo == TipoImagen.POSITIVA);
    // ImagenService.fotosFeas = this.imagenes.filter( img => img.tipo == TipoImagen.NEGATIVA);
    // this.imagenes = ImagenService.fotosFeas;

    this.presentLoading("Cargando...");
    this.usuario = new Usuario();
    // Cargo el usuario logueado
    this.dataService.obtenerLocal()
        .then( data => {
          this.usuario = Object.assign(new Usuario, data);
        });

  }

  ngOnInit() 
  {
  }

  async subirFoto() 
  {
    this.imagenService.sacarFoto(this.usuario, TipoImagen.NEGATIVA)
                      .then(imagen => this.usuario.imagenes.push(imagen.id))
                      .catch(console.error)
                      .finally(() => this.dataService.actualizar(this.usuario));
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 2000,
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
