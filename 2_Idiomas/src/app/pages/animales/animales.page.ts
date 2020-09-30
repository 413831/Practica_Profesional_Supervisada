import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AudioService, ILenguajeSeleccionado } from 'src/app/services/audio.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit, AfterViewInit {
  opcion: ILenguajeSeleccionado;
  
  animales: { nombre,img, audio_es, audio_en, audio_pt }[] = 
  [
    {
      nombre: "Perro",
      img: "/assets/img/perro.jpg",
      audio_es: "assets/audio/perro_es.mp3",
      audio_en: "assets/audio/perro_en.mp3",
      audio_pt: "assets/audio/perro_pt.mp3"
    },
    {
      nombre: "Gato",
      img: "/assets/img/gato.jpg",
      audio_es: "assets/audio/gato_es.mp3",
      audio_en: "assets/audio/gato_en.mp3",
      audio_pt: "assets/audio/gato_pt.mp3"
    },
    {
      nombre: "Oso",
      img: "/assets/img/oso.jpg",
      audio_es: "assets/audio/oso_es.mp3",
      audio_en: "assets/audio/oso_en.mp3",
      audio_pt: "assets/audio/oso_pt.mp3"
    },
    {
      nombre: "Pato",
      img: "/assets/img/pato.jpg",
      audio_es: "assets/audio/pato_es.mp3",
      audio_en: "assets/audio/pato_en.mp3",
      audio_pt: "assets/audio/pato_pt.mp3"
    },
    {
      nombre: "Elefente",
      img: "/assets/img/elefante.jpg",
      audio_es: "assets/audio/elefante_es.mp3",
      audio_en: "assets/audio/elefante_en.mp3",
      audio_pt: "assets/audio/elefante_pt.mp3"
    }
  ];

  constructor(private audioService: AudioService) 
  {
    this.opcion = AudioService.idiomaSeleccionado; 
  }

  ngAfterViewInit()
  {
    for (let index = 0; index < this.animales.length; index++) 
    {
      const animal =  this.animales[index];
      console.log(animal);
      this.audioService.preload(animal.nombre + "-es", animal.audio_es);  
      this.audioService.preload(animal.nombre + "-en", animal.audio_en);  
      this.audioService.preload(animal.nombre + "-pt", animal.audio_pt);  
    }
  }

  ngOnInit() {
  }

  play(audioId: string)
  {
    this.audioService.play(audioId);
  }

}
