import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeModalComponent } from './components/poke-modal/poke-modal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AllPokeService } from './services/allPoke/all-poke.service';
import { PokeOnlyService } from './services/pokeOnly/poke-only.service';
import { PokeDescriptionService } from './services/pokeDescription/poke-description.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    PokeListComponent,
    PokeModalComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [AllPokeService,PokeOnlyService,PokeDescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
