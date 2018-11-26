declare function require(name: string): any;
var input = require('readline-sync');

let cmd: string;

let i: string = null;
let s: string = null;

while(true) {
    cmd = input.question("*** Bem Vindo ***\n 1- Logar\n 2- Cadastrar-se como cliente\n 3- Cadastrar-se como mercantil\n" +
        "4- Sair\n Digite uma opcao: ");
    if(cmd == "4"){
        console.log("Tchau, volte sempre!");
        break;
    }

    switch(cmd){
        case "1":
            i = input.question("Digite o id: ");
            s = input.question("Digite a senha: ");
            break;

        case "2":
            i = input.question("Digite o id: ");
            s = input.question("Digite a senha: ");
            if(){
                
            }
            break;

        case "3":
            i = input.question("Digite o id: ");
            s = input.question("Digite a senha: ");
            if(){

            }
            break;

        case "":

    }
        
} 

