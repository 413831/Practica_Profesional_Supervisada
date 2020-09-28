import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';
import { IonicStorageModule } from '@ionic/storage';

import { Gyroscope } from '@ionic-native/gyroscope/ngx';
import { Sensors } from '@ionic-native/sensors/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), 
    ComponentsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Gyroscope,
    Sensors,
    DeviceOrientation,
    DeviceMotion,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
