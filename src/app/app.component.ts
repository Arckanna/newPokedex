import { Component } from '@angular/core';
import { PokemonServiceService } from './Services/pokemon-service.service';

export type PokemonGender = 'male' | 'female';

export interface Pokemon {
  name: string;
  gender: PokemonGender;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'newPokedex';
  currentPokemonName = '';
  pokemons: Pokemon[] = this.PokemonServiceService.pokemons;

 constructor(private PokemonServiceService:PokemonServiceService) {}

  onAddPokemonClick() {
    this.PokemonServiceService.addPokemon(this.currentPokemonName);
  }

  onDeletePokemon(index: number) {
    this.PokemonServiceService.onDeletePokemon(index);
  }
}
