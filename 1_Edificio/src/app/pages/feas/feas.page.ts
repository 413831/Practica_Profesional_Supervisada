import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
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
  imageElement;
  
  constructor(private dataService: DataService, 
              private imagenService: ImagenService) 
  {
    this.usuario = new Usuario();
    this.dataService.obtenerLocal()
                  .then( data => {
                    this.usuario.id = data.id;
                  });
  }

  ngOnInit() {
  }

  async sacarFoto() {
    let imagen: Imagen;

    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Base64,
      correctOrientation: true
    });

    imagen.id = image.base64String;
    imagen.fecha = new Date();
    imagen.usuario = this.usuario.id;
    imagen.tipo = TipoImagen.NEGATIVA;


    this.imagenes.push(imagen);
    // Can be set to the src of an image now
    this.imageElement = imagen.url;
    //imageElement.src = imageUrl;
  }
}
