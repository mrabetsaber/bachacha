import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private  fireservices :AngularFirestore) { }
  addNewProd(Record){
    return this.fireservices.collection('item').add(Record);
  }
  getProd(){
    return this.fireservices.collection('item').snapshotChanges()
                            
  }
  getPro(cleProd){

    return this.fireservices.collection('item').doc(cleProd).snapshotChanges()
  }
  supprimProd(cleProd){
    return this.fireservices.collection('item').doc(cleProd).delete();
  }
  updateProd(cleProd,value){
    return this.fireservices.collection('item').doc(cleProd).update(value);
  }
}
