import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { GestprodRoutingModule } from './gestprod-routing.module';
import { ProductaddComponent } from './productadd/productadd.component';
import { GestprodComponent } from './gestprod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTableModule} from '@angular/material/table';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [ProductaddComponent, GestprodComponent,],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    GestprodRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    MatExpansionModule,
    MatTableModule,
    AngularFireStorageModule,
    MatIconModule

  ],
  exports: [GestprodComponent]
})
export class GestprodModule { }
