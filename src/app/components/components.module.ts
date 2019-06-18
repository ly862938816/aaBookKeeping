import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PreloadImageModule } from './preload-image/preload-image.module';

import { ComponentsPage } from './components.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    PreloadImageModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComponentsPage,
  ]
})
export class ComponentsPageModule {}
