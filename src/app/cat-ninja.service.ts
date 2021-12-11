import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatNinjaService {

  // definimos de manera determinada ca,ps a estyar usando HttpClient y que lo vamos a llamar
  constructor(
    private http: HttpClient
  ) { }

  // Construir la url de llamada
  fetchUrl = "https://catfact.ninja/fact";

  getKittens (){
    return this.http.get(this.fetchUrl);
  }

}
