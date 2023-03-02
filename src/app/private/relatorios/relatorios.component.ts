import { JsonPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { elementAt } from 'rxjs';
import { simulatorsData } from '../../database';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})

export class RelatoriosComponent implements OnInit{

  fromLocalStorage: any [] = [];
 
  

  constructor( private httpClient: HttpClient){}

    fromDbJSON: any [] = [];

    ngOnInit(): void {

      this.httpClient.get('http://localhost:3000/formData')
      .subscribe({

          next:(sample: any)=>{
            console.log('requisicao com sucesso! ', sample)
            this.fromDbJSON = sample
          },

          error:(erroSample)=>{console.log('ERRO na requisicao!',erroSample)}

      })
      
    /* 
      let simulatorsV = localStorage.getItem('simulators') ;

      if(simulatorsV == null){
        console.log(simulatorsV);
      }else{

        this.fromLocalStorage = JSON.parse(simulatorsV);

        for (let index = 0; index < this.fromLocalStorage.length; index++) {
          const element = (this.fromLocalStorage[index] as any);
            console.log('fromlocalStorage',element);
            if(index == 4){
                this.showContent = true;
                console.log(index);
            }
        } 

      }
    }
  */

    }


    generatePDF(elementID: any){
      

      
      const doc = new jsPDF();

  
      doc.text("Relatório da Saúde do seu simulador", 60, 15);
      doc.setFontSize(15);
      //doc.setFontType("normal");
      let element = this.fromDbJSON[elementID];
      doc.text("Este é um relato de todas as falhas registradas no dia ",20, 35);
      doc.text("dia " + element.formDate ,20,45);
      let infoV = element.formValues;
      doc.setFontSize(15);
      doc.setFont("times", "italic");
      doc.text("Nome do simulador: "+ element.simulatorName,20, 60);
      doc.text("Codigo do simulador: "+ element.formCode,20, 70);
      doc.text("Falhas registradas ", 80, 83);

    for (let i = 2; i < infoV.length; i++) {
        const info = infoV[i];
        doc.text(info,95, 86 + i*7); //margin-right 90 da segunda tabela
    }
    let namesV = element.formTableNames;
    for (let i = 0; i < namesV.length; i++) {
      const info = namesV[i];
      doc.text(info,20, 100 + i*7);// para cada linha no infoV pular x6 no pdf
  }
      doc.save(element.simulatorName+" Relatorio.pdf");

    }

}