import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DetailsComponent } from './pages/pokemon/details/details.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { CanDeactivateGuard } from './Guards/can-deactivate.guard';
import { ErrorComponent } from './pages/error/error.component';
import { LoginTemplateDrivenComponent } from './pages/login-template-driven/login-template-driven.component';

const routes: Routes = [
  { 
    path: '',
    component:LoginTemplateDrivenComponent
     //component: HomeComponent
  },
  { 
    path: 'login-template-driven-form',
     component: LoginTemplateDrivenComponent
  },
  {
    path: 'pokemon/:index',
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard],
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
    component: ErrorComponent,
    data: {
      message: 'Page not found'
    }
  },
  
  {
    path: '**',
    redirectTo: '/notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
