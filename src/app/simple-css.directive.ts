import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appSimpleCSS]"
})
export class SimpleCSSDirective {
  constructor(private elementref: ElementRef) {
    elementref.nativeElement.style.color = "blue";
  }
}
