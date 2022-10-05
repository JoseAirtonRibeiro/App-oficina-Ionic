import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesProdutosService {
  receber_dados(dados_recebidos : any){
    dados_recebidos.id_prod = this.todos_produtos.length + 1
    this.todos_produtos.push(dados_recebidos)
  }
  deleta_dados(dados_recebidos: any){
      this.todos_produtos.splice(this.todos_produtos.indexOf(dados_recebidos), 1)
  }
  
  private todos_produtos= [
    {id_prod: 1, nome: "Jogo de Pneus", valor: 234.50}, {id_prod: 2, nome: "Para-Brisa", valor: 119.99},
    {id_prod: 3, nome: "Oleo V8", valor: 59.99}, {id_prod: 4, nome: "Limpador/Para-Brisa", valor: 119.99},
    {id_prod: 5, nome: "Parafusadeira", valor: 200.50}, {id_prod: 6, nome: "Capa de Volante", valor: 169.99},
    {id_prod: 7, nome: "Oleo V6", valor: 59.99}, {id_prod: 8, nome: "Kit Reparo", valor: 149.99},
  ]
  constructor() { }
  enviar_produtos(){
    return this.todos_produtos
 } 
  filtrar_dados_prod(id_prod:number){
    const produto_selecionado = this.todos_produtos.filter(linhaprod => linhaprod.id_prod === id_prod) 
    return produto_selecionado[0]
}




}
