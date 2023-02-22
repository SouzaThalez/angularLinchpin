import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path:'',
        loadChildren:()=> import('./public/public.module').then(module =>module.PublicModule)
      },
      {
        path:'private',
        loadChildren:()=> import('./private/private.module').then(module =>module.PrivateModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
