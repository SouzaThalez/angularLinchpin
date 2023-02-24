import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { ViewSimulatorModalComponent } from '../modal/view-simulator-modal/view-simulator-modal.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  formData: any[] = [];
  isActive = true;
  statusAdminSelection = false;
  statusUserSelection = true;
  //USING HTTPClient
  constructor( private httpClient: HttpClient,
               public matModal: MatDialog,
               private appService:AppService
               ){}

  ngOnInit(): void {

      this.httpClient.get('http://localhost:3000/formData')
      .subscribe({

          next:(sample: any)=>{
            console.log('requisicao com sucesso! ', sample)
            this.formData = sample;
          },

          error:(erroSample)=>{console.log('ERRO na requisicao!',erroSample)}

      });
      let userRole = this.appService.logedUser.role;
      switch (userRole) {
        case 'admin':
          this.statusAdminSelection = true;
          this.statusUserSelection = false;
          break;
        case 'user':
          this.statusAdminSelection = false;
          this.statusUserSelection = true;
          break;  
      
        default:
          break;
      }
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
