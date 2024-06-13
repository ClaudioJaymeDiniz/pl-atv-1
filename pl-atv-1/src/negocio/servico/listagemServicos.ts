import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>;
    private servicosConsumidos: Map<Servico, number>;

    constructor(servicos: Array<Servico>) {
        super();
        this.servicos = servicos;
        this.servicosConsumidos = new Map();
    }

    public listar(): void {
        console.log('Listagem de todos os serviços:');
        this.servicos.forEach(s => {
            console.log(`Nome do serviço: ${s.nome}`);
            console.log(`Preço do serviço: ${s.preco}`);
        });
    }

    public listarMaisConsumidos(clientes: Array<Cliente>): void {
        console.log('Listagem dos serviços mais consumidos:');
        this.atualizarServicosConsumidos(clientes);
        const servicosOrdenados = this.obterServicosOrdenadosPorConsumo();
        
        servicosOrdenados.forEach(([servico, quantidade]) => {
            console.log(`Nome do serviço: ${servico.nome}`);
            console.log(`Quantidade consumida: ${quantidade}`);
        });
    }

    private atualizarServicosConsumidos(clientes: Array<Cliente>): void {
        this.servicosConsumidos.clear();
        for (const servico of this.servicos) {
            this.servicosConsumidos.set(servico, 0);
        }
        for (const cliente of clientes) {
            for (const servico of cliente.getServicosConsumidos) {
                const count = this.servicosConsumidos.get(servico) || 0;
                this.servicosConsumidos.set(servico, count + 1);
            }
        }
    }

    private obterServicosOrdenadosPorConsumo(): Array<[Servico, number]> {
        const servicosArray = Array.from(this.servicosConsumidos.entries());
        servicosArray.sort((a, b) => b[1] - a[1]); // Ordena em ordem decrescente de quantidade consumida
        return servicosArray;
    }


    // public listarMaisConsumidos(clientes: Array<Cliente>): void {
    //     console.log('Serviço mais consumido:');
    //     this.atualizarServicosConsumidos(clientes);
    //     const servicoMaisConsumido = this.obterServicoMaisConsumido();
    //     if (servicoMaisConsumido) {
    //         const quantidadeConsumida = this.servicosConsumidos.get(servicoMaisConsumido) || 0;
    //         console.log(`Nome do serviço: ${servicoMaisConsumido.nome}`);
    //         console.log(`Quantidade consumida: ${quantidadeConsumida}`);
    //     } else {
    //         console.log('Nenhum serviço consumido.');
    //     }
    // }

    // private atualizarServicosConsumidos(clientes: Array<Cliente>): void {
    //     this.servicosConsumidos.clear();
    //     for (const servico of this.servicos) {
    //         this.servicosConsumidos.set(servico, 0);
    //     }
    //     for (const cliente of clientes) {
    //         for (const servico of cliente.getServicosConsumidos) {
    //             const count = this.servicosConsumidos.get(servico) || 0;
    //             this.servicosConsumidos.set(servico, count + 1);
    //         }
    //     }
    // }

    // private obterServicoMaisConsumido(): Servico | undefined {
    //     let servicoMaisConsumido: Servico | undefined;
    //     let quantidadeMaxima = 0;
    //     for (const [servico, quantidade] of this.servicosConsumidos) {
    //         if (quantidade > quantidadeMaxima) {
    //             servicoMaisConsumido = servico;
    //             quantidadeMaxima = quantidade;
    //         }
    //     }
    //     return servicoMaisConsumido;
    // }
}
