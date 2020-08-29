import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombre: string
  usuario = {
    email: '',
    password: ''
  };
  pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$";  
  mensaje: string;

  constructor(public toastController: ToastController, private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmitTemplate()
  {
    console.log('Form submit');
    console.log(this.usuario);
    if(this.dataService.login(this.usuario.email,this.usuario.password))
    {
      this.mensaje = "Login correcto";
    }
    else
    {
      this.mensaje = "Login denegado";
    }
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
