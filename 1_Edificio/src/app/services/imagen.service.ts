import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Imagen } from '../clases/imagen';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  public static imagenes: Imagen[] = [];
  public static test: number = 0;

  constructor(private storage : AngularFireStorage) { }

  async guardarImagen(imagen: Imagen)
  {
    console.log("Guardar imagen-----------------------");
    const metadata = {
      contentType: 'image/jpeg',
      user : imagen.usuario,
      date : imagen.fecha.toDateString()
    };

    console.log(imagen);
    // Se sube imagen a la base de datos
    return this.storage.ref(imagen.usuario).putString(imagen.id, firebase.storage.StringFormat.BASE64, metadata);
  }
}
