import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  cutomers:any =[]
  constructor(private http : HttpClient) { }

  getCustomers(){
    this.http.get(environment.api+'customer').subscribe(
      res=>{
        this.cutomers = res;
      })
  }
  saveCustomer(data:any){
    this.http.post(environment.api+'customer',data).subscribe(
      res=>{
        this.getCustomers()
      }
    )
  }

  saveEditCustomer(data:any){
    this.http.put(environment.api+'customer/'+data.id,data).subscribe(
      res=>{
        this.getCustomers()
      }
    )
  }
  deleteCustomer(id:string){
    console.log('eliminar')
    this.http.delete(environment.api+'customer/'+id).subscribe(
      res=>{
        this.getCustomers()
      }
    )
  }
}
