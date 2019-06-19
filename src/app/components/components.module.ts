import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PreloadImageModule } from '../shared/preload-image/preload-image.module';
import { Routes, RouterModule } from '@angular/router';

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
    FormsModule,
    PreloadImageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComponentsPage,
  ]
})
export class ComponentsPageModule {}
