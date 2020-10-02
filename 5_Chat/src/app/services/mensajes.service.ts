import { Injectable } from '@angular/core';
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  public static mensajes: Mensaje[] = [
    {
      texto: "Windguardium Leviosa",
      usuario: '1',
      nombreUsuario: "Pepito",
      fecha: new Date().toUTCString(),
      sala: 'sala4a'
    },
    {
      texto: "Flipendo",
      usuario: '1',
      nombreUsuario: "Pepito",
      fecha: new Date().toUTCString(),
      sala: 'sala4a'
    },
    {
      texto: "Expecto Patronum",
      usuario: '1',
      nombreUsuario: "Pepito",
      fecha: new Date().toUTCString(),
      sala: 'sala4a'
    }
  ];

  constructor() { }
}
