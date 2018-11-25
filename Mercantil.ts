import {Usuario} from "./Usuario";
import {Produto} from "./Produto";

export class Mercantil extends Usuario{
    private nome: string;
    private produtos: Array<Produto>;

    public constructor(id: string, senha: string, nome: string, produtos: Array<Produto> = []){
        super(id, senha);
        this.nome = nome;
        this.produtos = produtos;
    }

    public getNome(): string{
        return this.nome;
    }

    public setNome(nome: string): void{
        this.nome = nome;
    }

    public getProdutos(): Produto[]{
        return this.produtos;
    }

    public setProdutos(produtos: Produto[]): void{
        this.produtos = produtos;
    }

    




}