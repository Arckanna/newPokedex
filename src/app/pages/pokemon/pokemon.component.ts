import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from '../../Guards/can-deactivate.guard';
import { Observable } from 'rxjs';

export interface Tab {
  name: string;
  path: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements CanComponentDeactivate {
  currentIndex: number = 0;
  isEditing = false;
  tabs: Tab[] = [
    {
      name: 'General',
      path: './general',
    },
    {
      name: 'Details',
      path: './details',
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const indexStr = this.activatedRoute.snapshot.params['index'];
    const pokemonName = this.activatedRoute.snapshot.params['pokemon.name'];
    const index = parseInt(indexStr);
    this.currentIndex = index;
    console.log('index', pokemonName);

    this.activatedRoute.params.subscribe((params) => {
      const indexStr = params['index'];
      const index = parseInt(indexStr);
      this.currentIndex = index;
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const isEditingStr = params['isEditing'];
      this.isEditing = isEditingStr && isEditingStr === 'true' ? true : false;
    });

    const currentNavigation = this.router.getCurrentNavigation();
    const state = currentNavigation?.extras.state;
    console.log('state', state);

  }
  canDeactivate():  boolean | Promise<boolean> | Observable<boolean>{
    if(!this.isEditing){
      return true;
    }
    return confirm('Are you sure you want to leave this page?');
  };

 

  onNavigateButtonClick() {
    this.router.navigate(['/pokemon'], { relativeTo: this.activatedRoute });
  }
}
