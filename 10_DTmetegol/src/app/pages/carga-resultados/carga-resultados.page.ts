import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, LoadingController } from '@ionic/angular';
import { Partido } from 'src/app/clases/partido';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-carga-resultados',
  templateUrl: './carga-resultados.page.html',
  styleUrls: ['./carga-resultados.page.scss'],
})
export class CargaResultadosPage implements OnInit {
  partidos: Partido[] = [];

  @ViewChild('lista', { static: false}) lista: IonList;

  constructor(private partidoService: PartidosService, private loadingController: LoadingController,
              private alertCtrl: AlertController) 
  { 
    this.partidos = PartidosService.partidos;
    this.presentLoading();
    console.log(this.partidos);
  }

  ngOnInit() {
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando partidos',
      duration: 2000,
      spinner: 'bubbles',
      mode: "ios"
    });
    await loading.present();
  }

  async mostrarVentana(partido) {

    const alert = await this.alertCtrl.create({
      translucent: true,
      header: 'Cargar resultados',
      mode: "md",
      inputs: [
        {
          name: 'golesA',
          type: 'number',
          placeholder: 'Puntos Equipo A', 
        },
        {
          name: 'golesB',
          type: 'number',
          placeholder: 'Puntos Equipo B', 
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Cargar',
          handler: (data) => this.guardarResultados(data, partido)
        }
      ]
    });

    await alert.present();
  }

  guardarResultados(data, partido)
  {

    console.log(data);
    partido.equipoA.goles = data.golesA;
    partido.equipoB.goles = data.golesB;
    console.log(partido);
    
    this.lista.closeSlidingItems();
  }
}
