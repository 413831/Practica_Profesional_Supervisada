import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { IonicModule } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';



@NgModule({
  declarations: [
    HeaderComponent, 
    TarjetaComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    TarjetaComponent,
    SplashComponent
  ]
})
export class ComponentsModule { }
