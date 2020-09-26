import { Injectable } from '@angular/core';
import { storage } from 'firebase';
import { Imagen } from '../clases/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor() { }

  guardarImagen(imagen: Imagen)
  {
    let metadata = {
      contentType: 'image/jpeg',
      user : imagen.usuario,
      date : imagen.fecha
    };

    storage().ref('app_1').putString( imagen.id, 'base64', metadata);
  }
}
