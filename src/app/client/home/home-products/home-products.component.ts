import { ProductService } from './../../../services/product.service';

import { Component, OnInit, OnChanges, ViewChild, ElementRef, HostListener  } from '@angular/core';


@Component({
  selector: 'home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {
  
  
  constructor(private productService:ProductService) { }
  title = "PRODUITS" ;
  produits = [] ;
  showFiller = false;

  getProducts():void{
    this.produits=this.productService.getProducts()
  }

  ngOnInit(): void {
    this.getProducts()
    
  }
  

}
