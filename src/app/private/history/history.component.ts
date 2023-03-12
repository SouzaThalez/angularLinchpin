import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  
  tableNames: string[] = ['Name','Aula kit','armazenamento'];
  classKit: any;
  historyTable = [
    {
      name: 'userNAME',
      userkit: 'CLASSE NAME',
      storage: 'SOTORAGE NAME'
    }
  ]

  constructor(private httpClient: HttpClient){

  }


  ngOnInit(): void {


    this.httpClient.get('http://localhost:3000/classesKit')
    .subscribe({
      //if request is true
        next: (sample: any)=>{
          console.log('class request  ok!: ',sample);
          this.classKit = sample
        },
      //if request is false
        error: (erro)=>{console.log('class request  is NOT good: ',erro);}
    })
  }


}
