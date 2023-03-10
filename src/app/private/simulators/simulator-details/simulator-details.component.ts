import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateRange, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, withRouterConfig } from '@angular/router';
import { elementAt, findIndex } from 'rxjs';
import {simulatorsAdded, simulatorsData,formuData } from 'src/app/database';
import { MatDialog } from '@angular/material/dialog';
import { SucessModalComponent } from '../../modals/sucess-modal/sucess-modal.component';
import { AppService } from 'src/app/services/app.service';
import flatpickr from 'flatpickr';




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
  
 
  
  dateInputElement: any;
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

  //Coming from dropdown code list
  matOptionElement: any;
  matOptionElementIndex: any;  
  defaultOption = 'Escolha!';
  // Global Array of Object
  tableNames: any[] =[];
  simulator: any;
  arraySize = 0;
  userLoged = '';
  updatedFormCodes: any[] =[];




  constructor(
      private activatedRoute: ActivatedRoute,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private appService: AppService,

      
      ) {}
 

  ngOnInit(): void { 
    
    const id = this.activatedRoute.snapshot.params["code"];
    this.userLoged =  this.appService.logedUser.name;
  
    
    // This is a promise to the server! 
    // The code above this functio will continue and not stop! 
    this.httpClient.get('http://localhost:3000/simulatorsAdded')
    .subscribe({
        //if request is ok
        next: (sample: any ) =>{ 
            console.log('simulators added request ok! ', sample)
            this.simulator = sample.find((element: any) =>{
              return element.id == id; 
            });
            this.arraySize = this.simulator.simulatorCodes.length;
        },
        //if request is not ok
        error: (erro: any) =>{console.log('request NOT good!',erro)}
    })
    

    //find a way to store the index of simulatorCodes in a array 
    // than display that array of codes and disable them!!
    this.httpClient.get('http://localhost:3000/formData')
    .subscribe({
        //if request is ok
        next: (sample: any ) =>{ 

            console.log('second request to form data:', sample)
           for (let index = 0; index < sample.length; index++) {
                const element = sample[index];
                if (element.simulatorName == 'simMan3G') {
                   console.log(element);
                  //this.updatedFormCodes.push(element.formCode[1]);
                }

           }

           console.log('thisupdatedformcodes',this.updatedFormCodes);
        },
        //if request is not ok
        error: (erro: any) =>{console.log('request NOT good!',erro)}
    })
    




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

  gettingDate($event: any, dateElement: any){
    this.dateInput = $event.value;
    this.dateInputElement = dateElement;
    console.log(this.dateInput);
  }
  getMatOptionElement(value: any,index:any){
    //store matOptionElement on a external variable!
    this.matOptionElement = value;
    this.matOptionElementIndex = index.toString();
    console.log(this.matOptionElementIndex);
  }
  openSucessModal(a:boolean, b:boolean): void {

    const dialogRef = this.dialog.open(SucessModalComponent, {
        data: { greenDialog: a,
                redDialog: b
              }  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      
    });
  }
  onSubmit(textAreaElement: any){

   

    let count = 0;
    let temporaryForm: any = [];
    
    //New instance of Class 
    let formData = new formuData();
  
 
      temporaryForm.push( 
      //SimulatorCode and dateInput is here
      //For the check null loop!!  
      this.simulatorCode,
      this.dateInput,
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
          //this switch statment will prevent date and code formValues to get
          //inserted in the formValues jSON ARRAY 
          switch (element) {
            case this.simulatorCode:
              console.log('you chosse code?',this.simulatorCode);
              break;
              case this.dateInput:
                console.log('you chosse date?',this.simulatorCode);
                break;
          
            default:
              formData.formValues.push(element);
              console.log(formData);
              break;
          }
         
        }
      }

      //SHOW MODAL WITH ERRO MESSAGES!
         switch (count) {
          case 0:
            //alert('Nao existem campos vazios!');
            this.openSucessModal(true,false);
            
              formData.formCode.push(this.simulatorCode);
              formData.formTableNames = this.tableNames;
              formData.formDate = this.dateInput;
              formData.simulatorName = this.simulator.simulatorName;
              formData.userLogedName = this.userLoged;
              formData.simulatorStatus = 'ABERTO';
              formData.textArea = textAreaElement.value;
              this.httpClient.post('http://localhost:3000/formData',formData)
              .subscribe({
                  next:(sample: any)=>{
                    console.log('requisicao com sucesso! ', sample);
                  },
            
                  error:(erroSample: any)=>{console.log('ERRO na requisicao!',erroSample)}
            
              });
      // decreasing arraysize by 1 independetly from arrayLenght!      
              this.arraySize--;
      //Setting selected dropDowncode to Disable
              this.matOptionElement.disabled = true;
      // METHOD FOR CLEANING FORMS!
              this.dateInputElement.value =  ''; //important!
              this.dateInput = null;//important!
              this.simulatorCode = null;
              this.carotideoDireitoValue = null;
              this.carotideoEsquerdoValue = null;
              this.radialDireitoValue = null;
              this.braquealDireitoValue = null;
              this.manguitoValue = null;
              this.incursoesRespValue = null;
              this.eletrodosMonitValue = null;
              this.bordasChoqueValue = null ;
              this.auscultaCardiacaValue = null;
              this.auscultaPulmonarValue = null;
              textAreaElement.value = null;
            break;
          default:
            this.openSucessModal(false,true);
            break;
        }



  }

 

}
