import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { IonicModule } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { VotosPipe } from '../pipes/votos.pipe';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    HeaderComponent, 
    TarjetaComponent,
    TarjetasComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    HeaderComponent,
    TarjetaComponent,
    TarjetasComponent,
    SplashComponent
  ]
})
export class ComponentsModule { }
