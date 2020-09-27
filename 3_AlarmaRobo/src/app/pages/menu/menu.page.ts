import { Component, OnInit } from '@angular/core';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';

import { Plugins } from '@capacitor/core';
import { DataService } from 'src/app/services/data.service';
const { Motion } = Plugins;

// Motion.addListener('accel', (event) => {
//   console.log(event);
// });

// Motion.addListener('orientation', (event) => {
//   console.log(event);
// });

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  password: string;
  deshabilitarBoton: boolean = false;
  estado: Estado = Estado.DESACTIVADA;
  posicion;
  options: GyroscopeOptions = {
    frequency: 1000
  }  
  
  constructor(private gyroscope: Gyroscope, private dataService: DataService) { 
    this.gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
        this.posicion = orientation.x;
    });
  }

  ngOnInit() {
  }

  activarAlarma()
  {
    this.estado = Estado.ACTIVADA;
    this.deshabilitarBoton = true;

    console.log('Estado ',this.estado);

    this.gyroscope.getCurrent(this.options)
      .then((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
      })
      .catch()
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
              })
        });
  }

 
}

enum Estado{
  ACTIVADA = 1,
  DESACTIVADA = 0
}