import { Component, OnInit } from '@angular/core';
import { DetalhesProdutosService } from 'src/app/services/detalhes-produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutosPage implements OnInit {

  public dados_produtos : any

  constructor(private obj_dados_prod: DetalhesProdutosService ) {
    this.dados_produtos = obj_dados_prod.enviar_produtos() 
    }
  ngOnInit() {
  }

}
