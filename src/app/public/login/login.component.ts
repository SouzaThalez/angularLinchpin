import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

constructor(
           private httpClient: HttpClient,
           private router: Router,
           private appservice: AppService
           ){}

jsonUsers: any [] =[];
nameLogin = '' ;
passwordLogin ='';
loginMessage = '';



ngOnInit(): void {

      this.httpClient.get('http://localhost:3000/users')
      .subscribe({
        //if request is true
          next: (sample: any)=>{
            console.log('request is ok: ',sample);
            this.jsonUsers = sample;
          },
        //if request is false
          error: (erro)=>{console.log('request is NOT good: ',erro);}
      })
}


getLoginInfo(userName: string, userPassword:any){
  
  
  // it is returnind the element?
   let userFound =  this.jsonUsers.find((element: any) => element.loginName == userName);
   
   if(userFound == null){
      this.loginMessage = 'Nome de usuário Invalido!!';
   }else{
        if(userFound.loginName == userName && userFound.password == userPassword){
            this.loginMessage = 'Bem vindo!';
            //sending user id to local storage!
            let userID = userFound.id;
            let userStringID = JSON.stringify(userID);
            localStorage.setItem('userID',userStringID);
            //console.log('your pass is ', userPassword, 'your name is ',userName);
            this.appservice.logedUser = userFound;
            this.router.navigateByUrl('/private/home');
        }else{
          this.loginMessage = 'Senha errada!';
          
        }
    
  
   }
    
 
 
  this.nameLogin = userName;
  this.passwordLogin = userPassword;
 
  

}


}
