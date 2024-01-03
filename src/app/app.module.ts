import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonItemComponent } from './Components/pokemon-item/pokemon-item.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { GeneralComponent } from './pages/pokemon/general/general.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginTemplateDrivenComponent } from './pages/login-template-driven/login-template-driven.component';
import { LoginModelDrivenComponent } from './pages/login-model-driven/login-model-driven.component';

import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localFr);

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
    LoginModelDrivenComponent,
    ShortenPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
