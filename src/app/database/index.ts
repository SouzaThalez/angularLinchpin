import { HttpClientModule } from "@angular/common/http";

export const simulatorsData =[
    {
      id:1, //router id
      name:'MegaCodeKelly',
      imgPath:'assets/imgs/Simuladores/megaKelly.jpeg',
      codes: ['3r3r3']

    },
    {
      id:2,
      name:'MegaCodeKid',
      imgPath:'assets/imgs/Simuladores/megaKid.jpeg',
      codes: ['3r3r3','4y4y4']
    },
    {
      id:3,
      name:'NurseAnne',
      imgPath:'assets/imgs/Simuladores/nurseAnne.jpeg',
      codes: ['3r3r3','4y4y4','4y4y4']
    },
    {
      id:4,
      name:'RessuciAnne',
      imgPath:'assets/imgs/Simuladores/RessuciAnne.jpg',
      codes: ['3r3r3','4y4y4','4y4y4','3r3r3','4y4y4','4y4y4']
    },
    {
      id:5,
      name:'SimManALS',
      imgPath:'assets/imgs/Simuladores/SimManALS.jpeg',
      codes: ['3r3r3','4y4y4','4y4y4','3r3r3','4y4y4','4y4y4','4y4y4','3r3r3','4y4y4','4y4y4']
    },
    {
        id:6,
        name:'SimMan3G',
        imgPath:'assets/imgs/Simuladores/SIM3G.jpeg',
        codes: ['3r3r3','4y4y4','4y4y4','3r3r3','4y4y4','4y4y4','4y4y4','3r3r3','4y4y4']
    },
    {
      id:7,
      name:'SimBaby',
      imgPath:'assets/imgs/Simuladores/simBaby.jpeg',
      codes: ['3r3r3','4y4y4','4y4y4','3r3r3']
    },
    {
      id:8,
      name:'SimJunior',
      imgPath:'assets/imgs/Simuladores/simJunior.jpeg',
      codes: ['3r3r3','4y4y4','4y4y4','3r3r3','4y4y4','4y4y4']
    },
    {
      id:9,
      name:'SimNewB',
      imgPath:'assets/imgs/Simuladores/SimNewb.jpeg',
      codes: ['3r3r3','4y4y4']
    }
]


export class simulatorsAdded{
    simulatorName: string;
    simulatorCodes: Array<string>;
    simulatorImgPath: string;
    newCode: string;
  
    constructor(){
      this.simulatorName = '';
      this.simulatorCodes = [];
      this.simulatorImgPath = '';
      this.newCode = '';
      
    }

}

export class formuData{
  formValues: Array<string>;
  formDate: string; 
  formCode: Array<string>;
  formTableNames: Array <string>;
  simulatorName: string;
  userLogedName: string;
  simulatorStatus: string;

  constructor(){
    this.formValues = [];
    this.formDate = '';
    this.formCode = [];
    this.formTableNames = [];
    this.simulatorName = '';
    this.userLogedName = '';
    this.simulatorStatus = '';
  }
}
