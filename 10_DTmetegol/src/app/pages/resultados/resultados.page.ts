import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/clases/partido';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  partidos: Partido[] = [];

  constructor(private partidoService: PartidosService) 
  {
    this.partidos = PartidosService.partidos;
  }

  ngOnInit() {
  }

}
