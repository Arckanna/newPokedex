import { Injectable } from '@angular/core';

export type PokemonGender = 'male' | 'female';

export interface Pokemon {
  name: string;
  gender: PokemonGender;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  pokemons: Pokemon[] = [];

  constructor() { }
  addPokemon(name: string) {
    this.pokemons.push({
      name,
      gender: Math.random() < 0.5 ? 'male' : 'female',
    });
  }
  onDeletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }
}
