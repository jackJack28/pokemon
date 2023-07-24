import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { PokemonService } from './Services/pokemon.service';
import { FooterComponent } from './Componenti/footer/footer.component';
import { HeaderComponent } from './Componenti/header/header.component';
import { CardComponent } from './Componenti/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { SchedaTecnicaComponent } from './Componenti/scheda-tecnica/scheda-tecnica.component';
import { HomeComponent } from './Componenti/home/home.component';
import { NotFoundComponent } from './Componenti/not-found/not-found.component';

import { NgFor, AsyncPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    SchedaTecnicaComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
