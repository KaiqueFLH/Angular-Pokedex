import { Component, Input } from '@angular/core';
import { AllPokeService } from 'src/app/services/allPoke/all-poke.service';
import { PokeOnlyService } from 'src/app/services/pokeOnly/poke-only.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {

  constructor(public allPokeService : AllPokeService, public pokeOnly : PokeOnlyService) { }

  @Input()
  id!:number;
  @Input()
  name!:string;
  @Input()
  url!:string;
  @Input()
  image!:string;

  imagemUrl!:string;

  @Input()
  valor!:string;

  


  pokemonData:any = {
    abilities:[],
    base_experience:0,
    forms:[],
    game_indices:[],
    height:0,
    held_items:[],
    id:0,
    is_default:false,
    location_area_encounters:"",
    moves:[],
    name:"",
    order:0,
    past_types:[],
    species:{},
    sprites:{},
    stats:[],
    types:[],
    favorite:false,
    weight:0
  };

  async ngOnInit() {
    // await this.getAllPoke();
    await this.getOnlyOnePoke(this.name);

    
    
  }

  // async getAllPoke(){
  //   this.allPokeService.getAllPoke().subscribe((data:any)=>{
  //     this.pokemonList = data.results;
  //   })
  // }
  

  async getOnlyOnePoke( name:string ){
    this.pokeOnly.getPokeOnly(name).subscribe((data:any)=>{
      this.pokemonData = data;
      JSON.stringify(this.pokemonData);
      
      this.imagemUrl = this.pokemonData.sprites.front_default;
    console.log(this.imagemUrl);
    });
  }

  addLeadingZeros(id: number ): string {
    const idString = id.toString();
    if(idString.length >= 3){
      return idString;
    }else if(idString.length === 2){
      return '0'.repeat(1) + idString;
    }
    return '0'.repeat(2) + idString;
  }

  toCapitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  getTypeColor(type: string): string {
    switch (type) {
      case 'normal':
        return 'gray';
      case 'fire':
        return 'red';
      case 'water':
        return 'blue';
      case 'electric':
        return 'yellow';
      case 'grass':
        return 'green';
      case 'ice':
        return 'lightblue';
      case 'fighting':
        return 'orange';
      case 'poison':
        return 'purple';
      case 'ground':
        return 'sienna';
      case 'flying':
        return 'skyblue';
      case 'psychic':
        return 'pink';
      case 'bug':
        return 'greenyellow';
      case 'rock':
        return 'brown';
      case 'ghost':
        return 'indigo';
      case 'steel':
        return 'slategray';
      case 'dragon':
        return 'royalblue';
      case 'dark':
        return 'black';
      case 'fairy':
        return 'pink';
      default:
        return 'gray'; // Cor padrão se o tipo não estiver mapeado
    }
  }

  // getImageUrl(){
  //   return this.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
  // }
}
