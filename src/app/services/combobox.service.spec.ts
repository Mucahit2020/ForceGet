/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComboboxService } from './combobox.service';

describe('Service: Combobox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComboboxService]
    });
  });

  it('should ...', inject([ComboboxService], (service: ComboboxService) => {
    expect(service).toBeTruthy();
  }));
});
