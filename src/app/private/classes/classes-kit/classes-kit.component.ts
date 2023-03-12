import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { KitConfirmModalComponent } from '../../modals/kit-confirm-modal/kit-confirm-modal.component';
import { ClassKit} from 'src/app/database';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-classes-kit',
  templateUrl: './classes-kit.component.html',
  styleUrls: ['./classes-kit.component.scss']
})
export class ClassesKitComponent implements OnInit{

  classeFromJson: any;
  checkBoxesSelected: any[]=[];

  constructor(
      private activatedRoute: ActivatedRoute,
      private httpClient: HttpClient,
      public dialog: MatDialog,
      private appService: AppService
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
      //console.log('false!',checkBoxElement);
      //using two array methods for removing element 
      // splice() method  and the indexOf() method
      // get the index of the element to remove and than splice 
      let indexOfCheckBox = this.checkBoxesSelected.indexOf(checkBoxElement);
      this.checkBoxesSelected.splice(indexOfCheckBox,1);

      //console.log('checkbooxesRemoved:',this.checkBoxesSelected);
      break;
   
    default:
      break;
   }

  }

  openDialog(): void {

    let newKit = new ClassKit();

    const dialogRef = this.dialog.open(KitConfirmModalComponent, {  
    });

    dialogRef.afterClosed().subscribe(result => {
      newKit.kitName = this.classeFromJson.name;
      newKit.storageLocal = result;
      newKit.material = this.checkBoxesSelected;
      newKit.userName = this.appService.logedUser.name;
      console.log(newKit);
      this.postToJSON(newKit);     
    });
  }

  postToJSON(object: any){

    this.httpClient.post('http://localhost:3000/classesKit',object)
    .subscribe({
      next: (sample: any) =>{
        console.log('POST to classKit is working',sample);
      },
      error: (erro)=>{
        console.log('POST to classKit NOT working ', erro);
      }

    })
  }




}
