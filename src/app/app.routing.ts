import { HomeComponent } from './components/home/home.component';
import { CineComponent } from './components/cine/cine.component';
import { MusicaComponent } from './components/musica/musica.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { MenucollatzComponent } from './components/menucollatz/menucollatz.component';
import { CollatzcomponentComponent } from './components/collatzcomponent/collatzcomponent.component';

//Necesitamos los siguientes modulos para realizar la declaracion de navegacion

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Definimos un array con nuestras rutas para los components

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'numerodoble', component: NumerodobleComponent },
  { path: 'numerodoble/:numero', component: NumerodobleComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'menucollatz', component: MenucollatzComponent },
  { path: 'collatz/:num', component: CollatzcomponentComponent },
  { path: 'cine', component: CineComponent },
  { path: '**', component: Error404Component },
];

//Desde routing debemos exportar dos caracteristicas para implementar dentro del module
//el proovedor de rutas

export const appRoutingProvider: any[] = [];
//El modulo routing indicando el array de rutas declarado

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
