import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';


import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // routeResolveData: any
  photos: Array<string>;


  constructor(
    public actionSheetController: ActionSheetController,
    public camera: Camera,
    public cropService: Crop,
    private imagePicker: ImagePicker,
    private route: ActivatedRoute,
    public photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '选择操作',
      buttons: [{
        text: '清空相册',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: '选择照片',
        icon: 'checkmark-circle-outline',
        handler: () => {
          this.openImagePicker();
        }
      }, {
        text: '拍照',
        icon: 'camera',
        handler: () => {
          this.photoService.takePicture();
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  openImagePicker() {
    const options = {
      maximumImagesCount: 5,
    };
    this.photos = new Array<string>();
    this.imagePicker.getPictures(options)
    .then((results) => {
      this.reduceImages(results).then(() => {
        console.log('all images cropped!!');
      });
    }, (err) => { console.log(err); });
  }

  reduceImages(selectedPictures: any): any {
    return selectedPictures.reduce((promise: any, item: any) => {
      return promise.then((result) => {
        return this.cropService.crop(item, {quality: 75}).then(croppedImage => this.photos.push(croppedImage));
      });
    }, Promise.resolve());
  }


}
