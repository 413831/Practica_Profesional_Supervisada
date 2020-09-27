import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  numeros: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "1",
      img: "/assets/img/0-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "1",
      img: "/assets/img/1-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "2",
      img: "/assets/img/2-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "3",
      img: "/assets/img/3-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "4",
      img: "/assets/img/4-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "5",
      img: "/assets/img/5-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "6",
      img: "/assets/img/6-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "7",
      img: "/assets/img/7-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "8",
      img: "/assets/img/8-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "9",
      img: "/assets/img/9-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "10",
      img: "/assets/img/10-2x.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
