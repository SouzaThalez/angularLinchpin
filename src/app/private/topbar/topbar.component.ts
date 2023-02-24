import { Component} from '@angular/core';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {



    constructor(public appservice:AppService){
      // i am using appService direct in to the HTML
      //this.userLoged = this.appservice.logedUser.name;

    }
   
    
}
