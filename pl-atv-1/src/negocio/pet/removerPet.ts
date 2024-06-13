import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Excluir from "../excluir";

export default class RemoverPet extends Excluir {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public remover(): void {
        console.log(`\nRemover pet`);

        // Solicita o nome do cliente
        const nomeCliente = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);

        // Encontra o cliente pelo nome
        const cliente = this.clientes.find(cliente => cliente.nome === nomeCliente);

        if (cliente) {
            // Solicita o nome do pet
            const nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet que deseja remover: `);

            // Encontra o índice do pet pelo nome
            const indicePet = cliente.getPets.findIndex(pet => pet.getNome === nomePet);

            if (indicePet !== -1) {
                cliente.getPets.splice(indicePet, 1);
                console.log(`\nPet removido com sucesso!\n`);
            } else {
                console.log(`\nPet não encontrado :(\n`);
            }
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}
