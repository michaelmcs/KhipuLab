import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LaboratoryService} from "../../../laboratory/laboratory.service";
import {CustomerService} from "../../../customer/customer.service";
import {BookingService} from "../../booking.service";

@Component({
  selector: 'modal-booking',
  templateUrl: './modal-booking.component.html',
  styleUrls: ['./modal-booking.component.scss'],
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
export class ModalBookingComponent implements OnInit{
  @Input()
  showModal:boolean = false
  @Output() showModalOut = new EventEmitter<boolean>()

  get laboratories(){
    return this.laboratoryService.laboratories.filter((x:any)=>x.status_lab == 'available')
  }

  get customers(){
    return this.customerService.cutomers
  }
  get dateSelect(){
    return this.bookingService.dateSelect
  }
  
  dataForm:FormGroup = this.fb.group({
    selectHours: [{start:0,end:0}],
    booking_time_start:[''],
    booking_time_end:[''],
    laboratory:[''],
    user_lab:[''],
    reason:[''],
    booking_date:['']
  })

  constructor(
    private fb: FormBuilder,
    private laboratoryService:LaboratoryService,
    private customerService:CustomerService,
    private bookingService: BookingService) {
  }

  ngOnInit() {
    this.laboratoryService.getLaboratories()
    this.customerService.getCustomers()
  }

  changeOut(){
    this.showModalOut.emit(false)
  }

  guardar(){
    this.dataForm.controls['booking_date'].setValue(this.dateSelect)
    this.dataForm.controls['booking_time_start'].setValue(this.dataForm.controls['selectHours'].value.start+':00')
    this.dataForm.controls['booking_time_end'].setValue(this.dataForm.controls['selectHours'].value.end+':00')
    this.bookingService.saveBooking(this.dataForm.value)
    this.changeOut()
  }


}
