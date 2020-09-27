import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sala4b',
  templateUrl: './sala4b.page.html',
  styleUrls: ['./sala4b.page.scss'],
})
export class Sala4bPage implements OnInit {
  mensaje : string;
  textoAuxiliar : string;

  constructor() { }

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
}
