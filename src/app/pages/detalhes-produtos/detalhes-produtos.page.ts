import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesProdutosService } from 'src/app/services/detalhes-produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {
  
  public produto_selecionado : any
  public modo_edicao_prod = false

  constructor(private obj_dados_prod : DetalhesProdutosService, private routeprod : ActivatedRoute) { }
      
    iniciar_edicao_prod(){
      this.modo_edicao_prod= true
    }
    encerrar_edicao_prod(){
      const id_prod : number = Number(this.routeprod.snapshot.paramMap.get('id_prod'))
      if(id_prod > 0){
        this.modo_edicao_prod = false
      } else
        this.obj_dados_prod.receber_dados(this.produto_selecionado)
        this.modo_edicao_prod = false
    }
    deletar(){
      this.obj_dados_prod.deleta_dados(this.produto_selecionado)
    }


  ngOnInit() {
    const id_prod : number = Number(this.routeprod.snapshot.paramMap.get('id_prod'))
    if(id_prod > 0){
      this.produto_selecionado = this.obj_dados_prod.filtrar_dados_prod(id_prod)
    } else{
      this.produto_selecionado = {id_prod, nome: "", valor: 0.0}
      this.modo_edicao_prod = true
    }

  }

}
