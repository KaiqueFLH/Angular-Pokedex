import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sidebar: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

}
