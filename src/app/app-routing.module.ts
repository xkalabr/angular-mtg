import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard1', pathMatch: 'full' },
  { path: 'dashboard', component: CardsComponent },
  { path: 'card/:id', component: CardsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
