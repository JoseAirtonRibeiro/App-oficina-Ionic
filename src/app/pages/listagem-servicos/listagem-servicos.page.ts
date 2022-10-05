import { Component, OnInit } from '@angular/core';
import { DetalhesServicosService } from 'src/app/services/detalhes-servicos.service';

@Component({
  selector: 'app-listagem-servicos',
  templateUrl: './listagem-servicos.page.html',
  styleUrls: ['./listagem-servicos.page.scss'],
})
export class ListagemServicosPage implements OnInit {
  
  public dados_servicos : any

  constructor(private obj_dados: DetalhesServicosService) {
    this.dados_servicos = obj_dados.enviar_dados()
   }
  ngOnInit() {
  }

}
