import {Component, forwardRef, OnInit} from '@angular/core';
import { DateModel } from "./models/dateModel";
import {MonthModel} from "./models/monthModel";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {BookingService} from "../../booking.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true,
    },
  ]
})
export class CalendarComponent implements  OnInit{
  dateSelect: DateModel = new DateModel(1, 1,  2023, 0)
  listDates:Array<DateModel[]> = []
  showDays:Array<DateModel> = []
  rowSelect:number = 0
  backDay:boolean = true
  nextDay:boolean =  true

  constructor(private bookingService:BookingService) {
  }
  ngOnInit() {
    let today = new Date();
    this.setDaysMonth( today.getFullYear(), today.getMonth())
    this.dateSelect =  new DateModel(today.getDate(), today.getMonth() + 1,  today.getFullYear(), today.getDay())
    this.setActualRow(this.dateSelect)
    this.bookingService.setDateSelect(this.getDateFormat(this.dateSelect))
  }

  setDaysMonth(year:number, month:number){
    let daysInMonth = new Date(year, month + 1, 0).getDate()
    let count= 1
    for(let i= 0 ; i < 5 ; i++){
      let tem:DateModel[] = []
      for(let j= 0 ; j < 7 ; j++){
        if(count <= daysInMonth) {
          let date = new Date(year,month,count)
          tem.push(new DateModel(count, date.getMonth() + 1,  date.getFullYear(), date.getDay()))
        }
        count++
      }
      if(tem.length>0){
        this.listDates.push(tem)
      }
    }
  }

  setActualRow(date:DateModel){
    for(let i= 0 ; i < 5 ; i++){
      for(let j= 0 ; j < 7 ; j++) {
        let temp = this.listDates[i][j]
        if (temp){
          if(date.day == temp.day){
            this.rowSelect = i;
          }
        }

      }
    }
    this.showDays = this.listDates[this.rowSelect]
  }

  isActive(date:DateModel) :styleActive{
    let style :styleActive ={bg:'',dayText:'',dayNumber:''}
    if(this.dateSelect.isEqual(date)){
      style.bg ='bg-azul6'
      style.dayText = 'text-blanco'
      style.dayNumber = 'text-blanco'
    }else{
      style.bg =''
      style.dayText = 'text-azul5'
      style.dayNumber = 'text-azul3'
    }
    return style
  }
  backDays(){
    if(this.rowSelect >= 0){
      this.backDay = true
      this.nextDay = true
      this.rowSelect--
      this.showDays = this.listDates[this.rowSelect]
    }
    if(this.rowSelect == 0){
      this.nextDay = true
      this.backDay = false
    }
  }

  changeDateSelect(date:DateModel){
    this.dateSelect = date;
    this.bookingService.setDateSelect(this.getDateFormat(this.dateSelect))
    this.bookingService.getBookings()
  }
  nextDays(){
    if(this.rowSelect < this.listDates.length-1){
      this.nextDay = true
      this.backDay = true
      this.rowSelect++
      this.showDays = this.listDates[this.rowSelect]
    }
    if(this.rowSelect == this.listDates.length - 1){
      this.nextDay = false
      this.backDay = true
    }
  }

  getDateFormat (date:DateModel){
    return date.year+'-'+date.getMonth()+'-'+date.getDay()
  }
}

interface styleActive{
  bg :string,
  dayText :string,
  dayNumber :string
}
