import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllPokeService {

  constructor(private http : HttpClient) { }

  getAllPoke(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20');
  }
}
