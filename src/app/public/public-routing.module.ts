import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path: 'login',
        component: LoginComponent
        
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
