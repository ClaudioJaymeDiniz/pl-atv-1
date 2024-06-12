import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";

export default class CompraServico {
    private clientes: Array<Cliente>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public adicionar(): void {
        console.log(`\nAdicionar serviço consumido ao cliente`);
        let nomeCliente = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
        let nomeServico = this.entrada.receberTexto(`Por favor, informe o nome do serviço: `);

        let cliente = this.clientes.find(cliente => cliente.nome === nomeCliente);
        let servico = this.servicos.find(servico => servico.nome === nomeServico);

        if (cliente && servico) {
            cliente.getServicosConsumidos.push(servico);
            console.log(`\nServiço ${nomeServico} adicionado ao cliente ${nomeCliente} :)\n`);
        } else {
            console.log(`\nCliente ou serviço não encontrado :(\n`);
        }
    }
}
