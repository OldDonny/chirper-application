import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { ChirpFormComponent } from './chirp-form/chirp-form.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListpageComponent } from './listpage/listpage.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes =[
    {path: '', redirectTo:'/homepage', pathMatch:'full'},
    {path: 'homepage', component: HomepageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'singlepage/:id', component: SinglepageComponent},
    {path: 'listpage', component: ListpageComponent},
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}