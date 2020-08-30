import { TestBed } from '@angular/core/testing';

import { AlainDynamicModuleService } from './alain-dynamic-module.service';

describe('AlainDynamicModuleService', () => {
  let service: AlainDynamicModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlainDynamicModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
