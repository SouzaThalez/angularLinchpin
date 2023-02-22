import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { AppService } from '../services/app.service';


@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent {

  constructor(
      public dialog: MatDialog,
      private appService: AppService
    ){}
  
  openDialog(): void {

    const dialogRef = this.dialog.open(ModalComponent, {  
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.appService.onNewSimulator.next(true);
      
    });
  }


}
