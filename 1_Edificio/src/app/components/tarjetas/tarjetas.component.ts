import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/clases/imagen';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent implements OnInit {
  @Input() titulo = "";
  @Input() imagenes: Imagen[] = [];

  constructor() {
    this.imagenes.sort((a,b) => this.comparadorFechas(a.fecha,b.fecha));
  }

  ngOnInit() {}

  comparadorFechas(fechaA: Date, fechaB: Date)
  {
    if(fechaA.getMilliseconds > fechaB.getMilliseconds)
    {
      return -1;
    }
    else if(fechaA.getMilliseconds < fechaB.getMilliseconds)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  }

}
