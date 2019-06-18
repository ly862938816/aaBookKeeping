import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadImageComponent } from './preload-image.component';

@NgModule({
  declarations: [PreloadImageComponent],
  imports: [
    CommonModule
  ],
  exports: [PreloadImageComponent]
})
export class PreloadImageModule { }
