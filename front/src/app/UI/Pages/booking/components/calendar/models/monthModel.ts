export class MonthModel {
  month :number = 0
  year :number = 0
  constructor(month :number,year :number) {
    this.month = month
    this.year = year
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
      case 12:
        return 'Noviembre'
      case 13:
        return 'Diciembre'
      default:
        return ''
    }
  }
}
