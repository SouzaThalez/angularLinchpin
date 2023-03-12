import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DEFAULT_CURRENCY_CODE, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { elementAt, sample } from 'rxjs';
import { simulatorsAdded, simulatorsData } from '../../database';
import { AppService } from '../../services/app.service';
import { SimulatorsComponent } from '../simulators/simulators.component';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
 
 constructor(private httpClient: HttpClient){}

    //Coming from ngModel
    selectedSimulator: any ; 
    jsonSimulator: any;
    position = 0;
    sampleArray: [] = [];
    
  //JSON REQUEST!!!
    sendToJson(info: simulatorsAdded){
      info.simulatorCodes.push(info.newCode);

      this.httpClient.post('http://localhost:3000/simulatorsAdded',info)
      .subscribe({
        next:(sample: any)=>{
          console.log('post resquest working', sample);
          this.jsonSimulator = sample;
        },
        error:(error: any)=>{
            console.log('post not working',error);
        }
      });
    }

    updateJson(info: simulatorsAdded, code: number){
      
      this.httpClient.put('http://localhost:3000/simulatorsAdded/'+ code,info)
      .subscribe({
        next: (sample: any)=> {
          console.log('PUT resquest working', sample)
        },
        error: (erro) => {
          console.log('PUT not working',erro)
         
        }
      })

      
    }

    typeOfRequest(info: simulatorsAdded){

      this.httpClient.get('http://localhost:3000/simulatorsAdded')
      .subscribe({
        next:(sample: any)=>{
            console.log('post resquest working', sample);
            this.sampleArray = sample;

            let simulatorFromJSon = this.sampleArray.find((element: any) => element.simulatorName == info.simulatorName);
            
            if(simulatorFromJSon){
              let elementJsonID = (simulatorFromJSon as any).id;
              console.log('fromjson: ',simulatorFromJSon);
              (simulatorFromJSon as any).simulatorCodes.push(info.newCode);
              //console.log('fromjson edited',simulatorFromJSon);
              console.log('name found!',elementJsonID);
              this.updateJson(simulatorFromJSon,elementJsonID);

            }else{
              console.log('name not ofund!');
              this.sendToJson(info);
            }

        },
        error:(error: any)=>{
            console.log('post not working',error);
        }
      });
    }
    
    getModalInfo(simulatorCode: string){

      //Creating new instance of class
      let newSimulator = new simulatorsAdded();
      let imgPath: string;
      
     
     newSimulator.simulatorName = this.selectedSimulator;

     switch (newSimulator.simulatorName) {
      case 'SimManALs':
        imgPath = 'assets/imgs/Simuladores/SimManALS.jpeg';
        newSimulator.simulatorImgPath = imgPath
        newSimulator.newCode = simulatorCode;
        this.typeOfRequest(newSimulator);
        break;
      case 'SimMan3G':
          imgPath = 'assets/imgs/Simuladores/SIM3G.jpeg';
          newSimulator.simulatorImgPath = imgPath;
  
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'SimJunior':
          imgPath = 'assets/imgs/Simuladores/simJunior.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'SimBaby':
          imgPath = 'assets/imgs/Simuladores/simBaby.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'SimNewB':
          imgPath = 'assets/imgs/Simuladores/SimNewb.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'MegaCodeKid':
          imgPath = 'assets/imgs/Simuladores/megaKid.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'MegaCodeKelly':
          imgPath = 'assets/imgs/Simuladores/megaKelly.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'NurseAnne':
          imgPath = 'assets/imgs/Simuladores/nurseAnne.jpeg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
      case 'RessusciAnne':
          imgPath = 'assets/imgs/Simuladores/RessuciAnne.jpg';
          newSimulator.simulatorImgPath = imgPath;
          newSimulator.newCode = simulatorCode;
          this.typeOfRequest(newSimulator);
        break;
        
      default:
        alert('SIMULATOR INPUT IS EMPTY1!!');
        break;


     }

     
     

 
      //newSimulator.simulatorCodes = simulatorCode;
     
     /*
     this.httpClient.post('http://localhost:3000/simulatorsAdded',newSimulator)
     .subscribe({
       next:(sample: any)=>{
         console.log('post resquest working', sample);
         this.jsonSimulator = sample;
       },
       error:(error: any)=>{
           console.log('post not working',error);
       }
     });

     */
    }


}
