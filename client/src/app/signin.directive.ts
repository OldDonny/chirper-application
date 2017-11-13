import { Directive,Input } from '@angular/core';
import {ViewContainerRef,TemplateRef} from '@angular/core'

@Directive({
  selector: '[appSignin]'
})
export class SigninDirective {
  
    constructor(
      private temp: TemplateRef<any>,
      private Vc: ViewContainerRef) { }
  
    @Input() set appSignin(condition: boolean){
      if(condition){
        this.Vc.createEmbeddedView(this.temp);
      }else{
        this.Vc.clear();
      }
    }
  }
  