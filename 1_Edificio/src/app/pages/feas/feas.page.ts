import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { Imagen, TipoImagen } from 'src/app/clases/imagen';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';

const { Camera } = Plugins;

@Component({
  selector: 'app-feas',
  templateUrl: './feas.page.html',
  styleUrls: ['./feas.page.scss'],
})
export class FeasPage implements OnInit {
  usuario: Usuario;
  imagenes: Imagen[] = [];
  imageElement;
  
  constructor(private dataService: DataService) 
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
      resultType: CameraResultType.Uri,
      correctOrientation: true
    });

    imagen.url = image.webPath;
    imagen.fecha = new Date();
    imagen.usuario = this.usuario.id;
    imagen.tipo = TipoImagen.NEGATIVA;
    

    this.imagenes.push(imagen);
    // Can be set to the src of an image now
    this.imageElement = imagen.url;
    //imageElement.src = imageUrl;
  }
}
