import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Macro } from '../macro';
import { MACROS } from '../mock-macros';
import { OBSERVACIONES } from '../mock-observaciones';
import { Observacion } from '../observacion';


@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']
  
})
export class ObservacionesComponent implements OnInit {

  macros$: Observable<Macro[]>;

  ArrayMacros: Macro[] = MACROS;

  observaciones: Observacion[] = OBSERVACIONES

  constructor() { }

  ngOnInit() {
  }

}
