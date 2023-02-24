import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule
    
  ]
})
export class PublicModule { }
