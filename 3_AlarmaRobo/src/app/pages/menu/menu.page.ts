import { Component, OnInit } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation/ngx';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';

import { Platform } from '@ionic/angular';

import { DataService } from 'src/app/services/data.service';

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
  
  constructor(private deviceMotion: DeviceMotion,private dataService: DataService, private platform: Platform) 
  { 
   
  }


  ngOnInit() {
  }

  activarAlarma()
  {
    this.estado = Estado.ACTIVADA;
    this.deshabilitarBoton = true;

    console.log('Estado --------------------------------------------',this.estado);

    this.platform.ready().then(() => {
      this.start();
    });

   
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
      })
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