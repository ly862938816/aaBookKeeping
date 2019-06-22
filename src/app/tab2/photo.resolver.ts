import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

import { PhotoService } from '../services/photo.service';


@Injectable()
export class PhotoShellResolver implements Resolve<any> {

  constructor(
    private photoService: PhotoService
  ) {}

  resolve() {
    // Get the Shell Provider from the service
    return this.photoService.loadSaved();
  }
}

