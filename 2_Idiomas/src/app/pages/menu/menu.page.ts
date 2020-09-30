import { Component, OnInit } from '@angular/core';
import { AudioService, Idioma, ILenguajeSeleccionado } from 'src/app/services/audio.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  idiomaSeleccionado: ILenguajeSeleccionado;
  slides: { img: string, route: string }[] = [
    {
      img: '/assets/img/animales_1.jpg',
      route: '/animales'
    },
    {
      img: '/assets/img/colores_1.jpg',
      route: '/colores'
    },
    {
      img: '/assets/img/numeros_2.jpg',
      route: '/numeros'
    },
  ];

  banderas : ILenguajeSeleccionado[] = [
    {
      idioma: Idioma.Español,
      img : '/assets/img/spanish.png'
    },
    {
      idioma: Idioma.Ingles,
      img : '/assets/img/english.png'
    },
    {
      idioma: Idioma.Portugues,
      img : '/assets/img/portuguese.png'
    }
  ];

  constructor() 
  {
    this.idiomaSeleccionado = {
      idioma : Idioma.Español,
      img: this.banderas[0].img
    }
  }

  ngOnInit() {
  }

  seleccionar(opcion: ILenguajeSeleccionado)
  {
    this.idiomaSeleccionado.idioma = opcion.idioma;
    this.idiomaSeleccionado.img = opcion.img;

    AudioService.idiomaSeleccionado = this.idiomaSeleccionado;
    console.log(AudioService.idiomaSeleccionado);
  }
}
