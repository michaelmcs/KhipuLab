import {Component, forwardRef, OnInit} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'select-hours',
  templateUrl: './select-hours.component.html',
  styleUrls: ['./select-hours.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectHoursComponent),
      multi: true,
    },
  ]
})
export class SelectHoursComponent implements OnInit, ControlValueAccessor{
  listHours:any = []
  listSelectHours:any = []
  selectHours:any = {start:0, end:0}
  ngOnInit() {
    this.fillHours()
  }

  onChange = (_:any) => { }
  onTouch = ()=>{}

  writeValue(value:any): void {
    if(value){
      console.log(value)
    }

  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setHoursSelect(){
    let hoursSelect = this.listHours.filter((x:any)=> x.status)
    if(hoursSelect.length>0){
      this.selectHours = {start: hoursSelect[0].start, end: hoursSelect[hoursSelect.length - 1].end}
    }else{
      this.selectHours = {start: 0, end: 0}
    }

    console.log(this.selectHours)
    this.onTouch()
    this.onChange(this.selectHours)
  }
  fillHours(){
    this.listHours = []
    for (let i = 8; i<16;i++){
      this.listHours.push({start:i,end:i + 1,tag:this.getTag(i,i+1),status:false,disabled:false})
    }
  }
  clickItem(index:number){
    if(!this.listHours[index].disabled){
      this.changeClass(index)
      this.disabledItems(index)
      console.log(this.listHours[index])
    }
    this.setHoursSelect()
  }

  disabledItems(index:number){
    for (let i=0; i < this.listHours.length; i++){
      this.listHours[i].disabled = !(i == index || i == index + 1);
      if(this.listHours[i].status){
        this.listHours[i].disabled = false;
      }
    }
  }
  changeClass(index:number){
    this.listHours[index].status = !this.listHours[index].status;
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
