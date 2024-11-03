import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  laboratories:any =[]
  constructor(private http : HttpClient) { }

  getLaboratories(){
    this.http.get(environment.api+'laboratory').subscribe(
      res=>{
        this.laboratories = res;
      })
  }
  saveLaboratory(data:any){
    this.http.post(environment.api+'laboratory',data).subscribe(
      res=>{
        this.getLaboratories()
      }
    )
  }

  saveEditLaboratory(data:any){
    this.http.put(environment.api+'laboratory/'+data.id,data).subscribe(
      res=>{
        this.getLaboratories()
      }
    )
  }
  deleteLaboratory(id:string){
    console.log('eliminar')
    this.http.delete(environment.api+'laboratory/'+id).subscribe(
      res=>{
        this.getLaboratories()
      }
    )
  }
}
