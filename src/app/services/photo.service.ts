import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs/';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { AppConst } from '../models/model';
import { ApiProvider } from '../services/api.service';
import { environment } from '../../environments/environment';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: Photo[] = [];
  // 获取环境配置文件中的参数：后台API路径
  private storeApiPath: string = environment.storeApiPath;

  constructor(
    private apiProvider: ApiProvider,
    private camera: Camera,
    private storage: Storage
  ) { }

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

      // TODO: Save photos to server API on backend
      // this.savePictureToServer(this.photos).subscribe(
      //   (saveResponse) => {
      //     if (saveResponse) {
      //       console.log('Photos saved on server');
      //     }
      //   }, (err) => {
      //     console.log('Error on save photos to server' + err);
      //   }
      // );
    }, (err) => {
      // 处理拍照时产生的错误
      console.log('摄像头问题：' + err);
    });

  }

  savePictureToServer(photos: Photo[]): Observable<any> {
    const serverUrl = this.storeApiPath + AppConst.STORE_API_PATHS.savePhotos;

    return this.apiProvider.httpPost(serverUrl, photos);

  }

  loadSaved() {
   return this.storage.get('photos');
  }
}
