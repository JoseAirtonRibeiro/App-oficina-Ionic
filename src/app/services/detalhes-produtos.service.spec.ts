import { TestBed } from '@angular/core/testing';

import { DetalhesProdutosService } from './detalhes-produtos.service';

describe('DetalhesProdutosService', () => {
  let service: DetalhesProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalhesProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
