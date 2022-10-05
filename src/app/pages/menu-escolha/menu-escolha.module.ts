import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEscolhaPageRoutingModule } from './menu-escolha-routing.module';

import { MenuEscolhaPage } from './menu-escolha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEscolhaPageRoutingModule
  ],
  declarations: [MenuEscolhaPage]
})
export class MenuEscolhaPageModule {}
