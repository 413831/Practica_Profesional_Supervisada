import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarioTest: Usuario;
  private usuarios: Usuario[] = [];
  private static idUsuario = 0;

  constructor(private firebaseAuth: AngularFireAuth) 
  {
  }

  login(usuario: Usuario)
  {
    // return this.test(usuario);
    console.log(usuario);
    return new Promise<any>((resolve, reject) => {
      this.firebaseAuth.signInWithEmailAndPassword(usuario.email, usuario.pass)
                        .then(response => resolve(response),error => reject(error));
    });
  }

  registrar(usuario: Usuario)
  {
    return new Promise<any>((resolve,reject) => {
      this.firebaseAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
                        .then(response => resolve(response), error => reject(error));
    });

  }

  gerUserDetail()
  {
    return this.firebaseAuth.currentUser;
  }

  test(usuario: Usuario)
  {
    return usuario.email == this.usuarioTest.email && usuario.pass == this.usuarioTest.pass;    
  }
}
