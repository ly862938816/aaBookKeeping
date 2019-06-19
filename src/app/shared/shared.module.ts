import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';


import { ImageShellComponent } from './image-shell/image-shell.component';
import { TextShellComponent } from './text-shell/text-shell.component';
import { PreloadImageComponent } from './preload-image/preload-image.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    TextShellComponent,
    ImageShellComponent,
    PreloadImageComponent
  ],
  exports: [
    TextShellComponent,
    ImageShellComponent,
    PreloadImageComponent
  ],
  entryComponents: [],
})
export class SharedModule {}
