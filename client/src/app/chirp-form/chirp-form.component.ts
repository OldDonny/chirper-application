import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators }  from '@angular/forms';
import {User} from '../user'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'
import {MatInputModule} from '@angular/material'
import {MatFormFieldModule} from '@angular/material'
import {MatCardModule} from '@angular/material'
import {MatToolbarModule} from '@angular/material'
import {MatChipsModule} from '@angular/material'
import {Router} from '@angular/router'
import {UserService} from '../service/chirp/chirp.service'




@Component({
  selector: 'chirp-form',
  templateUrl: './chirp-form.component.html',
  styleUrls: ['./chirp-form.component.css']
})
export class ChirpFormComponent {
form: FormGroup

  constructor(
    private srv: UserService,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.form= this.fb.group({
      chirp:['', Validators.required]
    })
  }


  pushChirp(chirp:string,){
    let newChirp={user: 'Oledonny' ,message: chirp}
    if(this.form.valid){
      this.srv.create(newChirp)
      .subscribe(Response=>{
        this.router.navigate(['/listpage'])
      })
    }
   else{
     return;
   }   
  }
}
