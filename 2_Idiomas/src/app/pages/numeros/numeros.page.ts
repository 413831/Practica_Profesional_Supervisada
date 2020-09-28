import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit, AfterViewInit {
  numeros: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "0",
      img: "/assets/img/0-2x.svg",
      audio_es: "assets/audio/cero.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "1",
      img: "/assets/img/1-2x.svg",
      audio_es: "assets/audio/uno.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "2",
      img: "/assets/img/2-2x.svg",
      audio_es: "assets/audio/dos.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "3",
      img: "/assets/img/3-2x.svg",
      audio_es: "assets/audio/tres.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "4",
      img: "/assets/img/4-2x.svg",
      audio_es: "assets/audio/cuatro.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "5",
      img: "/assets/img/5-2x.svg",
      audio_es: "assets/audio/cinco.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "6",
      img: "/assets/img/6-2x.svg",
      audio_es: "assets/audio/seis.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "7",
      img: "/assets/img/7-2x.svg",
      audio_es: "assets/audio/siete.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "8",
      img: "/assets/img/8-2x.svg",
      audio_es: "assets/audio/ocho.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "9",
      img: "/assets/img/9-2x.svg",
      audio_es: "assets/audio/nueve.mp3",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "10",
      img: "/assets/img/10-2x.svg",
      audio_es: "assets/audio/diez.mp3",
      audio_en: "",
      audio_pt: ""
    },
  ];

  constructor(private audioService: AudioService) 
  {

    
  }

  ngAfterViewInit()
  {
    for (let index = 0; index < this.numeros.length; index++) 
    {
      const numero =  this.numeros[index];
      console.log(numero);
      this.audioService.preload(numero.nombre + "-es", numero.audio_es);  
    }
    
  }

  ngOnInit() {
  }

  play(audioId: string)
  {
    console.log("Audio id: ",audioId);
    this.audioService.play(audioId);
  }

}
