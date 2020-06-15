import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') Open = false //Makes a class= class.(anyclass) where that class initially would be = false (not initialized)

  @HostListener('click') toggleOpen() {
    this.Open = !this.Open
  }
  //Then it would be true if an event occurs ('click') in the botton which has the method name toggleOpen(). making it from false to true vice versa

  constructor() { }


}
