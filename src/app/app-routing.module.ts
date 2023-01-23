import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SimulatorDetailsComponent } from './simulators/simulator-details/simulator-details.component';
import { SimulatorsComponent } from './simulators/simulators.component';

const routes: Routes = [
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
  //Qualquer rota que nao seja as de cima
  //redirecTo 
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
