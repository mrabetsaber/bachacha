import { FormGroup, FormBuilder } from '@angular/forms';
import { CATALOGUE } from './../../shared/mock-data/catalogue-produits';
import { Router } from '@angular/router';
import { CategorieService } from './../../services/categorie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-gestprod',
  templateUrl: './gestprod.component.html',
  styleUrls: ['./gestprod.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GestprodComponent implements OnDestroy {
   myForm : FormGroup
   Products:any[];
   FilterProduct:any[];
   
   Subscribe:Subscription;
   
   panelOpenState = false;
   
   
   prod
   nom
   prix
   cat
   desc



  constructor(   private categorieServ:CategorieService , private router:Router ,private fb :FormBuilder) {
    
   this.Subscribe=  this.categorieServ.getProd().subscribe(res=>
    { this.FilterProduct = this.Products = res;
    
    }
    
    ) }
    ngOnInit(): void {
      
      
      
      
  }
    
  
  supprimerProd(cle){
    this.categorieServ.supprimProd(cle).then(
      res=>console.log("suprimer")
      
    )
  }


    filte(queryString: string){
        
        
        
      if(queryString !==""){
        this.FilterProduct=[]
         this.Products.forEach((p)=> {if(p.payload.doc.data().cat.includes(queryString.toLocaleLowerCase())||
           p.payload.doc.data().nom.includes(queryString.toLocaleLowerCase()) || 
           
           p.payload.doc.data().desc.includes(queryString.toLocaleLowerCase())){

          this.FilterProduct.push(p)
          }
          
        }

           )
         
        

      }
      else{
        this.FilterProduct= this.Products
      }

    }
    
 

  


  ngOnDestroy(): void {
    this.Subscribe.unsubscribe()
    
  }
  changeName(id){
   
   let Record ={};
   this.categorieServ.getPro(id).subscribe(res=>
  
   {this.prod=res;
   Record['cat']= this.prod.payload.data().cat
   Record['prix']=this.prod.payload.data().prix;
   Record['desc']=this.prod.payload.data().desc;
   Record['nom']=this.nom;
   this.categorieServ.updateProd(id,Record);
   
   });
   
    
    
    
    
  
    
  }
  changeCat(id){
   
   let Record ={};
   this.categorieServ.getPro(id).subscribe(res=>
  
   {this.prod=res;
   Record['nom']= this.prod.payload.data().nom
   Record['prix']=this.prod.payload.data().prix;
   Record['desc']=this.prod.payload.data().desc;
   Record['cat']=this.cat;
   this.categorieServ.updateProd(id,Record);
   
   });
   
    
    
    
    
  
    
  }
  changePrix(id){
   
   let Record ={};
   this.categorieServ.getPro(id).subscribe(res=>
  
   {this.prod=res;
   Record['cat']= this.prod.payload.data().cat
   Record['nom']=this.prod.payload.data().nom;
   Record['desc']=this.prod.payload.data().desc;
   Record['prix']=this.prix;
   this.categorieServ.updateProd(id,Record);
   
   });
   
    
    
    
    
  
    
  }
  changeDesc(id){
   
   let Record ={};
   this.categorieServ.getPro(id).subscribe(res=>
  
   {this.prod=res;
   Record['cat']= this.prod.payload.data().cat
   Record['prix']=this.prod.payload.data().prix;
   Record['nom']=this.prod.payload.data().nom;
   Record['desc']=this.desc;
   this.categorieServ.updateProd(id,Record);
   
   });
   
    
    
    
    
  
    
  }
  
}


  