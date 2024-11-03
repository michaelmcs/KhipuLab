import {ApplicationRef, Directive, ElementRef, Input, ViewContainerRef} from '@angular/core';
import {TooltipComponent} from "../components/tooltip/tooltip.component";

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective
{
  private positions = ['top','left','right','bottom']
  private htmlElement?: ElementRef<HTMLElement>
  @Input() set tooltipText( value:string){
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace('TOOLTIPTEXT', value);
  }

  @Input() set tooltipPosition( value:string){
    if(this.positions.includes(value)){
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace('POSITION', value);
    }else{
      console.log("not available position on tooltip")
    }

  }

  constructor(private el: ElementRef<HTMLElement>,private viewContainerRef: ViewContainerRef,private appRef: ApplicationRef) {
    //console.log("tooltip directiva")
    const componentRef = this.viewContainerRef.createComponent(TooltipComponent);
    this.el.nativeElement.classList.add('tooltip-container');
    this.el.nativeElement.innerHTML=componentRef.instance.gethtml();
    componentRef.destroy()
  }

}
