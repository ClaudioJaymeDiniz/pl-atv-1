import Cliente from "../../modelo/cliente";

export default class ClienteServico {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        this.cliente = cliente;
    }

    public mostrarServicos(): void {
        console.log(`\nServiços do cliente ${this.cliente.nome}:`);
        this.cliente.getServicosConsumidos.forEach(servico => {
            console.log(`- Serviço: ${servico.nome}, Preço: ${servico.preco}`);
        });
    }
}
