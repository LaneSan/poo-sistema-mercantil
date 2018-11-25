import {Usuario} from "./Usuario";
import {Produto} from "./Produto";

export class Cliente extends Usuario{
    private nome: string;
    private lista: Array<Produto>;
    private valor: number;

    public constructor(id: string, senha: string, nome: string, lista: Array<Produto> = [], valor: number){
        super(id, senha);
        this.nome = nome;
        this.lista = lista;
        this.valor = valor;
    }

    public getNome():

    public getLista(): Produto[]{
        return this.lista;
    }

    public setLista(lista: Produto[]): void{
        this.lista = lista;
    }

    public getValor(): number{
        return this.valor;
    }

    public setValor(valor: number): void{
        this.valor = valor;
    }

    public cadastrarUser(): boolean{
        if(this.getId != undefined){
            return false;
        }else()

    }

}