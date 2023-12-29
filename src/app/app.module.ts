import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PokemonItemComponent } from './Components/pokemon-item/pokemon-item.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginTemplateDrivenComponent } from './pages/login-template-driven/login-template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonItemComponent,
    HomeComponent,
    PokemonComponent,
    GeneralComponent,
    NotfoundComponent,
    ErrorComponent,
    LoginTemplateDrivenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
