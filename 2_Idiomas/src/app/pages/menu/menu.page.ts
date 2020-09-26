import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  idiomaSeleccionado;
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

  banderas : { img, idioma }[] = [
    {
      idioma: 'Español',
      img : '/assets/img/spanish.png'
    },
    {
      idioma: 'Inglés',
      img : '/assets/img/english.png'
    },
    {
      idioma: 'Portugués',
      img : '/assets/img/portuguese.png'
    }
  ];

  constructor() 
  {
    this.idiomaSeleccionado = {
      idioma : 'Español',
      bandera: this.banderas[0].img
    }
  }

  ngOnInit() {
  }

  onClick(bandera)
  {
    console.log(bandera.idioma);
  }
}
