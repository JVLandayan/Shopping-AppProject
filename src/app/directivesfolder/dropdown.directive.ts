import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') Open = false

  @HostListener('click') toggleOpen() {
    this.Open = !this.Open
  }

  constructor() { }


}
