import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Excluir from "../excluir";

export default class RemoverCliente extends Excluir {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public remover(): void {
        console.log(`\nRemover cliente`);
        let cpf = this.entrada.receberTexto(`Por favor, informe o CPF do cliente que deseja remover: `);

        // Encontrar o índice do cliente com o CPF fornecido
        let indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);

        // Verificar se o cliente foi encontrado
        if (indice !== -1) {
            // Remover cliente da lista
            this.clientes.splice(indice, 1);
            console.log(`\nCliente excluído :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}
