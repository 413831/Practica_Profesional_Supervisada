import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Usuario } from 'src/app/clases/usuario';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnDestroy {
  usuario: Usuario;

  constructor(private dataService: DataService,
              private qrScanner: QRScanner,
              public actionSheetController: ActionSheetController,
              public loadingController: LoadingController) 
  {
    console.log("Constructor");
    // this.dataService.obtenerLocal().then( data => this.usuario = data);
   this.presentLoading(); 
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.usuario = null;
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando datos...',
      duration: 2000,
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
    
    this.qrScanner.useBackCamera();
    this.qrScanner.show();
    let scanSub = this.qrScanner.scan().subscribe((text: string) => 
                        {
                          console.log('Scanned something', text);
                          
                          this.qrScanner.show();
                          //this.qrScanner.hide(); // hide camera preview
                          scanSub.unsubscribe(); // stop scanning
                        });
    
// Make the webview transparent so the video preview is visible behind it.

    // this.qrScanner.prepare()
    //     .then((status: QRScannerStatus) => 
    //     {
    //       if (status.authorized) 
    //       {
    //         // camera permission was granted
    //         // start scanning
    //         let scanSub = this.qrScanner.scan().subscribe((text: string) => 
    //         {
    //           console.log('Scanned something', text);

    //           this.test = text;
    //           this.qrScanner.hide(); // hide camera preview
    //           scanSub.unsubscribe(); // stop scanning
    //         });

    //       } 
    //       else if (status.denied) 
    //       {
    //         // camera permission was permanently denied
    //         // you must use QRScanner.openSettings() method to guide the user to the settings page
    //         // then they can grant the permission from there
    //       } 
    //       else 
    //       {
    //         // permission was denied, but not permanently. You can ask for permission again at a later time.
    //       }
    //   })
    //   .catch((e: any) => console.log('Error is', e));
  }

  cargarDatos()
  {
    this.dataService.obtenerLocal()
        .then(data => {
          console.log(data);
          this.usuario = data;
        });
  }

  configurar()
  {
    this.qrScanner.openSettings();
  }

}
