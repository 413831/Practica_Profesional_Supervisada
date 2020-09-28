import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit, AfterViewInit {
  colores: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "Rojo",
      img: "/assets/img/rojo.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Azul",
      img: "/assets/img/azul.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Amarillo",
      img: "/assets/img/amarillo.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Verde",
      img: "/assets/img/verde.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Blanco",
      img: "/assets/img/blanco.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Negro",
      img: "/assets/img/negro.svg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
  ];

  constructor(private audioService: AudioService) { }

  ngAfterViewInit(): void 
  {
    this.audioService.preload('es-1', 'assets/audio/test.mp3');
  }

  ngOnInit() {
  }

  play(audioId: string)
  {
    this.audioService.play(audioId);
  }

}
