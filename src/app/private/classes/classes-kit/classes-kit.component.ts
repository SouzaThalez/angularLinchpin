import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-classes-kit',
  templateUrl: './classes-kit.component.html',
  styleUrls: ['./classes-kit.component.scss']
})
export class ClassesKitComponent implements OnInit{

  classeFromJson: any;
  checkBoxesSelected: any [] = [];

  constructor(
      private activatedRoute: ActivatedRoute,
      private httpClient: HttpClient
    ){}

  ngOnInit(): void {
    
    const id = this.activatedRoute.snapshot.params["id"];
    
    this.httpClient.get('http://localhost:3000/classes/'+ id)
    .subscribe({
      next: (sample: any)=>{
        console.log('the request to classes was ok!', sample);
        this.classeFromJson = sample;
      },
      error:(erro)=>{
        console.log('the request to classes was NOT ok!', erro);
      }
    })
    
    
  }

  changeFunction(checkBoxElement: any,checkBoxState: any){

   switch (checkBoxState) {
    case true:
        this.checkBoxesSelected.push(checkBoxElement);
        //console.log('checkbooxesV: ',this.checkBoxesSelected);
      break;
    case false:
      //console.log('false!',checkBoxElement.item);
      //using two array methods for removing element 
      // splice() method  and the indexOf() method
      // get the index of the element to remove and than splice 
      let indexOfCheckBox = this.checkBoxesSelected.indexOf(checkBoxElement.item);
      this.checkBoxesSelected.splice(indexOfCheckBox,1);
      //console.log('checkbooxesRemoved:',this.checkBoxesSelected);
      break;
   
    default:
      break;
   }

  }
  getKit(){
    console.log('your kit has:',this.checkBoxesSelected);
  }



}
