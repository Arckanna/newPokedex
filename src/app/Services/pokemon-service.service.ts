import { Injectable } from '@angular/core';
import { ApiService, GetPokemonsResponse, PostResponse } from './api.service';
import { map, tap } from 'rxjs';

export type PokemonGender = 'male' | 'female';

export interface LocalPokemon {
  name: string;
  gender: PokemonGender;
  creationDate?: Date;
}
export interface Pokemon extends LocalPokemon {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  pokemons: Pokemon[] = [];

  constructor(private apiService: ApiService) {
    this.getPokemons();
  }

  addPokemon(name: string) {
    const newLocalPokemon: LocalPokemon = {
      name,
      gender: Math.random() < 0.5 ? 'male' : 'female',
      creationDate: new Date(),
    };
    this.apiService
      .postPokemon(newLocalPokemon)
      .pipe(
        map((response: PostResponse) => 
        { const newPokemon: Pokemon = { 
          ...newLocalPokemon,
           id: response.name }
           return newPokemon
          })
          )
      .subscribe((pokemon: Pokemon) => {
        this.pokemons.push(pokemon);
      });
    
  }

  onDeletePokemon(index: number) {
    this.apiService.deletePokemon(this.pokemons[index].id).subscribe(() => {this.pokemons.splice(index, 1);});
    
  }

  getPokemons() {
    return this.apiService.getPokemons()
    .pipe
    (map((response: GetPokemonsResponse) => {
      const pokemons: Pokemon[] = [];
     Object.entries(response).forEach(([id, pokemon]) => {
       pokemons.push({ ...pokemon, id });
     });
      return pokemons;
    }),
    tap((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    })
    );
   
  }
}
