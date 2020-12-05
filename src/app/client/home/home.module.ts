import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import {MatExpansionModule} from '@angular/material/expansion';

import { HomeProductsComponent } from './home-products/home-products.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import {MatSidenavModule} from '@angular/material/sidenav';





@NgModule({
  declarations: [HomeComponent, HomeProductDetailComponent, HomeProductsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule
    

     
    
    
    
    
    
  
    
    

  ],
  exports: [HomeComponent]
})
export class HomeModule { }
