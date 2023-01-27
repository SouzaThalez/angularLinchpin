import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { simulatorsData } from '../database';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit{

  fromLocalStorage: [] = [];
 

  ngOnInit(): void {

    let simulatorsV = localStorage.getItem('simulators') ;

    if(simulatorsV == null){
      console.log(simulatorsV);
    }else{

      this.fromLocalStorage = JSON.parse(simulatorsV);

      for (let index = 0; index < this.fromLocalStorage.length; index++) {
        const element = this.fromLocalStorage[index];
          console.log('fromlocalStorage',element);
      } 

    }
   
    

  }

  
  //relatorios = simulatorsData;

}
