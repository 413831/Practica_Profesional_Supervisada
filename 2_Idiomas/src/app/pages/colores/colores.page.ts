import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService, ILenguajeSeleccionado } from 'src/app/services/audio.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit, AfterViewInit {
  opcion: ILenguajeSeleccionado;
  
  colores: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "Rojo",
      img: "/assets/img/rojo.svg",
      audio_es: "assets/audio/rojo_es.mp3",
      audio_en: "assets/audio/rojo_en.mp3",
      audio_pt: ""
    },
    {
      nombre: "Azul",
      img: "/assets/img/azul.svg",
      audio_es: "assets/audio/azul_es.mp3",
      audio_en: "assets/audio/azul_en.mp3",
      audio_pt: ""
    },
    {
      nombre: "Amarillo",
      img: "/assets/img/amarillo.svg",
      audio_es: "assets/audio/amarillo_es.mp3",
      audio_en: "assets/audio/amarillo_en.mp3",
      audio_pt: ""
    },
    {
      nombre: "Verde",
      img: "/assets/img/verde.svg",
      audio_es: "assets/audio/verde_es.mp3",
      audio_en: "assets/audio/verde_en.mp3",
      audio_pt: ""
    },
    {
      nombre: "Blanco",
      img: "/assets/img/blanco.svg",
      audio_es: "assets/audio/blanco_es.mp3",
      audio_en: "assets/audio/blanco_en.mp3",
      audio_pt: ""
    },
    {
      nombre: "Negro",
      img: "/assets/img/negro.svg",
      audio_es: "assets/audio/negro_es.mp3",
      audio_en: "assets/audio/negro_en.mp3",
      audio_pt: ""
    },
  ];

  constructor(private audioService: AudioService) 
  {
    this.opcion = AudioService.idiomaSeleccionado; 
  }

  ngAfterViewInit(): void 
  {
    for (let index = 0; index < this.colores.length; index++) 
    {
      const color =  this.colores[index];
      console.log(color);
      this.audioService.preload(color.nombre + "-es", color.audio_es);  
      this.audioService.preload(color.nombre + "-en", color.audio_en);  
      this.audioService.preload(color.nombre + "-pt", color.audio_pt);  
    }
  }

  ngOnInit() {
  }

  play(audioId: string)
  {
    this.audioService.play(audioId);
  }

}
