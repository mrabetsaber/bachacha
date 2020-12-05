import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientComponent } from './client/client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
{path :'', redirectTo : 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
