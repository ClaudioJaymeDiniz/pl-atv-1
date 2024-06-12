import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";

export default class CompraProduto {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public adicionar(): void {
        console.log(`\nAdicionar produto consumido ao cliente`);
        let nomeCliente = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
        let nomeProduto = this.entrada.receberTexto(`Por favor, informe o nome do produto: `);

        let cliente = this.clientes.find(cliente => cliente.nome === nomeCliente);
        let produto = this.produtos.find(produto => produto.nome === nomeProduto);

        if (cliente && produto) {
            cliente.getProdutosConsumidos.push(produto);
            console.log(`\nProduto ${nomeProduto} adicionado ao cliente ${nomeCliente} :)\n`);
        } else {
            console.log(`\nCliente ou produto não encontrado :(\n`);
        }
    }
}
