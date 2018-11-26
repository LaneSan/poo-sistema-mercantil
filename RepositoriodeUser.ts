import { Mercantil } from "./Mercantil";
import { Cliente } from "../../../Desktop/Spotflix-master/Spotflix-master/Spotflix/usuario/cliente";
import { Usuario } from "./Usuario";

export class RepositoriodeUser{
    public mercantis: Array<Mercantil>;
    private mapadeusuario: Map<string,Usuario>;
    public clientes: Array<Cliente>;
    public usuarios: Array<Usuario>;

    public constructor(){
        this.mercantis = new Array<Mercantil>();
        this.mapadeusuario = new Map<string,Usuario>();
        this.clientes = new Array<Cliente>();
        this.usuarios = new Array<Usuario>();
    }
    public listarClientes(): Array<Cliente>{
        console.log(this.clientes);
        return this.clientes;
    }
    public listarMercantis(): Array<Mercantil>{
        console.log(this.mercantis);
        return this.mercantis;
    }
    public procurarCliente(nome: string) : Cliente |null {
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Cliente && usuario.getNome() == nome){
                return usuario;
            }
        }
        return null;
    }
    public procurarMercantil(nome: string) : Mercantil |null {
        for(let usuario of this.mapadeusuario.values()){
            if(usuario instanceof Mercantil && usuario.getNome() == nome){
                return usuario;
            }
        }
        return null;
    }
    public usuarioLogin(id: string, senha: string) : Usuario |null {
        for(let usuario of this.usuarios){
            if(usuario.getId() == id && usuario.getSenha() == senha){
                return usuario;
            }
        }
        return null;
    }

}