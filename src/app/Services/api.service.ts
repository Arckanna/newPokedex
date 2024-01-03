import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalPokemon, Pokemon } from './pokemon-service.service';

export interface PostResponse {
  name: string;
}

export interface GetPokemonsResponse {
  [key: string]: LocalPokemon;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://angular-avance-9f33d-default-rtdb.europe-west1.firebasedatabase.app';


  constructor( private httpClient: HttpClient) { 
   
  }

  postPokemon(pokemon: LocalPokemon){
    return this.httpClient.post<PostResponse>(`${this.apiURL}/pokemons.json`,pokemon);
  }

  getPokemons(){
    return this.httpClient.get<GetPokemonsResponse>(`${this.apiURL}/pokemons.json`);
  }

  deletePokemon(id: string){
    return this.httpClient.delete(`${this.apiURL}/pokemons/${id}.json`);
  }
}
 