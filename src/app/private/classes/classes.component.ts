import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTabLabelWrapper } from '@angular/material/tabs';
import { elementAt } from 'rxjs';
import {Classes, Material,MaterialAdded, Simulator, tableMaterialFormData, tableSimulatorsFormData} from 'src/app/database';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit{

//global html variables!
  panelOpenState = false;
  tableMaterialNames: any[] =['item','quantity'];
  //classesNames: any[] = [];
  tableItems: any;
  classesFromJson: any;
  simulatorTable: any;

// Coming from classListOption()
  selectedListID: any;
// Add TH form Values
  inpuClassName = '';
  inputPeriodName = '';
// new simulator selected input
  selectedSimulator: any;


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
      //this.classesNames.push(className);
      //console.log('classes names',this.classesNames);
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

  classListOption(matOption: any){
      this.selectedListID = matOption.value.id;
      console.log(this.selectedListID);
  }


  getMaterialFormValues(nameInputElement: any, itemSumInputElement: any){
      
      let item = nameInputElement.value;
      let total = itemSumInputElement.value;


   

      ///let selectedListIndex = this.classesNames.findIndex((element) => element == this.selectedListValue)
     // let jsonPosition = selectedListIndex + 1;
     

      //new instance of Class Material 
      let newMaterial = new Material();
      newMaterial.item = item;
      newMaterial.quantity = total;
      //getting class from JSON without endpoints!
      let classObj = this.classesFromJson;
      //the normalInteration value here should be the normal index array of classObject -1 
      //the classObj follows the normal flow of index position, so it starts in 0 !
      let normalInterationValue = this.selectedListID - 1;
      classObj[normalInterationValue].classMaterial.push(newMaterial);
    
     
      //console.log('objeto',classObj[selectedListIndex]);
    
      this.httpClient.put('http://localhost:3000/classes/'+ this.selectedListID,classObj[normalInterationValue])
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
      //this.selectedListValue =  null;
      nameInputElement.value = null;
      itemSumInputElement.value = null;
  }
  getSimulatorFormValues(simulatorSumInput: any){

        let simulatorNumber = simulatorSumInput.value;
        let simulatorName = this.selectedSimulator;

        let newSimulator = new Simulator();
        newSimulator.name = simulatorName;
        newSimulator.quantity = simulatorNumber;

        let classesObject = this.classesFromJson;
        let normalInteration = this.selectedListID - 1;
        classesObject[normalInteration].classSimulators.push(newSimulator);

        this.httpClient.put('http://localhost:3000/classes/'+ this.selectedListID,classesObject[normalInteration])
        .subscribe({
          //if request is true
            next: (sample: any)=>{
              console.log('classes put request ok: ',sample);
              this.ngOnInit();
            },
          //if request is false
            error: (erro)=>{console.log('classes put request not ok: ',erro);}
        })





        console.log(newSimulator);


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
