import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-classes-kit',
  templateUrl: './classes-kit.component.html',
  styleUrls: ['./classes-kit.component.scss']
})
export class ClassesKitComponent implements OnInit{

  classeFromJson: any;


  constructor(
      private activatedRoute: ActivatedRoute,
      private httpClient: HttpClient
    ){}

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params["id"];
    
    this.httpClient.get('http://localhost:3000/classes/'+ id)
    .subscribe({
      next: (sample: any)=>{
        console.log('the request to classes was ok!', sample);
        this.classeFromJson = sample;
      },
      error:(erro)=>{
        console.log('the request to classes was NOT ok!', erro);
      }
    })
    

  }



  changeFunction(){
    console.log('omdoemodeomd');
  }




}
