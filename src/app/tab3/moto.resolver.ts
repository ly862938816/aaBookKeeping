import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';

import { ItemsListShell } from '../models/items-list-shell.model';
import { ProductItemsService } from '../services/product-items.service';
import { ShellProvider } from './shell.provider';


@Injectable()
export class MotoShellResolver implements Resolve<any> {

  constructor(
    private productItemsService: ProductItemsService
  ) {}


  private getDataWithShell(): Observable<ItemsListShell> {
    // Initialize the model specifying that it is a shell model
    const shellModel: ItemsListShell = new ItemsListShell(true);
    const dataObservable = this.productItemsService.getProductList();

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
