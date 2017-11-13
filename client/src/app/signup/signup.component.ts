import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
form: FormGroup
signup: FormGroup
condition: boolean = false; 
signin:string
  constructor(private fb: FormBuilder) { 
    this.signin='Sign In'
    this.form = this.fb.group({
      Username: ['', Validators.required ],
      Password: ['',Validators.required],
      Email: ['',Validators.email],
      Over18:'yes'
  
    });
  }
  
  
  ngOnInit() {
  }

}
