import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  sidebar: boolean = false;

  listaPokemon: any[] = [];

  modal: boolean = false;

  constructor() { }
  ngOnInit(): void {
    this.pushFavorites();
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

  toggleFavorites() {
    this.sidebar = false;

    this.modal = !this.modal;
  }

  pushFavorites() {

    let favoritePokemons = JSON.parse(window.localStorage.getItem('favoritePokemons') || '[]');

    this.listaPokemon = this.listaPokemon.concat(favoritePokemons);
  }

}
