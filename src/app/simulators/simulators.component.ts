import { Component } from '@angular/core';
import { simulatorsData } from '../database';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})
export class SimulatorsComponent {
    data = simulatorsData;
    
}
