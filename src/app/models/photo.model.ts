
export class Photo {
    data: any;
}

export class PhotoListShell {
    items: Array<Photo> = [
      new Photo(),
      new Photo(),
      new Photo(),
      new Photo(),
      new Photo(),
      new Photo()
    ];
    constructor(readonly isShell: boolean) {}
  }

