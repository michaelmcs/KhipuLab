import { Component } from '@angular/core';
import {ConfirmService} from "./confirm.service";
import { StylesConfirm } from "./ModelConfirm";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})

export class ConfirmComponent {
  get showAlert(){
    return this.serviceConfirm.showAlert;
  }
  get title(){
    return this.serviceConfirm.title
  }
  get msm(){
    return this.serviceConfirm.msm
  }

  get typeAlert(){
    switch (this.serviceConfirm.typeAlert){
      case 'success':
        return this.serviceConfirm.styleSuccess
      case 'warning':
        return this.serviceConfirm.styleWarning
      case 'danger':
        return this.serviceConfirm.styleDanger
    }
    return this.serviceConfirm.styleSuccess
  }

  constructor(private serviceConfirm:ConfirmService){
  }

  confirmClick(){
    this.serviceConfirm.getValue.emit(true)
    this.serviceConfirm.close()
  }
  cancelClick(){
    this.serviceConfirm.getValue.emit(false)
    this.serviceConfirm.close()
  }
}
