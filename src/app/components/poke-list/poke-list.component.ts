import { Component } from '@angular/core';
import { AllPokeService } from 'src/app/services/allPoke/all-poke.service';
import { PokeDescriptionService } from 'src/app/services/pokeDescription/poke-description.service';
import { PokeOnlyService } from 'src/app/services/pokeOnly/poke-only.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
  
  listaPokemon: any[] = [];

  favoritePokemons: any[] = [];

  valor: string = "";

  modal: boolean = true;

  description: any;
  descriptions: { [key: string]: string } = {};

  total: number = 0;

  listaTipos: any[] = [];

  selectedPokemon: any ={ 
    favorite: false
  };

  pokemonData: any = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: "",
    moves: [],
    name: "",
    order: 0,
    past_types: [],
    species: {},
    sprites: {},
    stats: [],
    types: [],
    weight: 0
  };

  favorite:boolean = this.selectedPokemon.favorite;

  
  constructor(public allPokeService: AllPokeService, private pokeOnly: PokeOnlyService, private pokeDescript: PokeDescriptionService) { }

  async ngOnInit() {
    await this.getAllPoke();
  }
  
  favoriteStatus() {
    this.selectedPokemon.favorite = !this.selectedPokemon.favorite;
    console.log(this.selectedPokemon.favorite);

    if(this.selectedPokemon.favorite == true) {
      this.favoritePokemons.push(this.selectedPokemon);
    }

    console.log(this.favoritePokemons);
    
  }

  ordenaLista() {
    this.listaPokemon.sort((a, b) => {
      return a.id - b.id;
    })
  }

  async getAllPoke() {
    this.allPokeService.getAllPoke().subscribe((data: any) => {
      data.results.forEach((element: any, index: number) => {
        this.getPokeDescription(element.name);
        this.getPokeByName(element.name);
      });
    });

  }

  async getTypes(name: string) {
    this.pokeOnly.getPokeOnly(name).subscribe((data: any) => {
      console.log(data);
      this.listaTipos = data.types;
      console.log(this.listaTipos);

    });
  }

  getPokeDescription(name: string) {
    this.pokeDescript.getPokeDescription(name).subscribe((data: any) => {
      this.descriptions[name] = data.flavor_text_entries[5].flavor_text;
    });
  }

  calculaStatTotal(stats: any[]) {
    this.total = 0;
    stats.forEach((element: any) => {
      this.total += element.base_stat;
    });

    this.total = this.total / stats.length;
    this.total = Math.round(this.total);

    return this.total;
  }

  async getPokeByName(name: string) {
    this.pokeOnly.getPokeOnly(name).subscribe((data: any) => {
      this.pokemonData = data;
      this.selectedPokemon = data; // Adicione uma entrada vazia para a descrição do Pokémon.
      this.listaPokemon.push(this.pokemonData);
      this.ordenaLista();
      this.getPokeDescription(name); // Passe o índice.
    });
  }

  searchPokemon() {
    if (this.valor == "") {
      this.listaPokemon = [];
      this.getAllPoke();
    }
    
    let pokeSearched = this.listaPokemon.filter((poke) => poke.name.includes(this.valor.toLowerCase()));

    this.listaPokemon = pokeSearched;

  }

  changeModalStatus(selectedPokemon: any) {
    if (selectedPokemon) {
      this.pokemonData = selectedPokemon;
      this.selectedPokemon = {
        ...selectedPokemon,
        description: this.descriptions[selectedPokemon.name],
        favorite: false
      };
    } else {
      this.selectedPokemon = null;
    }
    this.modal = !this.modal;
  }



  addLeadingZeros(id: number): string {
    const idString = id.toString();
    if (idString.length >= 3) {
      return idString;
    } else if (idString.length === 2) {
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
        return 'gray';
    }
  }




}
