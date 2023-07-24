import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private service: PokemonService){}

  /*onInput(e:Event){
    console.log( (<HTMLInputElement>e.target) .value)
  }*/

  /*onInput(e: any){
  while(e == (<HTMLInputElement>e.target).value){
    (<HTMLInputElement>document.getElementById("input")).style.display = 'block';
    let x = (<HTMLInputElement>document.getElementById("input")).innerHTML = (<HTMLInputElement>e.target).value;
    return console.log(x);
  }}*/

  //pokemon: any = this.pokemonDB
  //constructor(private pokemonDB: PokemonService){}

  myControl = new FormControl('');
  //options: string[] = this.pokemon.pokemon.nome
  options: string[] = ['Bulbasaur', 'Ivysaur', 'Venusaur'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
