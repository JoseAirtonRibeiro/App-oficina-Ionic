import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesServicosService {
receber_dados_serv(dados_recebidos_serv : any){
  dados_recebidos_serv.id = this.todos_servicos.length + 1
  this.todos_servicos.push(dados_recebidos_serv)
}
  deleta_dados_serv(dados_recebidos_serv: any){
      this.todos_servicos.splice(this.todos_servicos.indexOf(dados_recebidos_serv), 1)
  }
  private todos_servicos= [
    {id: 1, nome: "Alinhamento", valor: 249.25}, {id: 2, nome: "Balanceamento", valor: 400.25}, 
    {id: 3, nome: "Troca de Oleo", valor: 119.99}, {id: 4, nome: "Troca de Pneu", valor: 99.99},
    {id: 5, nome: "Check up", valor: 99.99}, {id: 6, nome: "Pintura", valor: 125.99}
  ]

  constructor() { }

  enviar_dados(){
    return this.todos_servicos
  }
  filtrar_dados_id(id:number){
    const servico_selecionado = this.todos_servicos.filter(servico => servico.id === id)
    return servico_selecionado[0]
  }
}
