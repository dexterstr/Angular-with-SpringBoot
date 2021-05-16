import { TestBed } from '@angular/core/testing';

import { HardcodeauthenticationService } from './hardcodeauthentication.service';

describe('HardcodeauthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodeauthenticationService = TestBed.get(HardcodeauthenticationService);
    expect(service).toBeTruthy();
  });
});
