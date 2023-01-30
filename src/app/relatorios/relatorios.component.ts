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

  fromLocalStorage: any [] = [];
  showContent = false;

  ngOnInit(): void {

    let simulatorsV = localStorage.getItem('simulators') ;

    if(simulatorsV == null){
      console.log(simulatorsV);
    }else{

      this.fromLocalStorage = JSON.parse(simulatorsV);

      for (let index = 0; index < this.fromLocalStorage.length; index++) {
        const element = (this.fromLocalStorage[index] as any);
          console.log('fromlocalStorage',element);
          if(index == 4){
              this.showContent = true;
              console.log(index);
          }
      } 

    }
   
    

  }

  
  //relatorios = simulatorsData;

}
