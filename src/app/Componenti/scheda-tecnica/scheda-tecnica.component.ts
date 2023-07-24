import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-scheda-tecnica',
  templateUrl: './scheda-tecnica.component.html',
  styleUrls: ['./scheda-tecnica.component.css']
})
export class SchedaTecnicaComponent implements OnInit {

  pokemon: any

  x: any
  
  constructor(private route: ActivatedRoute, private pokemonDB: PokemonService) { //Inietto la classe ActivatedRoute nel componente grazie al costruttore
    //this.route.snapshot.paramMap
  }


  ngOnInit(): void {
    //this.pokemon = this.pokemonDB.getPokemon(this.route.snapshot.params['id']) //Questo è quello visto con Francesco Esposito
    let nomePokemon : string = this.route.snapshot.params['id'] //Qui prendo il parametro route che ho attivato e iscrivendosi alla mappa (subscribe) o facendo un'istantanea (snapshot) prendo il parametro id che è l'index dell'array e quindi sto prendendo il singolo oggetto
    for (let i = 0; i < this.pokemonDB.pokemon.length; i++) { //Poi creo un ciclo for che scorre gli oggetti dell'array del database
      const pokemon = this.pokemonDB.pokemon[i]; //Creo una variabile che immagazzina l'informazione proveniente dallo scorrimento dell'array e quindi dei singoli oggetti
      if(pokemon.nome  === nomePokemon) //Creo, a questo punto, un'istruzione condizionale in cui la proprietà nome dell'oggetto (proveniente dal database) deve essere corrispondente al nome della variabile che ho creato cioè al singolo oggetto dell'array
        this.pokemon = pokemon //A questo punto la variabile che tiro fuori (pokemon:any presente in alto) deve avere come valore il valore del singolo oggetto che ho ottenuto in ciclo. Se è soddisfatta la condizione di sopra, renderizza quanto prendo dalla variabile (cioè l'oggetto)
      //Non basta perché poi devo avere *ngIf nell'HTML del componente che inizializza la variabile se qui viene renderizzata.
      //else(pokemon.nome !== nomePokemon)
        
    }
    //console.log(this.route)
    //this.pokemon = this.pokemonDB.pokemon.find(p => p.nome === nomePokemon)! //Modo diverso di scrivere la stessa cosa di prima (il ciclo for) in una sola riga.

    /*let y : string = this.route.snapshot.params['id']
    for (let i = 0; i < this.pokemonDB.pokemon.length; i++) {
      const pokemon = this.pokemonDB.pokemon[i];
      if(pokemon.abilita[i].punteggioAbilita  === y)
      this.x = pokemon.abilita[i].punteggioAbilita
      this.x = pokemon
    }*/

    /*let y : any = this.route
    console.log(y)*/
  }
}
