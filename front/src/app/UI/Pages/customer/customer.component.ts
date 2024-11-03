import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalFormCustomerComponent} from "./components/modal-form-customer/modal-form-customer.component";
import {Subscription} from "rxjs";
import {ConfirmService} from "../../Components/confirm/confirm.service";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  showModal: boolean = false
  private confirmSubscription? : Subscription;
  @ViewChild (ModalFormCustomerComponent) modalForm?: ModalFormCustomerComponent

  get data(){
    return this.service.cutomers
  }
  constructor(private service:CustomerService,private confirm:ConfirmService) {
  }
  modalShow(){
    this.showModal = true
  }

  ngOnInit() {
    this.service.getCustomers()
  }
  editCustomer(data:any){
    this.modalForm?.loadDataEdit(data)
    this.showModal = true
  }
  deleteCustomer(id:string,nameCustomer :string){
    this.confirm.open('Eliminar Usuario', nameCustomer,'danger');
    this.confirmSubscription = this.confirm.getValue.subscribe(
      value=>{
        if(value){
          this.service.deleteCustomer(id)
        }
        this.confirmSubscription?.unsubscribe()
      }
    )
  }
  modalHide(e: any){
    this.showModal = false;
  }

}
