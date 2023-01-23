import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { simulatorsData } from 'src/app/database';

@Component({
  selector: 'app-simulator-details',
  templateUrl: './simulator-details.component.html',
  styleUrls: ['./simulator-details.component.scss']
})
export class SimulatorDetailsComponent implements OnInit {
  mysimulator: any;
  rightInputValue: any = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void { 
    const id = this.activatedRoute.snapshot.params["code"];
    this.mysimulator = simulatorsData.find((element) => {
      return element.id == id; 
    });
    
    console.log(this.mysimulator);
  }

  onSubmit() {
    if(this.rightInputValue == ''){
      alert("campos vazios!")
    }else{
      alert("BOA!")
    }
  }
}
