import { Component } from '@angular/core';
import { AllPokeService } from 'src/app/services/allPoke/all-poke.service';
import { PokeOnlyService } from 'src/app/services/pokeOnly/poke-only.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
  listaPokemon:any[] = [];
  valor:string = "";

  listaTipos:any[] = [];

  constructor( public allPokeService : AllPokeService, private pokeOnly : PokeOnlyService) { }

  async ngOnInit() {

    await this.getAllPoke();
    
  }

  async getAllPoke(){
    this.allPokeService.getAllPoke().subscribe((data:any)=>{
      console.log(data);
      this.listaPokemon = data.results;
    })
  }

  async getTypes( name:string ){
    this.pokeOnly.getPokeOnly(name).subscribe((data:any)=>{
      console.log(data);
      this.listaTipos = data.types;
      console.log(this.listaTipos);
      
    });
  }

  async getPokeByName(){
    this.pokeOnly.getPokeOnly(this.valor).subscribe((data:any)=>{
      console.log(data);
      this.listaPokemon = data;
    })
  }
  




}
