import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host:{
    '(click)': 'applyLogic()'
  }
})
export class HighlightDirective {

@Input() number = 0;
@Input() divisible = 1;
  private el: ElementRef;

  constructor(el:ElementRef) { 
    this.el = el;
  }

  applyLogic(){

    if(this.number % this.divisible == 0)
    {
      this.el.nativeElement.style.color = 'green'
    }
    else
    {
      this.el.nativeElement.style.color = 'red'
    }
  }
}
