import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sala4b',
  templateUrl: './sala4b.page.html',
  styleUrls: ['./sala4b.page.scss'],
})
export class Sala4bPage implements OnInit {
  usuario: Usuario;
  mensaje : string;
  textoAuxiliar : string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  enviar()
  {
    this.mensaje = null;
    console.log(this.textoAuxiliar);
    if(this.textoAuxiliar)
    {
      this.mensaje = this.textoAuxiliar;
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
}
