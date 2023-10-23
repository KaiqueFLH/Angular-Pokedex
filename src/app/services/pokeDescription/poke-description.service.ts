import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeDescriptionService {

  constructor(private http : HttpClient) { }

  getPokeDescription(pokeName:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${pokeName}`)
  }
}
