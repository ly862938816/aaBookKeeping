import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';


import { ProductItemsService } from '../services/product-items.service';
import { ShellProvider } from './shell.provider';
import { ItemsListItem } from '../models/items-list-item';


@Injectable()
export class MotoShellResolver implements Resolve<any> {

  constructor(
    private productItemsService: ProductItemsService
  ) {}


  private getDataWithShell(): Observable<ItemsListItem> {
    // Initialize the model specifying that it is a shell model
    const shellModel: ItemsListItem = new ItemsListItem(true);
    const dataObservable = this.productItemsService.getProductList();

    console.log(dataObservable);

    const shellProvider = new ShellProvider(
      shellModel,
      dataObservable
    );

    return shellProvider.observable;
  }

  resolve() {
    // Get the Shell Provider from the service
    const shellProviderObservable = this.getDataWithShell();

    // Resolve with Shell Provider
    const observablePromise = new Promise((resolve, reject) => {
      resolve(shellProviderObservable);
    });
    return observablePromise;
  }
}
