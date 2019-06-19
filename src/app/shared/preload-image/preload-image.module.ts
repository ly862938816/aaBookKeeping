import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { PreloadImageComponent } from './preload-image.component';

@NgModule({
  declarations: [PreloadImageComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PreloadImageComponent]
})
export class PreloadImageModule { }
