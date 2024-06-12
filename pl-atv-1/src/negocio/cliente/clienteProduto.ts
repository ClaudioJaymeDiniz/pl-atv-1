import Cliente from "../../modelo/cliente";

export default class ClienteProduto {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    public mostrarPedidos(): void {
        console.log(`\nPedidos do cliente ${this.cliente.nome}:`);
        this.cliente.getProdutosConsumidos.forEach(produto => {
            console.log(`- Produto: ${produto.nome}, Preço: ${produto.preco}`);
        });
    }
}
