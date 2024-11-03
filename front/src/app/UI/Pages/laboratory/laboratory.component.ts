import {Component, OnInit, ViewChild} from '@angular/core';
import {LaboratoryService} from "./laboratory.service";
import {ModalFormLaboratoryComponent} from "./components/modal-form-laboratory/modal-form-laboratory.component";
import {ConfirmService} from "../../Components/confirm/confirm.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss']
})
export class LaboratoryComponent implements OnInit{
  @ViewChild(ModalFormLaboratoryComponent) modalForm?: ModalFormLaboratoryComponent;
  private confirmSubscription? : Subscription;
  showModal: boolean = false
  get data(){
    return this.service.laboratories
  }
  constructor(private service:LaboratoryService,private confirm:ConfirmService) {
  }

  ngOnInit() {
   this.service.getLaboratories()
  }
  editLaboratory(data:any){
    this.modalForm?.loadDataEdit(data)
    this.showModal = true
  }
  deleteLaboratory(id:string,nameLaboratory :string){
    this.confirm.open('Eliminar Laboratorio', nameLaboratory,'danger');
    this.confirmSubscription = this.confirm.getValue.subscribe(
      value=>{
        if(value){
          this.service.deleteLaboratory(id)
        }
        this.confirmSubscription?.unsubscribe()
      }
    )
  }
  modalShow(){
    this.showModal = true
  }

  modalHide(e: any){
    this.showModal = false;
  }

}
