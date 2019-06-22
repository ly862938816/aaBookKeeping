import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';

import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];

  constructor(private camera: Camera, private storage: Storage) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });

      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
      // 处理拍照时产生的错误
      console.log('摄像头问题：' + err);
    });

  }

  loadSaved(): Observable<any> {
    return from(this.storage.get('photos'));
  }

}
