import { ContentObserver } from '@angular/cdk/observers';
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

  
  mysimulator: any;
  simulatorCode: any;
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
  dateInput: any;

  //creating an Arry of classes
  // Global Array of Object
  officialForm: formData []=[];

  constructor(private activatedRoute: ActivatedRoute) {}

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
      this.simulatorCode,
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
      this.dateInput
      );

      //Populate temporary form 
      for (let index = 0; index < temporaryForm.length; index++) {
        const element = temporaryForm[index];
        if(element == null){
          count++
        }else{
          data.formvalues.push(element);
        }
      }
         //SHOW MODAL WITH ERRO MESSAGES!
         switch (count) {
          case 0:
            alert('Nao existem campos vazios!');
              data.Code = this.simulatorCode;
              data.simulatorName = this.mysimulator.name;
              data.date = this.dateInput;
              this.officialForm.push(data);
              //SEND DATA TO LOCAL STORAGE ONCE COMPLETED
              let convertedV = JSON.stringify(this.officialForm);
              localStorage.setItem('simulators',convertedV);
            break;
          default:
            alert('existem campos vazios!');
            break;
        }
      
      console.log(this.officialForm);

  }
  gettingDate($event: any){
   this.dateInput = $event.target.value;

  }
}
