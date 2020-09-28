import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit, AfterViewInit {
  animales: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "Perro",
      img: "/assets/img/perro.jpg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Gato",
      img: "/assets/img/gato.jpg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Oso",
      img: "/assets/img/oso.jpg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Pato",
      img: "/assets/img/pato.jpg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    },
    {
      nombre: "Elefente",
      img: "/assets/img/elefante.jpg",
      audio_es: "",
      audio_en: "",
      audio_pt: ""
    }
  ];

  constructor(private audioService: AudioService) { }
  

  ngAfterViewInit()
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
