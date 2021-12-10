import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  // El valor predeterminado de la images en.... Sami
  @Input() imagen = "assets/images/nico2.JPG";
  @Input() categoria?: string;
  @Input() titulo = "FALTA TITULO"
  @Input() ofertaInfalible = false;
  @Input() precio = 1234;

  ngOnInit(): void {
  }

}
