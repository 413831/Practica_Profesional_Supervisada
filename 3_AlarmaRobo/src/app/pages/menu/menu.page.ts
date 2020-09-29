import { Component, OnInit } from '@angular/core';

// Plugins
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Backlight } from '@ionic-native/backlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';

import { Platform } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  password: string;
  deshabilitarBoton: boolean = false;
  estado: Estado = Estado.DESACTIVADA;
  ejeX;
  ejeY;
  ejeZ;
  timeStamp;
  options: GyroscopeOptions = {
    frequency: 1000
  } 
  deviceRef;
  posicion;
  
  constructor(private platform: Platform, private deviceMotion: DeviceMotion, 
              private flashlight: Flashlight, private vibration: Vibration,   
              private dataService: DataService, private audioService: AudioService) 
  {   
    this.platform.ready().then(() => {
      this.audioService.preload('derecha','assets/audio/derecha.mp3');
      this.audioService.preload('izquierda','assets/audio/izquierda.mp3');
      this.audioService.preload('vertical','assets/audio/vertical.mp3');
      this.audioService.preload('horizontal','assets/audio/horizontal.mp3');
      this.posicion = 'horizontal';
    });
  }

  ngOnInit() {
  }

  activarAlarma()
  {
    this.estado = Estado.ACTIVADA;
    this.deshabilitarBoton = true;

    console.log('Estado --------------------------------------------',this.estado);

    this.start();
  }

  desactivarAlarma()
  {
    this.dataService.obtenerLocal()
        .then(usuario => {

          usuario.pass = this.password;
          this.dataService.login(usuario)
              .then( res => {
                console.log(res);
                this.estado = Estado.DESACTIVADA;
                this.deshabilitarBoton = false;
                this.stop();
              })
        });
  }

  start()
  {
    try
    {
      let option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 200
      };

      this.deviceRef = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) => 
      {
        this.ejeX = "" + acc.x;
        this.ejeY = "" + acc.y;
        this.ejeZ = "" + acc.z;
        this.timeStamp = "" + acc.timestamp;

        if(this.ejeX > 1 && this.ejeX < 8 && this.posicion != 'izquierda' ||
           this.posicion == 'horizontal')
        {
          this.audioService.play('izquierda');
          this.posicion = 'izquierda';
        }

        if(this.ejeX < -1 && this.ejeX > -8 && this.posicion != 'derecha')
        {
          this.audioService.play('derecha');
          this.posicion = 'derecha';
        }

        if(this.posicion != 'horizontal' && this.ejeX > 8 && this.ejeX < 11 || 
          this.posicion != 'horizontal' && this.ejeX < -8 && this.ejeX > -11)
        {
          this.audioService.play('horizontal');
          this.vibration.vibrate(5000);
          this.posicion = 'horizontal';
        }

        if(this.posicion != 'vertical' && (this.ejeX <= 1 && this.ejeX >= -1 ||
            this.ejeX == 0 || this.ejeX == -0))
        {
          setTimeout(() => {
            this.flashlight.switchOn();
          }, 5000);
          this.flashlight.switchOff();
          this.audioService.play('vertical');
          this.posicion = 'vertical';
        }


      });
    }
    catch(error)
    {
      console.error("ERROR: ",error);
    }
  }

  stop()
  {
    this.deviceRef.unsubscribe();
  }

}

enum Estado{
  ACTIVADA = 1,
  DESACTIVADA = 0
}