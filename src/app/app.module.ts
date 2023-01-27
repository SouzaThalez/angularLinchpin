import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimulatorsComponent } from './simulators/simulators.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SimulatorDetailsComponent } from './simulators/simulator-details/simulator-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { identifierName } from '@angular/compiler';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimulatorsComponent,
    SidePanelComponent,
    TopbarComponent,
    RelatoriosComponent,
    SimulatorDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
