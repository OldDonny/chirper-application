import { Component, OnInit } from '@angular/core';
import {ListComponent} from '../list/list.component'
import { ChirpFormComponent } from '../chirp-form/chirp-form.component';
import {MatMenuModule} from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent{
  info:string;
  condition: boolean;
  constructor() { 
    this.info= 'Welcome to Tree house. We are a full service chat application and we strive to bring you up to date information on people in your treehouse'
  }

}
