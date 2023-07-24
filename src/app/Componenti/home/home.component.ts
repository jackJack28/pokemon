import { Component } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  poke:any = this.pokemonDB.pokemon
  constructor(private pokemonDB: PokemonService){}


  ngOnInit(): void {
    //this.poke = this.pokemonDB.getPokemon(0);
    console.log(this.poke)
  }

}
