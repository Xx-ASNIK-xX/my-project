import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-padre',
  templateUrl: './ejemplo-padre.component.html',
  styleUrls: ['./ejemplo-padre.component.scss']
})
export class EjemploPadreComponent implements OnInit {

  mensaje = "hola, te saludo desde el padre";

  constructor() { }

  ngOnInit(): void {
  }

}
