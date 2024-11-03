import {EventEmitter, Injectable, Output} from '@angular/core';
import {StylesConfirm} from "./ModelConfirm";



@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  styleSuccess : StylesConfirm = { colorTitle: 'text-verde3', colorBody:'text-verde2', icon:['fas','square-check'],classButton: 'btn-success'}
  styleWarning : StylesConfirm = { colorTitle: 'text-amber-500', colorBody:'text-amber-800', icon:['fas','triangle-exclamation'],classButton: 'btn-primary'}
  styleDanger : StylesConfirm = { colorTitle: 'text-rojo3', colorBody:'text-rojo2', icon:['fas','square-xmark'],classButton: 'btn-danger'}

  showAlert :boolean = false
  title :string = 'titulo'
  msm :string = 'mensaje'
  typeAlert :string = 'default'

  @Output() getValue = new EventEmitter<boolean>()

  constructor() { }

  open(title :string, msm :string, typeAlert:string){
    this.title = title
    this.msm = msm
    this.typeAlert = typeAlert
    this.showAlert = true
  }

  close(){
    this.showAlert = false
  }
}
