import { Directive, Input } from '@angular/core';
import {ViewContainerRef,TemplateRef} from '@angular/core'


@Directive({
  selector: '[appInfo]'
})
export class InfoDirective {

  constructor(
    private temp: TemplateRef<any>,
    private Vc: ViewContainerRef) { }

  @Input() set appInfo(condition: boolean){
    if(condition){
      this.Vc.createEmbeddedView(this.temp);
    }else{
      this.Vc.clear();
    }
  }
}
