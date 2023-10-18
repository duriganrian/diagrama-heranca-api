import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{
    private cpf: string;

    public constructor(_nome: string, _cpf: string){
        super(_nome);
        this.cpf = _cpf;
    }

    public setCpf(_cpf: string): void{
        this.cpf = _cpf;
    }

    public getCpf(){
        return this.cpf;
    }

    public documentoIdentificador(): string {
        return this.cpf;
    }
}