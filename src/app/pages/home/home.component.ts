import { Component } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../../Services/pokemon-service.service';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({ 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'newPokedex';
  currentPokemonName = '';
  pokemons: Pokemon[] = this.PokemonServiceService.pokemons;

 constructor(private PokemonServiceService:PokemonServiceService, public authService: AuthService, private router: Router) {}

  onAddPokemonClick() {
    this.PokemonServiceService.addPokemon(this.currentPokemonName);
  }

  onDeletePokemon(index: number) {
    this.PokemonServiceService.onDeletePokemon(index);
  }
  login(){
    this.authService.login();
  }
  logout(){
    this.authService.logout();
  }
  goToPokemonPage(index: number) {
    this.router.navigate(['/pokemon', index],{state:{pokemon:this.pokemons[index]}});
  }
}
