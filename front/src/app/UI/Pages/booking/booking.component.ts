import {Component, OnInit} from '@angular/core';
import {BookingService} from "./booking.service";
import {environment} from "../../../../environments/environment";
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{
  url:string=environment.host
  showModal: boolean = false
  get bookings(){
    return this.bookingService.bookings
  }
  get dateSelect(){
    return this.bookingService.dateSelect
  }
  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.bookingService.getBookings()
    console.log(Number('09:00:00'.split(':')[0]))
  }

  modalShow(){
    this.showModal = true
  }
  modalHide(e: any){
    this.showModal = false;
  }

  formatHours(dateStart:string, dateEnd:string){
    return this.getTag(Number(dateStart.split(':')[0]),Number(dateEnd.split(':')[0]))
  }
  getTag(start:number,end:number){
    let txtStart = ''
    let txtEnd = ''
    if(start < 12){
      txtStart = this.addCero(start)+':00 am'
    }else{
      txtStart = this.addCero(start == 12 ? 12 : start - 12)+':00 pm'
    }

    if(end < 12){
      txtEnd = this.addCero(end)+':00 am'
    }else{
      txtEnd = this.addCero(end == 12 ? 12 : end - 12)+':00 pm'
    }

    return txtStart +' - '+ txtEnd
  }
  addCero(num:number):string{
    if(num<10){
      return '0'+num
    }
    return num + ''
  }

}
