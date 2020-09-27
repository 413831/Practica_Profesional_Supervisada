import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterViewChecked {
  mensajes: string[] = ['A','B','C','D','E','F'];
  @Input() mensaje: string;

  constructor() { }

  ngOnInit() {}


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


  cargarMensaje()
  {
    console.log(this.mensaje);
    if(this.mensaje)
    {
      this.mensajes.push(this.mensaje);
      this.mensaje = null;
    }
  }

}
