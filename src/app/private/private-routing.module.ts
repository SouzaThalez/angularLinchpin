import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SimulatorDetailsComponent } from './simulators/simulator-details/simulator-details.component';
import { SimulatorsComponent } from './simulators/simulators.component';
import { StatusComponent } from './status/status.component';


const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'simuladores',
        component: SimulatorsComponent
      },
      {
        path: 'simuladores/:code',
        component:SimulatorDetailsComponent
      },
      {
        path: 'relatorios',
        component:RelatoriosComponent
      },
      {
        path: 'status',
        component:StatusComponent
      },
      {
        path: 'aulas',
        component: ClassesComponent
      }
    
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
