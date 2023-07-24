import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

//foto = '../../../assets/bulbasaur.png'

//foto = this.pokemonDB.pokemon[0].foto
//pokemon = this.pokemonDB //Cioè la variabile pokemon immagazzina i valori provenienti dal database (PokemonDB) per immetterli nel sistema

poke:any = this.pokemonDB.pokemon

constructor(private pokemonDB: PokemonService){}

prova(){
  console.log('ho il mouse sulla card')
};

ngOnInit(): void {
  //console.log(this.pokemonDB.pokemon[0].nome);
  console.log(this.poke) // = this.pokemonDB
}
}
