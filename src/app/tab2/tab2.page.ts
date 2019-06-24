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

  constructor( private route: ActivatedRoute, public photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
