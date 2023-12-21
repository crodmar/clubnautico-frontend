import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comprobarTokenGuard } from './comprobar-token.guard';

describe('comprobarTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => comprobarTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
