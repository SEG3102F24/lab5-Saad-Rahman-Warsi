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
  import {app,db,dbref,dbstore} from "../environments/environment"
import { get,child, update,ref } from 'firebase/database';

var emplist: Employee[]=[];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore:  Firestore = inject(Firestore);
  
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);
  
  selected=new BehaviorSubject<Employee[]>(emplist);
  /*get $(): Observable<readonly Employee[]> {
    
    const addresses = collection(this.firestore, 'employees');
    //console.log(addresses)
    /*setDoc(doc(addresses, "SF"), {
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000,
      regions: ["west_coast", "norcal"] });*/
      /*setDoc(doc(addresses, "SFA"), {
        name: "San Frisco", state: "CA", country: "USA",
        capital: false, population: 8600,
        regions: ["west_coast", "norcal"] });*/
        /*get(child(dbref,"Employees/")).
        then((snapshot)=>
          {
            if (snapshot.exists())
            {
              var x=snapshot.val()
              emplist=x as Employee[]
              console.log(emplist)
            }
          })
    //return this.employees$;
    //console.log(collectionData(addresses))
    return this.selected;
    //return collectionData(addresses) as Observable<Employee[]>;
  }*/

  async addEmployee(employee: Employee) {
   // this.employees$.next([...this.employees$.getValue(), employee]);
    ////return true;
    //const addresses = collection(dbstore, 'employees');
    // @ts-ignore
    //return addDoc(addresses, {...employee});
    /*setDoc(doc(addresses, "SFA"), {
      name: "San Frisco", state: "CA", country: "USA",
      capital: false, population: 8600,
      regions: ["west_coast", "norcal"] });*/
     //addDoc(addresses, {...employee} );
     //addDoc(addresses,{
      //"name": "San Francisco"});*/
      //emplist.push(employee)
      await update(ref(db,"Employees/"+employee.name),employee)
      this.getEmp()
      
  }

  getEmp():Observable<Employee[]>
  {
    get(child(dbref,"Employees/")).
    then((snapshot)=>
      {
        
        if (snapshot.exists())
        {
          //emplist=[]
          var x=snapshot.val()
          console.log("x=",x)
          for (var ttt in x)
          {
            console.log(ttt)
            //console.log(x.valueOf(ttt))
            //console.log("value of value of",x.valueOf(ttt).valueOf(name))
            
            emplist.push(new Employee(ttt,x[ttt]["dateOfBirth"],x[ttt]["city"],x[ttt]["salary"],x[ttt]["gender"],x[ttt]["email"]))
          }
          emplist=x as Employee[]
          console.log(emplist)
        }
      })
      console.log("returnning this.selected")
      console.log("emplist=",emplist)
      return this.selected;
  }
}
