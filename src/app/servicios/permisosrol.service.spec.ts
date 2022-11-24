import { TestBed } from '@angular/core/testing';

import { PermisosrolService } from './permisosrol.service';

describe('PermisosrolService', () => {
  let service: PermisosrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisosrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
