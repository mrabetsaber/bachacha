import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { GestprodModule } from './gestprod/gestprod.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeadmModule,
    GestprodModule
  ]
})
export class AdminModule { }
