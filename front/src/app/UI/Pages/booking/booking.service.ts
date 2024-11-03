import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  dateSelect:string =''
  bookings:any = []
  constructor(private http : HttpClient) { }

  getBookings(){
    this.http.get(environment.api+'bookingByDate?date='+this.dateSelect).subscribe(
      res=>{
        this.bookings = res;
        console.log(this.bookings)
      })
  }
  setDateSelect(date:string){
    this.dateSelect = date
  }
  saveBooking(data:any){
    this.http.post(environment.api+'booking',data).subscribe(
      res=>{
        this.getBookings()
      }
    )
  }
}
