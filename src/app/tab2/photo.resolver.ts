import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

import { PhotoService } from '../services/photo.service';
import { PhotoListShell } from '../models/photo.model';
import { ShellProvider } from '../services/shell.provider';




@Injectable()
export class PhotoShellResolver implements Resolve<any> {

  constructor(
    private photoService: PhotoService,
  ) {}

  private getDataWithShell(): Observable<PhotoListShell> {
    // Initialize the model specifying that it is a shell model
    const shellModel: PhotoListShell = new PhotoListShell(true);
    const dataObservable = this.photoService.loadSavedObservable();

    const shellProvider = new ShellProvider(
      shellModel,
      dataObservable
    );

    return shellProvider.observable;
  }


  resolve() {
    // Get the Shell Provider from the service
    const shellProviderObservable = this.getDataWithShell();

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}

