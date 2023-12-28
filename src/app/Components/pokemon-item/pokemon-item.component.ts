import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../Services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.scss'
})
export class PokemonItemComponent {
  @Input() pokemon?: Pokemon;

  @Output() delete= new EventEmitter();
  
  onPokemonDelete() {
    this.delete.emit(this.pokemon);
  }
}
