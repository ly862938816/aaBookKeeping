import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProgressiveShellResolverPage } from './progressive-shell-resolver.page';
import { ProgressiveShellResolver } from './progressive-shell.resolver';
import { importExpr } from '@angular/compiler/src/output/output_ast';

const routes: Routes = [
  {
    path: '',
    component: ProgressiveShellResolverPage,
    resolve: {
      data: ProgressiveShellResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProgressiveShellResolverPage],
  providers: [ProgressiveShellResolver]
})
export class ProgressiveShellResolverPageModule {}
