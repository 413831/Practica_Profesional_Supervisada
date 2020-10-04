import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private partidoService: PartidosService, private loadingController: LoadingController,
              private dataService:DataService) 
  {
    this.usuario = DataService.usuarioActual;
  }

  ngOnInit() {
    this.dataService.leer();
    this.partidoService.leer();
    this.presentLoading("Ingresando...");
  }

  verResultados()
  {
    console.log("Ver resultados");
  }

  verRanking()
  {
    console.log("Ver ranking");
  }

  armarPartido()
  {
    console.log("Armar partido");
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 2000,
      spinner: 'lines',
      mode: 'ios'
    });
    await loading.present();
  }

}
