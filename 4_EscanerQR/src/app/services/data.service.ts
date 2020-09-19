import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../clases/usuario';
import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  public crear(usuario: Usuario): Promise<any>
  {
    return database().ref('Usuarios')
              .push()
              .then((snapshot) => usuario.id = snapshot.key)
              .then(()=> this.actualizar(usuario))
              .catch(() => console.info("No se pudo realizar alta"));
  }

  public leer(): Usuario[]
  {
    let usuarios = [];
    console.info("Fetch de todos los Usuarios");

    database().ref('usuario').on('value',(snapshot) => {          
        usuarios = [];  
        snapshot.forEach((child) =>{
          var data = child.val();
          usuarios.push(Usuario.CrearUsuario(child.key, data.email));
        });
        console.info("Fetch Usuarios");
    })
    return usuarios;
  }

  public actualizar(usuario: Usuario): Promise<any>
  {
    return database().ref('usuarios/' + usuario.id)
                  .update(usuario)
                  .then(() => console.info("Actualizacion exitosa"))
                  .catch(() => console.info("No se pudo actualizar"));
  }

  public borrar(id: number): Promise<any>
  {
    return database().ref('usuarios/' + id)
                  .remove()
                  .then(() => console.info("Usuario eliminado"))
                  .catch(() => console.info("No se pudo realizar la baja."));
  }
}