import { TestBed } from '@angular/core/testing';

import { ProductItemsService } from './product-items.service';

describe('ProductItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductItemsService = TestBed.get(ProductItemsService);
    expect(service).toBeTruthy();
  });
});
