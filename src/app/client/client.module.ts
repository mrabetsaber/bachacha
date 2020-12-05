import { MatButtonModule } from '@angular/material/button';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule,
    MatToolbarModule,
    MatButtonModule
    

    
  ],
  exports: [ClientComponent]
})
export class ClientModule { }
