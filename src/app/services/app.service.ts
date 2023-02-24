import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  
  onNewSimulator = new Subject();

  logedUser: any = {};
  userIDfromLocal: any;

  constructor() { }
}
