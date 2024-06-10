import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Excluir from "./excluir"

export default class RemoverCliente extends Excluir {

    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public remover(): void {
        console.log(`\nRemover cliente`);
        this.clientes.push()
        console.log(`\nCliente excluido :)\n`);
    }
}