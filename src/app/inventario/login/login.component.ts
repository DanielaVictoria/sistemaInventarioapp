import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = 'javainuse'
  contrasena = ''
  invalidLogin = false

  constructor(private loginservice: AuthenticationService, private router:Router) { }


  ngOnInit(){
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.usuario, this.contrasena)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else{this.invalidLogin = true
      alert("Datos incorrectos");}
      
  }

  public resolved(captchaResponse: string) { 
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
