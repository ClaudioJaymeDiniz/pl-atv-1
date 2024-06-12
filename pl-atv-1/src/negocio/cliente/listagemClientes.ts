import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor + ` - Data de emissão: ` + cliente.getCpf.getDataEmissao.toLocaleDateString());

            // Listando os RGs do cliente
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor + ` - Data de emissão: ` + rg.getDataEmissao.toLocaleDateString());
            });

            // Listando os telefones do cliente
            cliente.getTelefones.forEach(telefone => {
                console.log(`Telefone: (${telefone.getDdd}) ${telefone.getNumero}`);
            });

            // Listando os pets do cliente
            console.log(`Pets:`);
            cliente.getPets.forEach(pet => {
                console.log(`  Nome: ${pet.getNome}`);
                console.log(`  Tipo: ${pet.getTipo}`);
                console.log(`  Raça: ${pet.getRaca}`);
                console.log(`  Gênero: ${pet.getGenero}`);
                console.log(`----------------------------`);
            });

            // Mostrar os pedidos de produtos do cliente
            console.log(`Pedidos de Produtos:`);
            cliente.getProdutosConsumidos.forEach(produto => {
                console.log(`- Produto: ${produto.nome}, Preço: ${produto.preco}`);
            });

            // Mostrar os pedidos de serviços do cliente
            console.log(`Pedidos de Serviços:`);
            cliente.getServicosConsumidos.forEach(servico => {
                console.log(`- Serviço: ${servico.nome}, Preço: ${servico.preco}`);
            });
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    // listar o top
    public listarMaisConsumiuProdutos(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos:`);

        // Criar uma matriz de clientes e a quantidade total de produtos consumidos
        const clientesComQuantidades: Array<{ cliente: Cliente, quantidadeTotal: number }> = [];
        this.clientes.forEach(cliente => {
            let quantidadeTotal = cliente.getProdutosConsumidos.length; // Supondo que a quantidade seja o tamanho do array de produtos
            clientesComQuantidades.push({ cliente, quantidadeTotal });
        });

        // Ordenar a matriz com base na quantidade total de produtos consumidos (do maior para o menor)
        clientesComQuantidades.sort((a, b) => b.quantidadeTotal - a.quantidadeTotal);

        // Listar os 10 primeiros clientes ordenados
        const topClientes = clientesComQuantidades.slice(0, 10);
        topClientes.forEach((item, index) => {
            console.log(`Posição ${index + 1}:`);
            console.log(`Nome do cliente: ${item.cliente.nome}`);
            console.log(`Quantidade total de produtos consumidos: ${item.quantidadeTotal}`);
            console.log('---');
        });
    }
    public listarTopClientesPorValor(): void {
        console.log(`\nTop 5 clientes por valor:`);
        
        // Calcula o valor total para cada cliente
        const clientesComValorTotal = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce((acc, produto) => acc + produto.preco, 0);
            const totalServicos = cliente.getServicosConsumidos.reduce((acc, servico) => acc + servico.preco, 0);
            const valorTotal = totalProdutos + totalServicos;
            return { cliente, valorTotal };
        });
    
        // Ordena os clientes com base no valor total em ordem decrescente
        const topClientes = clientesComValorTotal.sort((a, b) => b.valorTotal - a.valorTotal).slice(0, 5);
    
        // Lista os top 5 clientes por valor
        topClientes.forEach((item, index) => {
            console.log(`${index + 1}. Cliente: ${item.cliente.nome} - Valor total: ${item.valorTotal}`);
        });
    }
}
