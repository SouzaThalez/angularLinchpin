import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-simulator-modal',
  templateUrl: './view-simulator-modal.component.html',
  styleUrls: ['./view-simulator-modal.component.scss']
})
export class ViewSimulatorModalComponent implements OnInit{

  statusFormData: any = {};

  constructor(
      private httpClient:HttpClient,
      @Inject(MAT_DIALOG_DATA) public data: any)
      {}

  ngOnInit(): void {
    //gettind the card id from json file 
    // and showing only that card! 
    this.httpClient.get('http://localhost:3000/formData/'+ this.data.cardID)

    .subscribe({
        next:(sample: any)=>{
          console.log('Sample request is working!!!',sample);
          this.statusFormData = sample;
        },
        error:(error)=>{console.log('ERRO! request NOT working', error)}
    })


  }


}

