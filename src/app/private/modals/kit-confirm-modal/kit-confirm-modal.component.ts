import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kit-confirm-modal',
  templateUrl: './kit-confirm-modal.component.html',
  styleUrls: ['./kit-confirm-modal.component.scss']
})
export class KitConfirmModalComponent {

  storageValue = '';

    constructor(public dialogRef: MatDialogRef<KitConfirmModalComponent>){}

    getKitModal(){
      this.dialogRef.close(this.storageValue);
    }
}
