import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhesServicosService } from 'src/app/services/detalhes-servicos.service';

@Component({
  selector: 'app-detalhes-servicos',
  templateUrl: './detalhes-servicos.page.html',
  styleUrls: ['./detalhes-servicos.page.scss'],
})
export class DetalhesServicosPage implements OnInit {

  public dado_selecionado : any
  public modo_edicao = false

  constructor(private obj_dados : DetalhesServicosService, private route : ActivatedRoute) { }

    iniciar_edicao(){
      this.modo_edicao= true
    }
    encerrar_edicao(){
      const id : number = Number(this.route.snapshot.paramMap.get('id'))
      if(id > 0){
        this.modo_edicao = false
      } else
        this.obj_dados.receber_dados_serv(this.dado_selecionado)
        this.modo_edicao = false
    }
    deletar_serv(){
      this.obj_dados.deleta_dados_serv(this.dado_selecionado)
    }

  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if(id > 0){
      this.dado_selecionado = this.obj_dados.filtrar_dados_id(id)
    } else{
      this.dado_selecionado = {id, nome: "", valor: 0.0}
      this.modo_edicao = true
    }
  }

}
