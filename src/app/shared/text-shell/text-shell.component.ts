import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-text-shell',
  templateUrl: './text-shell.component.html',
  styleUrls: [
    './text-shell.component.scss'
  ]
})
export class TextShellComponent {
  dataText: '';

  @HostBinding('class.text-loaded') textLoaded = false;

  @Input() set data(val: any) {
    this.dataText = (val !== undefined && val !== null) ? val : '';

    if (this.dataText && this.dataText !== '') {
      this.textLoaded = true;
    } else {
      this.textLoaded = false;
    }
  }

  constructor() { }
}
