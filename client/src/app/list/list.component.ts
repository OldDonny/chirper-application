import { Component,Input, OnInit } from '@angular/core';
import {User} from '../user'
import {UserService} from '../service/chirp/chirp.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  chirps: Array<any> = [];
 
  constructor(private svc: UserService) { }
    

  ngOnInit(): void {
    this.svc.getUsers()
      .subscribe((response) => {
        console.log('list response', response);
        this.chirps= response;
      })
  }

}
