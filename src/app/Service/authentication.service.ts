import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  
authenticate(usuario: string, contrasena: string) {
    if (usuario === "javainuse" && contrasena === "contrasena") {
      sessionStorage.setItem('usuario', usuario)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('usuario')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('usuario')
  }
}
