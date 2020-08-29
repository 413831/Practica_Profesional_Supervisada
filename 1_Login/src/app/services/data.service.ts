import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuario = { email: 'pepito@mail.com', pass: 'Secreta'}; 

  constructor() { }

  login(user: String, pass: String)
  {
    return user == this.usuario.email && pass == this.usuario.pass;
  }
}
