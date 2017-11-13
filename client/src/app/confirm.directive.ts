import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: `[appConfirm]`
})
export class ConfirmDirective {

  @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
    const confirmed= window.confirm('Are you sure you want to delete this chirp?')
    if(true){
      return confirmed;
    }
  }
  

}