import { ProductaddComponent } from './gestprod/productadd/productadd.component';

import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestprodComponent } from './gestprod/gestprod.component';


const routes: Routes = [{path:'admin',component:AdminComponent,
children:[{path:'gestprod',component:GestprodComponent,
              children:[
                        {path:"productadd",component:ProductaddComponent},
                        
                        
                ]}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
