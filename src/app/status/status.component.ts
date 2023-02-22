import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewSimulatorModalComponent } from '../modal/view-simulator-modal/view-simulator-modal.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  formData: any[] = [];
  isActive = true;
  //USING HTTPClient
  constructor(private httpClient: HttpClient, public matModal: MatDialog){}

  ngOnInit(): void {

      this.httpClient.get('http://localhost:3000/formData')
      .subscribe({

          next:(sample: any)=>{
            console.log('requisicao com sucesso! ', sample)
            this.formData = sample;
          },

          error:(erroSample)=>{console.log('ERRO na requisicao!',erroSample)}

      });

  }

  openViewDialog(id: any){

    this.matModal.open(ViewSimulatorModalComponent,{
      data:{
        cardID: id
      }
    })
    
  }
  getStatus(value:any,statuselement:any){
    //define Color!
    switch (value) {
      case ' FECHADO':
          statuselement.style.backgroundColor = "#00798C";
          statuselement.style.color = 'white';
        break;
      case 'PENDENTE':
        statuselement.style.backgroundColor = "#edae49";
        statuselement.style.color = 'black';
        break;
      default:
        statuselement.style.backgroundColor = "#D1495B";
        statuselement.style.color = 'white';
        break;
    }
    
  }



}
