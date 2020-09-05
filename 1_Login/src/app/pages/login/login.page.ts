import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: string;
  usuario: Usuario = {
    id: 0,
    email: '',
    pass: ''
  };
  pattern = "^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";
  mensaje: string;

  constructor(public toastController: ToastController, private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');

    if (this.dataService.login(this.usuario)) 
    {
      console.log("Success");
      this.mensaje = "Login correcto";
    }
    else 
    {
      console.log("Failed");
      this.mensaje = "Login denegado";
    }

    this.usuario = 
    {
      id: 0,
      email: '',
      pass: ''
    };
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.mensaje,
      duration: 2000
    });
    toast.present();
  }

}
