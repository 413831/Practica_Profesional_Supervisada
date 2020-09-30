import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/clases/imagen';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {
  @Input() imagen: Imagen;

  constructor() { }

  ngOnInit() {}

}
