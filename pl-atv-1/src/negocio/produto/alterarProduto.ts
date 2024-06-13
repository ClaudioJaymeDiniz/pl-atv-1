import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";

export default class AlterarProduto {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log(`\nAlterar dados do produto`);
        const nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto que deseja alterar: `);
        const produto = this.produtos.find(produto => produto.nome === nomeProduto);

        if (produto) {
            console.log(`Produto encontrado: ${produto.nome}`);

            const opcao = this.entrada.receberNumero(
                `Quais dados deseja alterar?\n` +
                `1 - Nome\n` +
                `2 - Preço\n` +
                `0 - Sair\n`
            );

            switch (opcao) {
                case 1:
                    const novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                    produto.nome = novoNome;
                    console.log(`Nome alterado com sucesso.`);
                    break;

                case 2:
                    const novoPreco = this.entrada.receberNumero(`Informe o novo preço: `);
                    produto.preco = novoPreco;
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
            console.log(`Produto não encontrado.`);
        }
    }
}
