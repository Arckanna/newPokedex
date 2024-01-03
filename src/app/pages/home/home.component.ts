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
  pokemons: Pokemon[] = [];

 constructor(private PokemonServiceService:PokemonServiceService, public authService: AuthService, private router: Router) {
  this.getPokemons();
 }

 getPokemons(){
    this.PokemonServiceService.getPokemons().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });;
 }

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
