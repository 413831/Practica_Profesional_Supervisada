import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../interfaces/usuario';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarioTest: Usuario = { 
    id : 0,
    email: 'pepito@mail.com', 
    pass: 'Secreta'
  }; 
  private usuarios: Usuario[] = [];
  private static idUsuario = 0;

  constructor(private storage: Storage, private firebaseAuth: AngularFireAuth) 
  {
    this.cargarUsuarios();
  }

  login(usuario: Usuario)
  {
    // return this.test(usuario);
    console.log(usuario);
    var logged = this.usuarios.find(elemento => {
                                     return elemento.email == usuario.email && 
                                            elemento.pass == usuario.pass;
                                    });
    if(logged)
    {
      return true;
    }
    return false;
  }

  registrar(usuario: Usuario)
  {
    return new Promise<any>((resolve,reject) => {
      
      this.firebaseAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
                        .then(response => resolve(response), error => reject(error));

      // usuario.id = ++DataService.idUsuario;
      // const existe = this.usuarios.find( elemento => elemento.id == usuario.id );

      // if(!existe)
      // {
      //   this.firebaseAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass)
      //                   .then(res => resolve, error => reject(error));
      //   this.usuarios.unshift(usuario);
      //   this.storage.set('usuarios', this.usuarios);
      // }
    });

  }

  async cargarUsuarios()
  {
    const usuarios = await this.storage.get('usuarios');
    
    if(usuarios)
    {
      this.usuarios = usuarios;
      console.log("Se cargan usuarios", this.usuarios);
    }

  }

  test(usuario: Usuario)
  {
    return usuario.email == this.usuarioTest.email && usuario.pass == this.usuarioTest.pass;    
  }
}
