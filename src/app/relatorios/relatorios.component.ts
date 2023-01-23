import { Component } from '@angular/core';
import { simulatorsData } from '../database';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent {
  relatorios = simulatorsData;
}
