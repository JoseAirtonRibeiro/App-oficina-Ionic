import { TestBed } from '@angular/core/testing';

import { DetalhesServicosService } from './detalhes-servicos.service';

describe('DetalhesServicosService', () => {
  let service: DetalhesServicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesServicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
