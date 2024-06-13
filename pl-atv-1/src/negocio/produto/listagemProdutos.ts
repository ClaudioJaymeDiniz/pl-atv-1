import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>;
    private produtosConsumidos: Map<Produto, { quantidade: number, valorTotal: number }>;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.produtosConsumidos = new Map();
    }

    public listar(): void {
        console.log('Listagem de produtos:');
        this.produtos.forEach(p => {
            console.log(`Nome do produto: ${p.nome}`);
            console.log(`Preço do produto: ${p.preco}`);
        });
    }

    public listarMaisConsumidos(clientes: Array<Cliente>): void {
        console.log('Listagem dos produtos mais consumidos:');
        this.atualizarProdutosConsumidos(clientes);
        const produtosOrdenados = this.obterProdutosOrdenadosPorConsumo();

        produtosOrdenados.forEach(([produto, dados]) => {
            console.log(`Nome do produto: ${produto.nome}`);
            console.log(`Quantidade consumida: ${dados.quantidade}`);
            console.log(`Valor total consumido: R$ ${dados.valorTotal.toFixed(2)}`);
        });
    }

    private atualizarProdutosConsumidos(clientes: Array<Cliente>): void {
        this.produtosConsumidos.clear();

        for (const produto of this.produtos) {
            this.produtosConsumidos.set(produto, { quantidade: 0, valorTotal: 0 });
        }

        for (const cliente of clientes) {
            for (const produto of cliente.getProdutosConsumidos) {
                const dados = this.produtosConsumidos.get(produto) || { quantidade: 0, valorTotal: 0 };
                dados.quantidade += 1;
                dados.valorTotal += produto.preco;
                this.produtosConsumidos.set(produto, dados);
            }
        }
    }

    private obterProdutosOrdenadosPorConsumo(): Array<[Produto, { quantidade: number, valorTotal: number }]> {
        const produtosArray = Array.from(this.produtosConsumidos.entries());
        produtosArray.sort((a, b) => b[1].valorTotal - a[1].valorTotal); // Ordena em ordem decrescente de valor total consumido
        return produtosArray;
    }
}
