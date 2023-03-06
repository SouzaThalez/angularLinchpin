import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { SucessModalComponent } from './modal/sucess-modal/sucess-modal.component';
import { ViewSimulatorModalComponent } from './modal/view-simulator-modal/view-simulator-modal.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SimulatorDetailsComponent } from './simulators/simulator-details/simulator-details.component';
import { SimulatorsComponent } from './simulators/simulators.component';
import { StatusComponent } from './status/status.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ClassesComponent } from './classes/classes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';






@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    SimulatorsComponent,
    SidePanelComponent,
    TopbarComponent,
    RelatoriosComponent,
    SimulatorDetailsComponent,
    ModalComponent,
    StatusComponent,
    ViewSimulatorModalComponent,
    SucessModalComponent,
    ClassesComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatTooltipModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class PrivateModule { }
