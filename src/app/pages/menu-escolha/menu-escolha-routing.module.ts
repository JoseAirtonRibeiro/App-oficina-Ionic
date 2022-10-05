import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEscolhaPage } from './menu-escolha.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEscolhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEscolhaPageRoutingModule {}
