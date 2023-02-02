import { TestBed } from '@angular/core/testing';

import { VautorizacaoGuard } from './vautorizacao.guard';

describe('VautorizacaoGuard', () => {
  let guard: VautorizacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VautorizacaoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
