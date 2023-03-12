import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-kit-confirm-modal',
  templateUrl: './kit-confirm-modal.component.html',
  styleUrls: ['./kit-confirm-modal.component.scss']
})
export class KitConfirmModalComponent {

  storageValue = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

    constructor(
          private snackBar:MatSnackBar,
          public dialogRef: MatDialogRef<KitConfirmModalComponent>
          ){}

    getKitModal(){
      this.dialogRef.close(this.storageValue);

      this.snackBar.open('Seu kit Montado!!', 'Fechar',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000
      });
    }
}
