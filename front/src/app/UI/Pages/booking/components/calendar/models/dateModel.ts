export class DateModel{
  day:number = 0
  month:number = 0
  year:number = 0
  dayOfWeek:number = 0

  constructor(day:number,month:number,year:number,dayOfWeek:number) {
    this.day = day
    this.month = month
    this.year = year
    this.dayOfWeek = dayOfWeek
  }

  getDayText():string{
    switch (this.dayOfWeek){
      case 0:
        return 'Domingo'
      case 1:
        return 'Lunes'
      case 2:
        return 'Martes'
      case 3:
        return 'Miércoles'
      case 4:
        return 'Jueves'
      case 5:
        return 'Viernes'
      case 6:
        return 'Sábado'
      default:
        return ''
    }
  }

  getMonthText() :string{
    switch (this.month){
      case 1:
        return 'Enero'
      case 2:
        return 'Febrero'
      case 3:
        return 'Marzo'
      case 4:
        return 'Abril'
      case 5:
        return 'Mayo'
      case 6:
        return 'Junio'
      case 7:
        return 'Julio'
      case 8:
        return 'Agosto'
      case 9:
        return 'Setiembre'
      case 10:
        return 'Octubre'
      case 11:
        return 'Noviembre'
      case 12:
        return 'Diciembre'
      default:
        return ''
    }
  }

  getDay():string{
    if(this.day<10){
      return '0'+this.day
    }else{
      return  this.day.toString()
    }
  }

  getMonth():string{
    if(this.month<10){
      return '0'+this.month
    }else{
      return  this.month.toString()
    }
  }

  isEqual(date:DateModel):boolean{
    return this.day == date.day && this.month == date.month && this.year == date.year
  }
}
