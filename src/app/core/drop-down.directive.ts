import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggle(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
