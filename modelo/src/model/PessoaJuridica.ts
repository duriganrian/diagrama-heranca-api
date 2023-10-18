import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    private Cnpj: string;

    public constructor(_nome: string, _Cnpj: string){
        super(_nome);
        this.Cnpj = _Cnpj;
    }

    public setCnpj(_Cnpj: string): void{
        this.Cnpj = _Cnpj;
    }

    public getCnpj(){
        return this.Cnpj;
    }

    public documentoIdentificador(): string {
        return this.Cnpj;
    }
}