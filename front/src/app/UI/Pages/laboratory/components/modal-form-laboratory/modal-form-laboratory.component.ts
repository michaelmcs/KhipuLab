import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LaboratoryService} from "../../laboratory.service";
import {Subscription} from "rxjs";
import {ConfirmService} from "../../../../Components/confirm/confirm.service";
@Component({
  selector: 'modal-form-laboratory',
  templateUrl: './modal-form-laboratory.component.html',
  styleUrls: ['./modal-form-laboratory.component.scss'],
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
export class ModalFormLaboratoryComponent {
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
    flat: [''],
    num_pc: [''],
    status_lab: ['']
  })
  constructor(private fb: FormBuilder, private serviceLaboratory: LaboratoryService, private confirm:ConfirmService ) {
  }

  loadDataEdit(data:any){
    this.titleType = 'Actualizar'
    this.textBtnType = 'Actualizar'
    if(data){
      this.dataForm.reset({ id: data.id, name: data.name, flat: data.flat, num_pc: data.num_pc, status_lab: data.status_lab})
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
  saveLaboratory(){
    let data = this.dataForm.value
    let action = this.actionEdit
    if(!this.actionEdit){
      this.confirm.open('Crear Laboratorio',this.dataForm.value.name,'success')
    }else{
      this.confirm.open('Actualizar Laboratorio',this.dataForm.value.name,'warning')
    }
    this.confirmSubscription = this.confirm.getValue.subscribe(
      value=>{
        if(value) {
          if (!action) {
            this.serviceLaboratory.saveLaboratory(data)
          } else {
            this.serviceLaboratory.saveEditLaboratory(data)
          }
        }
        this.confirmSubscription?.unsubscribe()
      }
    )
    this.changeOut()
  }

}
