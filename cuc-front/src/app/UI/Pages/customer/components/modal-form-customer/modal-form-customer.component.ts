import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ConfirmService} from "../../../../Components/confirm/confirm.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'modal-form-customer',
  templateUrl: './modal-form-customer.component.html',
  styleUrls: ['./modal-form-customer.component.scss'],
  animations: [
    trigger('openModal',[
      state('void',style({
        opacity: 0
      })),
      transition(':enter',animate(300,style({
        opacity: 1
      }))),
      transition(':leave',animate(300,style({
        opacity: 0
      }))),
    ])
  ]
})
export class ModalFormCustomerComponent {
  titleType:string = 'Crear'
  textBtnType:string = 'Guardar'
  actionEdit:boolean = false
  @Input()
  showModal:boolean = false
  @Output() showModalOut = new EventEmitter<boolean>()
  @Output() edit = new EventEmitter<any>()

  private confirmSubscription? : Subscription;
  dataForm:FormGroup = this.fb.group({
    id: [''],
    name: [''],
    type: [''],
  })
  constructor(private fb: FormBuilder, private serviceCustomer: CustomerService, private confirm:ConfirmService ) {
  }

  loadDataEdit(data:any){
    this.titleType = 'Actualizar'
    this.textBtnType = 'Actualizar'
    if(data){
      this.dataForm.reset({ id: data.id, name: data.name, type: data.type})
    }
    this.actionEdit = true
  }

  changeOut(){
    this.dataForm.reset({status_lab:'available'})
    this.titleType = 'Crear'
    this.textBtnType = 'Guardar'
    this.showModalOut.emit(false)
    this.actionEdit = false
  }
  saveCustomer(){
    let data = this.dataForm.value
    let action = this.actionEdit
    if(!this.actionEdit){
      this.confirm.open('Crear Usuario',this.dataForm.value.name,'success')
    }else{
      this.confirm.open('Actualizar Usuario',this.dataForm.value.name,'warning')
    }
    this.confirmSubscription = this.confirm.getValue.subscribe(
      value=>{
        if(value) {
          if (!action) {
            this.serviceCustomer.saveCustomer(data)
          } else {
            this.serviceCustomer.saveEditCustomer(data)
          }
        }
        this.confirmSubscription?.unsubscribe()
      }
    )
    this.changeOut()
  }
}
