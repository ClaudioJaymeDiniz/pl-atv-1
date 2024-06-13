import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";

export default class AlterarServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log(`\nAlterar dados do serviço`);
        const nomeServico = this.entrada.receberTexto(`Por favor, informe o nome do serviço que deseja alterar: `);
        const servico = this.servicos.find(servico => servico.nome === nomeServico);

        if (servico) {
            console.log(`Serviço encontrado: ${servico.nome}`);

            const opcao = this.entrada.receberNumero(
                `Quais dados deseja alterar?\n` +
                `1 - Nome\n` +
                `2 - Preço\n` +
                `0 - Sair\n`
            );

            switch (opcao) {
                case 1:
                    const novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                    servico.nome = novoNome;
                    console.log(`Nome alterado com sucesso.`);
                    break;

                case 2:
                    const novoPreco = this.entrada.receberNumero(`Informe o novo preço: `);
                    servico.preco = novoPreco;
                    console.log(`Preço alterado com sucesso.`);
                    break;

                case 0:
                    console.log(`Alteração cancelada.`);
                    break;

                default:
                    console.log(`Opção inválida.`);
                    break;
            }
        } else {
            console.log(`Serviço não encontrado.`);
        }
    }
}
