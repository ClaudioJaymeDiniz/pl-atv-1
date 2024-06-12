import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Excluir from "../excluir";

export default class RemoverServico extends Excluir {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public remover(): void {
        console.log(`\nRemover serviço`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do serviço que deseja remover: `);

        // Encontrar o índice do serviço com o nome fornecido
        let indice = this.servicos.findIndex(servico => servico.nome === nome);

        // Verificar se o serviço foi encontrado
        if (indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log(`\nServiço excluído :)\n`);
        } else {
            console.log(`\nServiço não encontrado :(\n`);
        }
    }
}
