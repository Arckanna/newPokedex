import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PokemonItemComponent } from './Components/pokemon-item/pokemon-item.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { 
    path: '',
     component: HomeComponent
  },
  {
    path: 'pokemon/:index',
    component: PokemonComponent,
    children: [
      {
        path: '',
       redirectTo: 'general',
       pathMatch: 'full'
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
