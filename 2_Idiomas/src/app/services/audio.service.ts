import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';

interface Sound {
  key: string;
  asset: string;
  isNative: boolean
}

export interface ILenguajeSeleccionado{
  idioma: string,
  img: string
}


@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio: boolean = true;
  public static idiomaSeleccionado: ILenguajeSeleccionado = 
  {
    idioma: 'es', 
    img: "/assets/img/spanish.png"
  };

  constructor(private platform: Platform, private nativeAudio: NativeAudio) { }

  preload(key: string, asset: string): void 
  {
    if(this.platform.is('cordova') && !this.forceWebAudio)
    {
      this.nativeAudio.preloadSimple(key, asset);

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: true
      });
    } 
    else 
    {
      let audio = new Audio();
      audio.src = asset;

      this.sounds.push({
        key: key,
        asset: asset,
        isNative: false
      });
    }
  }


  play(key: string): void {

    let soundToPlay = this.sounds.find((sound) => 
    {
      return sound.key === key;
    });

    if(soundToPlay.isNative)
    {
      this.nativeAudio.play(soundToPlay.asset)
          .then((res) => {
            console.log(res);
          }, 
          (err) => {
            console.log(err);
          });
    } 
    else 
    {
      this.audioPlayer.src = soundToPlay.asset;
      this.audioPlayer.play();
    }

  }
}

export enum Idioma
{
  Español = 'es',
  Ingles = 'en',
  Portugues = 'pt'
}