import { CATALOGUE } from './../shared/mock-data/catalogue-produits';
import { Injectable } from '@angular/core';
import { Produit } from '../shared/models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Produit[] {
    return CATALOGUE;
    }
    

  constructor() { }
}
