import { Component } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../../Services/pokemon-service.service';

@Component({ 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
