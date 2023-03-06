import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTabLabelWrapper } from '@angular/material/tabs';
import { elementAt } from 'rxjs';
import {Classes, Material,MaterialAdded, tableMaterialFormData, tableSimulatorsFormData} from 'src/app/database';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{

//global html variables!
  panelOpenState = false;
  tableMaterialNames: any[] =['item','quantity'];
  classesNames: any[] = [];
  tableItems: any;
  classesFromJson: any;
  simulatorTable: any;

// Novo material form  values
  selectedListValue: any;
// Add TH form Values
  inpuClassName = '';
  inputPeriodName = '';



  constructor( private httpClient: HttpClient){}
  

  
  ngOnInit(): void {
    
    //this.table = tableMaterialFormData;
    this.simulatorTable = tableSimulatorsFormData;

    this.httpClient.get('http://localhost:3000/classes')
      .subscribe({
        //if request is true
          next: (sample: any)=>{
            console.log('class request  ok: ',sample);
             this.classesFromJson = sample;
          },
        //if request is false
          error: (erro)=>{console.log('class request  is NOT good: ',erro);}
      })

      

  }


  addNewClass(inpuClassElement:any){
    
    let className = inpuClassElement.value;
    if(!className){
        alert('FAVOR INFORMAR UM NOME VALIDO!');
    }else{

      inpuClassElement.value = null;
      this.inpuClassName = className;
      //new instance of whole class created!
      let newClass = new Classes();
      newClass.name = className;
      //add to the selectedList Input
      this.classesNames.push(className);
      console.log('swsw',this.classesNames);
      this.postClassesToJson(newClass);
      alert('Nova Aula adicionada!');
      this.ngOnInit();

    }

  }

  addNewPeriod(inputPeriodElement: any){
    let periodName = inputPeriodElement.value;
    inputPeriodElement.value = null;
    this.inputPeriodName = periodName;
  }



  getMaterialFormValues(nameInputElement: any, itemSumInputElement: any){
      
      let item = nameInputElement.value;
      let total = itemSumInputElement.value;

      let selectedListIndex = this.classesNames.findIndex((element) => element == this.selectedListValue)
      let jsonPosition = selectedListIndex + 1;
     

      //new instance of Class Material 
      let newMaterial = new Material();
      newMaterial.item = item;
      newMaterial.quantity = total;
      //getting class from JSON without endpoints!
      let classObj = this.classesFromJson;
      classObj[selectedListIndex].classMaterial.push(newMaterial);
    
      //console.log('objeto',classObj[selectedListIndex]);
    
      this.httpClient.put('http://localhost:3000/classes/'+ jsonPosition,classObj[selectedListIndex])
      .subscribe({
        //if request is true
          next: (sample: any)=>{
            console.log('classes put request ok: ',sample);
            this.ngOnInit();
          },
        //if request is false
          error: (erro)=>{console.log('classes put request not ok: ',erro);}
      })
  
      // Clean inputs Field
      this.selectedListValue =  null;
      nameInputElement.value = null;
      itemSumInputElement.value = null;
  }
  








// END POINTS REQUESTS!

  getClassesFromJson(position: any){

    this.httpClient.get('http://localhost:3000/classes/'+ position)
    .subscribe({
      //if request is true
        next: (sample: any)=>{
          console.log('classes request ok: ',sample);

        },
      //if request is false
        error: (erro)=>{console.log(' classes request not good: ',erro);}
    })
  }

  postClassesToJson(classObj: any){

    this.httpClient.post('http://localhost:3000/classes',classObj)
    .subscribe({
      //if request is true
        next: (sample: any)=>{
          console.log('class obj request ok: ',sample);
        },
      //if request is false
        error: (erro)=>{console.log(' classes obj request not good: ',erro);}
    })
  }




}
