import { Injectable,inject } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  setDoc,
  deleteDoc,getDoc} from "@angular/fire/firestore";
  import {app} from "../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore:  Firestore = inject(Firestore);
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);

  get $(): Observable<readonly Employee[]> {
    
    const addresses = collection(this.firestore, 'employees');
    //console.log(addresses)
    /*setDoc(doc(addresses, "SF"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });*/
    //return this.employees$;
    console.log(collectionData(addresses))
    return collectionData(addresses) as Observable<Employee[]>;
  }

  addEmployee(employee: Employee) {
   // this.employees$.next([...this.employees$.getValue(), employee]);
    ////return true;
    const addresses = collection(this.firestore, 'employees');
    // @ts-ignore
    //return addDoc(addresses, {...employee});
   /* setDoc(doc(addresses, "SF6"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });*/
     addDoc(addresses, {...employee} );
  }
}
