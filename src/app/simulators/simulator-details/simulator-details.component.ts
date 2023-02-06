import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateRange, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, withRouterConfig } from '@angular/router';
import { elementAt } from 'rxjs';
import {simulatorsAdded, simulatorsData,formuData } from 'src/app/database';

@Component({
  selector: 'app-simulator-details',
  templateUrl: './simulator-details.component.html',
  styleUrls: ['./simulator-details.component.scss']
})

export class SimulatorDetailsComponent implements OnInit {
  
//GLOBAL VARIABELS DECLARATION
  tableName1 = 'Carotideo Direito';
  tableName2 = 'Carotideo Esquerdo';
  tableName3 = 'Radial direito';
  tableName4 = 'Braqueal direito';
  tableName5 = 'Aparelho de medir Pressão';
  tableName6 = 'Incursões Respiratórias';
  tableName7 = 'Eletrodos para Monitorização';
  tableName8 = 'Bordas de Choque Elétrico';
  tableName9 = 'Ausculta Cardiaca';
  tableName10 = 'Ausculta Pulmonar';

  mysimulator: any;
  simulatorCode: any;
  dateInput: any;
  carotideoDireitoValue: any;
  carotideoEsquerdoValue: any;
  radialDireitoValue: any;
  braquealDireitoValue: any;
  manguitoValue: any;
  incursoesRespValue: any;
  eletrodosMonitValue: any;
  bordasChoqueValue: any ;
  auscultaCardiacaValue: any;
  auscultaPulmonarValue: any;

  
  
  
  //creating an Arry of classes
  // Global Array of Object
  dataFormV: any[] =[];
  tableNames: any[] =[];
 

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}
 

  ngOnInit(): void { 
    
    const id = this.activatedRoute.snapshot.params["code"];
    this.mysimulator = simulatorsData.find((element) => {
      return element.id == id; 
    });
    console.log(this.mysimulator);
    
    //Numero fixo de itens
      this.tableNames.push(
        this.tableName1,
        this.tableName2,
        this.tableName3,
        this.tableName4,
        this.tableName5,
        this.tableName6,
        this.tableName7,
        this.tableName8,
        this.tableName9,
        this.tableName10
      );
    
  }

  onSubmit() {


    let name= '';
    let values = '';
    let count = 0;
    let temporaryForm: any = [];

    //New instance of Class 
    let formData = new formuData();
    
    temporaryForm.push( 
      //SimulatorCode and dateInput is here
      //For the check null loop!!  
      //this.simulatorCode,
      //this.dateInput,
      this.carotideoDireitoValue,
      this.carotideoEsquerdoValue,
      this.radialDireitoValue,
      this.braquealDireitoValue,
      this.manguitoValue,
      this.incursoesRespValue,
      this.eletrodosMonitValue,
      this.bordasChoqueValue,
      this.auscultaCardiacaValue,
      this.auscultaPulmonarValue,
    );
       
      //Populate temporary form 
      for (let index = 0; index < temporaryForm.length; index++) {
        const element = temporaryForm[index];
        if(element == null){
          count++
        }else{
          formData.formValues.push(element);
          console.log(formData);
        }
      }


         //SHOW MODAL WITH ERRO MESSAGES!
         switch (count) {
          case 0:
            alert('Nao existem campos vazios!');

              formData.formCode = this.simulatorCode;
              formData.formNames = this.tableNames;
              formData.formDate = this.dateInput;
              formData.simulatorName = this.mysimulator.name;

              this.httpClient.post('http://localhost:3000/formData',formData)
              .subscribe({
                  next:(sample: any)=>{
                    console.log('requisicao com sucesso! ', sample)
                  },
            
                  error:(erroSample: any)=>{console.log('ERRO na requisicao!',erroSample)}
            
              });
            break;
          default:
            alert('existem campos vazios!');
            break;
        }

  }
  
  gettingDate($event: any){
   this.dateInput = $event.target.value;
  }
}
