import { Produto } from "../../../Desktop/Spotflix-master/Spotflix-master/Spotflix/produto";

export class Estoque{
    private codigo: string;
    private quantidade: number;
    private produtos: Produto[];

    public constructor(codigo: string, quantidade: number, produtos: Produto[]){
        this.codigo = codigo;
        this.quantidade = quantidade;
        this.produtos = produtos;
    }
    
    private getCodigo(): string{
        return this.codigo;
    }
    private setCodigo(codigo: string): void{
        this.codigo = codigo;
    }
    private getQuantidade(): number{
        return this.quantidade;
    }
    private setQuantidade(quantidade: number): void{
        this.quantidade = quantidade;
    }
    private getProdutos(): Produto[]{
        return this.produtos;
    }
    private setProdutos(produtos: Produto[]): void{
        this.produtos = produtos;
    }
}