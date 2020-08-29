import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NotificacionComponent } from './notificacion/notificacion.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NotificacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    NotificacionComponent
  ]
})
export class ComponentsModule { }
