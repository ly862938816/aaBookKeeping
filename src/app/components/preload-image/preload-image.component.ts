import { Component, Input, ElementRef, Renderer2, ViewEncapsulation, ViewChild, OnChanges, PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'preload-image',
  templateUrl: './preload-image.component.html',
  styleUrls: [
    './preload-image.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PreloadImageComponent implements OnChanges {
  imageSrc = '';
  loadRatio: { w: number, h: number };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input() set src(val: string) {
    this.imageSrc = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set ratio(ratio: { w: number, h: number }) {
    this.loadRatio = ratio || { w: 1, h: 1 };
  }

  ngOnChanges() {
    const ratioHeight = (this.loadRatio.h / this.loadRatio.w * 100) + '%';
    // Conserve aspect ratio (see: https://stackoverflow.com/a/10441480/1116959)
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '0px 0px ' + ratioHeight + ' 0px');
    this._update();
  }

  _update() {
    this._loaded(false);
  }

  _loaded(isLoaded: boolean) {
    if (isLoaded) {
      setTimeout(() => {
        this.renderer.addClass(this.elementRef.nativeElement, 'img-loaded');
      }, 500);
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'img-loaded');
    }
  }
}
