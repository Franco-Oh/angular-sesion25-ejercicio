import { Injectable } from '@angular/core';
import { collectionData } from '@angular/fire/firestore';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { Interface } from '../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FerreteriaService {

  constructor(private fireStore:Firestore) { }

  addProduct(ferreteriaInterface:Interface){
    const ferreteriaRef = collection(this.fireStore, 'ferreteriaInterface');
    return addDoc(ferreteriaRef, ferreteriaInterface);
  }

  getFerreteria():Observable<Interface[]> {
    const ferreteriaRef = collection(this.fireStore, 'ferreteriaInterface');
    return collectionData(ferreteriaRef, {idField:'id'}) as Observable<Interface[]>
  }

  deleteFerreteria(ferreteria:Interface){
    const ferreteriaRef = doc(this.fireStore, `ferreteria/${ferreteria.id}`);
    return deleteDoc(ferreteriaRef);
  }
}
