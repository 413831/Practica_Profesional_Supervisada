import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sala4a',
  templateUrl: './sala4a.page.html',
  styleUrls: ['./sala4a.page.scss'],
})
export class Sala4aPage implements OnInit {
  mensaje : string;
  textoAuxiliar : string;

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    console.log("click");
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
