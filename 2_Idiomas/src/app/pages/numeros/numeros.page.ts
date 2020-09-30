import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService, ILenguajeSeleccionado } from 'src/app/services/audio.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit, AfterViewInit {
  opcion: ILenguajeSeleccionado;

  numeros: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "0",
      img: "/assets/img/0-2x.svg",
      audio_es: "assets/audio/cero_es.mp3",
      audio_en: "assets/audio/0_en.mp3",
      audio_pt: "assets/audio/0_pt.mp3"
    },
    {
      nombre: "1",
      img: "/assets/img/1-2x.svg",
      audio_es: "assets/audio/uno_es.mp3",
      audio_en: "assets/audio/1_en.mp3",
      audio_pt: "assets/audio/1_pt.mp3"
    },
    {
      nombre: "2",
      img: "/assets/img/2-2x.svg",
      audio_es: "assets/audio/dos_es.mp3",
      audio_en: "assets/audio/2_en.mp3",
      audio_pt: "assets/audio/2_pt.mp3"
    },
    {
      nombre: "3",
      img: "/assets/img/3-2x.svg",
      audio_es: "assets/audio/tres_es.mp3",
      audio_en: "assets/audio/3_en.mp3",
      audio_pt: "assets/audio/3_pt.mp3"
    },
    {
      nombre: "4",
      img: "/assets/img/4-2x.svg",
      audio_es: "assets/audio/cuatro_es.mp3",
      audio_en: "assets/audio/4_en.mp3",
      audio_pt: "assets/audio/4_pt.mp3"
    },
    {
      nombre: "5",
      img: "/assets/img/5-2x.svg",
      audio_es: "assets/audio/cinco_es.mp3",
      audio_en: "assets/audio/5_en.mp3",
      audio_pt: "assets/audio/5_pt.mp3"
    },
    {
      nombre: "6",
      img: "/assets/img/6-2x.svg",
      audio_es: "assets/audio/seis_es.mp3",
      audio_en: "assets/audio/6_en.mp3",
      audio_pt: "assets/audio/6_pt.mp3"
    },
    {
      nombre: "7",
      img: "/assets/img/7-2x.svg",
      audio_es: "assets/audio/siete_es.mp3",
      audio_en: "assets/audio/7_en.mp3",
      audio_pt: "assets/audio/7_pt.mp3"
    },
    {
      nombre: "8",
      img: "/assets/img/8-2x.svg",
      audio_es: "assets/audio/ocho_es.mp3",
      audio_en: "assets/audio/8_en.mp3",
      audio_pt: "assets/audio/8_pt.mp3"
    },
    {
      nombre: "9",
      img: "/assets/img/9-2x.svg",
      audio_es: "assets/audio/nueve_es.mp3",
      audio_en: "assets/audio/9_en.mp3",
      audio_pt: "assets/audio/9_pt.mp3"
    },
    {
      nombre: "10",
      img: "/assets/img/10-2x.svg",
      audio_es: "assets/audio/diez_es.mp3",
      audio_en: "assets/audio/10_en.mp3",
      audio_pt: "assets/audio/10_pt.mp3"
    },
  ];

  constructor(private audioService: AudioService) 
  {
    this.opcion = AudioService.idiomaSeleccionado; 
  }

  ngAfterViewInit()
  {
    for (let index = 0; index < this.numeros.length; index++) 
    {
      const numero =  this.numeros[index];
      console.log(numero);
      this.audioService.preload(numero.nombre + "-es", numero.audio_es);  
      this.audioService.preload(numero.nombre + "-en", numero.audio_en);  
      this.audioService.preload(numero.nombre + "-pt", numero.audio_pt);  
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
