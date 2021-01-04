import { PageNotFoundComponent } from './../../page-not-found/page-not-found.component';

import { HomeProductsComponent } from './home-products/home-products.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },

                        {path:'home-products',component:HomeProductsComponent},
                        {path:'home-products-componnent',component:HomeProductsComponent},
                        
                        {path : '', redirectTo : 'home', pathMatch : 'full'},
                       // {path :'**', component:PageNotFoundComponent}
                         ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
