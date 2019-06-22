import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PhotoShellResolver } from './photo.resolver';
import { Tab2Page } from './tab2.page';

const routes: Routes = [{
  path: '',
  component: Tab2Page,
  data: PhotoShellResolver
}];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    Tab2Page
  ],
  providers: [PhotoShellResolver]
})
export class Tab2PageModule {}
