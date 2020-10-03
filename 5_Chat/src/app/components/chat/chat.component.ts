import { AfterViewChecked, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonContent, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { Mensaje } from 'src/app/clases/mensaje';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  @Input() mensajes: Mensaje[] = [];
  @Input() mensaje: Mensaje;
  @Input() idUsuario: string;

  @ViewChild(IonContent, {read: IonContent, static: false}) content: IonContent;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit(): void {
    this.scrollToBottomOnInit();
  }
 

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("After View Checked");
    console.log("Mensaje: ", this.mensaje);
    if(this.mensaje)
    {
      this.cargarMensaje();
    }
  }

  ngOnDestroy(): void {

    this.mensajes.forEach(mensaje => {
      if(mensaje.id == '0')
      {
        console.info(mensaje);
        this.mensajesService.crear(mensaje);
      }
    });
  }

  cargarMensaje()
  {
    console.log(this.mensaje);
    if(this.mensaje)
    {
      this.mensajes.push(this.mensaje);
      this.mensaje = null;
    }
  }


  scrollToBottomOnInit() {
    console.log("SCROLLING");
    setTimeout(() => {
        this.content.scrollToBottom(300);
    }, 500);
  }
}
