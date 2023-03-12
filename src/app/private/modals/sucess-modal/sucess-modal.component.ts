import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sucess-modal',
  templateUrl: './sucess-modal.component.html',
  styleUrls: ['./sucess-modal.component.scss']
})
export class SucessModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {redDialog: boolean, greenDialog: boolean}) {}

}
