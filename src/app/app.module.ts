import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProvider} from './app.routing'

import { AppComponent } from './app.component';
import { CineComponent } from './components/cine/cine.component';
import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MenuComponent } from './components/menu/menu.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzcomponentComponent } from './components/collatzcomponent/collatzcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    CineComponent,
    HomeComponent,
    MusicaComponent,
    MenuComponent,
    Error404Component,
    NumerodobleComponent,
    MenucollatzComponent,
    CollatzcomponentComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
