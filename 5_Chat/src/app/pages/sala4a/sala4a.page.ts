import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Mensaje } from 'src/app/clases/mensaje';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-sala4a',
  templateUrl: './sala4a.page.html',
  styleUrls: ['./sala4a.page.scss'],
})
export class Sala4aPage implements OnInit {
  usuario: Usuario = new Usuario();
  mensaje : Mensaje;
  mensajes: Mensaje[];
  textoAuxiliar : string;

  constructor(private dataService: DataService, private mensajeService: MensajesService, 
              private loadingController: LoadingController) 
  {
    this.mensajes = MensajesService.mensajes;
    this.presentLoading("Ingresando...");
  }

  ngOnInit() 
  {
    this.cargarDatos();
  }

  onClick()
  {
    console.log("click");
  }

  enviar()
  {
    this.mensaje = new Mensaje();
    console.log(this.textoAuxiliar);
    if(this.textoAuxiliar)
    {
      this.mensaje = Mensaje.CrearMensaje(this.textoAuxiliar, this.usuario.id, this.usuario.alias,
                                          new Date().toUTCString(), "sala4A");
      this.textoAuxiliar = null;
    }
  }

  cargarDatos()
  {
    this.dataService.obtenerLocal()
        .then(data => {
          console.log(data);
          this.usuario = Object.assign(new Usuario,data);
        });
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 2000,
      spinner: 'dots'
    });
    await loading.present();
  }

}
