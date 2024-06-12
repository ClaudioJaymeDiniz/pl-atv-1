import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Excluir from "../excluir";

export default class RemoverProduto extends Excluir {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public remover(): void {
        console.log(`\nRemover produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto que deseja remover: `);

        // Encontrar o índice do produto com o nome fornecido
        let indice = this.produtos.findIndex(produto => produto.nome === nome);

        // Verificar se o produto foi encontrado
        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log(`\nProduto excluído :)\n`);
        } else {
            console.log(`\nProduto não encontrado :(\n`);
        }
    }
}
