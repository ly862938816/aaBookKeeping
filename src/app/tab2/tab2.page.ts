import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ImageShellComponent } from '../shared/image-shell/image-shell.component';
import { Photo } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { TextShellComponent } from '../shared/text-shell/text-shell.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  routeResolveData: any;
  photos: Photo[] = [];
  photoShellData: Photo[] = [
    new Photo(),
    new Photo(),
    new Photo(),
    new Photo(),
    new Photo(),
    new Photo()
  ];

  constructor( private route: ActivatedRoute, public photoService: PhotoService) {}

  ngOnInit(): void {
    // if (this.route && this.route.data) {
    //   // 从路由器的resolver中获取可观察者对象
    //   this.route.data.subscribe((photo) => {
    //     console.log(photo);
    //   });
    // } else {
    //   console.warn('No data coming from Route Resolver');
    // }
    this.photoService.loadSaved().then(
      (photos) => {
        this.routeResolveData = photos || [];
      }
     );
    console.log(this.routeResolveData);
  }
}
