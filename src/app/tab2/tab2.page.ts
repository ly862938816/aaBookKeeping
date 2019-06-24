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
    console.log('Photo Shell Resovlers - ngOnInit()');

    if (this.route && this.route.data) {
      // We resolved a promise for the data Observable
      const promiseObservable = this.route.data;
      console.log('Photo Shell Resovlers - Route Resolve Observable => promiseObservable: ', promiseObservable);

      if (promiseObservable) {
        promiseObservable.subscribe(promiseValue => {
          const dataObservable = promiseValue.data;
          console.log('Photo Shell Resovlers - Subscribe to promiseObservable => dataObservable: ', dataObservable);

          if (dataObservable) {
            dataObservable.subscribe(observableValue => {
              const pageData = observableValue;
              // tslint:disable-next-line:max-line-length
              console.log('Photo Shell Resovlers - Subscribe to dataObservable (can emmit multiple values) => PageData (' + ((pageData && pageData.isShell) ? 'SHELL' : 'REAL') + '): ', pageData);
              // As we are implementing an App Shell architecture, pageData will be firstly an empty shell model,
              // and the real remote data once it gets fetched
              if (pageData) {
                this.routeResolveData = pageData;
              }
            });
          } else {
            console.warn('No dataObservable coming from Route Resolver promiseObservable');
          }
        });
      } else {
        console.warn('No promiseObservable coming from Route Resolver data');
      }
    } else {
      console.warn('No data coming from Route Resolver');
    }
  }
}
