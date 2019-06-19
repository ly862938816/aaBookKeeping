import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule  } from '../shared/shared.module';

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
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ComponentsPage,
  ]
})
export class ComponentsPageModule {}
