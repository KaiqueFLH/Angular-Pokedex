import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeOnlyService {

  constructor(private http : HttpClient) { }

  getPokeOnly(pokeName:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  }
}
