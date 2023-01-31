import { ContentObserver } from '@angular/cdk/observers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DateRange, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActivatedRoute, withRouterConfig } from '@angular/router';
import { elementAt } from 'rxjs';
import { formData, simulatorsData } from 'src/app/database';

@Component({
  selector: 'app-simulator-details',
  templateUrl: './simulator-details.component.html',
  styleUrls: ['./simulator-details.component.scss']
})

export class SimulatorDetailsComponent implements OnInit {
  
//GLOBAL VARIABELS DECLARATION
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
  officialForm: formData []=[];

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}
 

  ngOnInit(): void { 
    
    const id = this.activatedRoute.snapshot.params["code"];
    this.mysimulator = simulatorsData.find((element) => {
      return element.id == id; 
    });
    console.log(this.mysimulator);
  }

  onSubmit() {

    let count = 0;
    let temporaryForm: any = [];

     //New instance of Class 
    let data = new formData();

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
          data.formInputs.push(element);
        }
      }
         //SHOW MODAL WITH ERRO MESSAGES!
         switch (count) {
          case 0:
            alert('Nao existem campos vazios!');
              data.formCode = this.simulatorCode;
              data.simulatorName = this.mysimulator.name;
              data.formDate = this.dateInput;
              this.officialForm.push(data);

              this.httpClient.post('http://localhost:3000/formData',data)

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
        
        
      //console.log(this.officialForm);

  }
  gettingDate($event: any){
   this.dateInput = $event.target.value;
  }
}
