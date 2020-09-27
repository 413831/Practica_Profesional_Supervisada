import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnDestroy {
  usuario: Usuario = new Usuario();
  qrScan: any;
  dataQR: any;
  test: string;
  codigos : string[] = [];

  constructor(public platform: Platform,
              private dataService: DataService,
              private qrScanner: QRScanner,
              public actionSheetController: ActionSheetController,
              public loadingController: LoadingController,
              private toastController: ToastController) 
  {
    console.log("Constructor");
    // this.dataService.obtenerLocal().then( data => this.usuario = data);
    this.presentLoading("Cargando datos..."); 
    this.platform.backButton.subscribeWithPriority(0,()=>{
      document.getElementsByTagName("body")[0].style.opacity = "1";
      this.qrScan.unsubscribe();
    });              
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.usuario = null; 
  }

  async presentLoading(message) {
    const loading = await this.loadingController.create({
      message,
      duration: 1000,
    });
    await loading.present();

    await loading.onDidDismiss().then(() => this.cargarDatos());
    console.log('Loading dismissed!');
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Carga',
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      buttons: [
        {
          text: 'Cargar',
          icon: 'qr-code-outline',
          handler: () => {
            console.log('Cargar por QR');
            this.leerQR();
          }
        },
        {
          text: 'Configurar',
          icon: 'construct-outline',
          handler: () => {
            this.configurar();
          }
        }, 
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }


  leerQR() 
  {
    console.log("Leer QR");
    this.codigos = this.usuario.codigos;
    
    this.qrScanner.prepare().then((status:QRScannerStatus) => {
      if(status.authorized)
      {
        this.qrScanner.show();
        document.getElementsByTagName("body")[0].style.opacity = "0";

        this.qrScan = this.qrScanner.scan().subscribe((scan) =>
        {
          this.presentToast(`El código escaneado es : ${scan}`);
          console.log(scan);
          this.qrScanner.show();
          document.getElementsByTagName("body")[0].style.opacity = "1";

          if(this.validarCodigo(scan))
          {
            // Validacion contra DB
            this.dataService.fetchQR(scan)
                .then(snapshot =>{
                    this.dataQR = snapshot.val().valor;
                    this.usuario.codigos.push(scan);
                    this.usuario.credito += this.dataQR;
                    this.dataService.actualizar(this.usuario)
                        .then(() => this.presentLoading("Actualizando..."));                         
                })
                .catch(console.log);
          }
             
          this.qrScanner.hide();
          this.qrScan.unsubscribe();
        },
        (error) => console.log(error));
      }
    })
  }

  cargarDatos()
  {
    this.dataService.obtenerLocal()
        .then(data => {
          console.log(data);
          this.usuario = data;     
        });
  }


  validarCodigo(codigo: string)
  {
    if(!this.codigos.some( aux => aux == codigo) &&
        this.usuario.rol != 'admin')
    {
      //this.test = `El rol del usuario es : ${this.usuario.rol}`;
      return true;
    }
    else if(this.codigos.filter(aux => aux == codigo).length <= 2 &&
            this.usuario.rol == 'admin')
    {
      //this.test = `El rol del usuario es : ${this.usuario.rol}`;
      return true
    }
    return false;
  }

  configurar()
  {
    this.qrScanner.openSettings();
  }

  borrarCreditos()
  {
    this.usuario.credito = 0;
    this.usuario.codigos = [];
    this.dataService.actualizar(this.usuario)
                    .then(()=> this.presentToast("Crédito reseteado"));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
