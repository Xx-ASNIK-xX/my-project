import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  tarjetas = [
    {
      imagen: "assets/images/descarga.jpg",
      categoria:"vuelo",
      titulo: "Viaja a Paris",
      ofertaInfalible: false,
      precio: 654299,
    },
    {
      imagen: "assets/images/colombia.jpg",
      categoria:"hotel",
      titulo: "Viaja a Medellin",
      ofertaInfalible: true,
      precio: 654299,
    },
    {
      imagen: "assets/images/peru.jpg",
      categoria:"vuelo",
      titulo: "Viaja a Peru",
      ofertaInfalible: true,
      precio: 654299,
    },
    {
      imagen: "assets/images/nico2.jpg",
      categoria:"hotel",
      titulo: "Viaja a Brasil",
      ofertaInfalible: false,
      precio: 654299,
    }
  ];

  imagen = "assets/images/brasil.jpg";
  categoria = "vuelo";
  titulo = "viaja a paris";
  ofertaInfalible = true;
  precio = 654299;
  
  constructor() { }

  ngOnInit(): void {
  }

}
