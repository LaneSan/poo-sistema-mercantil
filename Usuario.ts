export abstract class Usuario{
    private id: string;
    private senha: string;

    public constructor(id: string, senha: string){
        this.id = id;
        this.senha = senha;
    }

    public getId(): string{
        return this.id;
    }

    public setId(id: string): void{
        this.id = id;
    }

    public getSenha(): string{
        return this.senha;
    }

    public setSenha(senha: string): void{
        this.senha = senha;
    }

    public abstract cadastrarUser(): boolean;

    public abstract loginUser(): boolean;

}