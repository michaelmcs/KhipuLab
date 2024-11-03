import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  DataText:string ="tooltip";
  elRef: ElementRef
  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  setText(text:string){
    this.DataText = text;
  }
  gethtml(){
    return this.elRef.nativeElement.innerHTML;
  }
}
