import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BonitasPageRoutingModule } from './bonitas-routing.module';

import { BonitasPage } from './bonitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BonitasPageRoutingModule
  ],
  declarations: [BonitasPage]
})
export class BonitasPageModule {}
