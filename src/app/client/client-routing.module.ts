import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path : 'client', component :ClientComponent,
children: [
  
  {path: 'home', component: HomeComponent}, 
  {path: 'about', component:AboutComponent}, 

]},
//{path :'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
