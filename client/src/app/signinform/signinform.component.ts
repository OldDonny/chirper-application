import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import{Router} from '@angular/router'

@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent{
  signin:FormGroup
  constructor(private fb: FormBuilder,
  private router: Router
  ) { 
    this.signin = this.fb.group({
      Username:['',Validators.required],
      Password:['',Validators.required],
    })
  }

  // signIn(Username:any, Password:any){
  //   let user=this.signin
  //   if(this.signin.valid){
  //     this.router.navigate(['/homepage'])
  //   }else{
  //     return;
  //   }

  // }

}
