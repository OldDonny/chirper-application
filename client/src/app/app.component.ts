import { Component } from '@angular/core';
import {ListComponent} from './list/list.component'
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import {MatMenuModule} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info:string;
  condition: false;

  constructor(){
    this.info= 'Welcome to Tree house. We are a full service chat application and we strive to bring you up to date information on people in your treehouse'
  }
  
}
