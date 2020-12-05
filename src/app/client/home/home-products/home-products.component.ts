import { Produit } from './../../../shared/models/produit';
import { CATALOGUE } from './../../../shared/mock-data/catalogue-produits';
import { Component, OnInit, OnChanges, ViewChild, ElementRef, HostListener  } from '@angular/core';


@Component({
  selector: 'home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  
  
  constructor() { }
  title = "PRODUITS" ;
  produits = CATALOGUE ;
  showFiller = false;
  

  ngOnInit(): void {
    
  }
  

}
