import {PessoaFisica} from "./modelo/src/model/PessoaFisica"
import { PessoaJuridica } from "./modelo/src/model/PessoaJuridica";

const p1 = new PessoaFisica (`Rian`, `530.229.339-39`);
const p2 = new PessoaJuridica (`mano menezes`, `15.157.566/0005-95`);

p1.setNome(`cassio`);
p1.setCpf(`181.731.231-09`);
console.log(`Nome: ${p1.getNome()}`);
console.log(`Cpf: ${p1.getCpf()}`);
console.log(`Documento Identificador: ${p1.documentoIdentificador()}`);

console.log("\n");

p2.setNome(`messi`);
p2.setCnpj(`04.540.697/0005-65`);
console.log(`Nome: ${p2.getNome()}`);
console.log(`Taxa de Comissão: ${p2.getCnpj()}`);
console.log(`Documento Identificador: ${p2.documentoIdentificador()}`);