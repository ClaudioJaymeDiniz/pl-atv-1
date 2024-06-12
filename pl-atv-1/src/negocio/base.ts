import Empresa from "../modelo/empresa";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Pet from "../modelo/pet";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";

class Base {
    private gerarNomeAleatorio(): string {
        const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gustavo", "Helena", "Igor", "Julia"];
        const sobrenomes = ["Silva", "Santos", "Oliveira", "Pereira", "Almeida", "Costa", "Gomes", "Martins", "Souza", "Ferreira"];
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
        return `${nome} ${sobrenome}`;
    }

    private gerarCpfAleatorio(): CPF {
        const cpf = `${Math.floor(100000000 + Math.random() * 900000000)}-${Math.floor(10 + Math.random() * 90)}`;
        const dataEmissao = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
        return new CPF(cpf, dataEmissao);
    }

    private gerarRgAleatorio(): RG {
        const rg = `${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(10 + Math.random() * 90)}`;
        const dataEmissao = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
        return new RG(rg, dataEmissao);
    }

    private gerarTelefoneAleatorio(): Telefone {
        const ddd = `${Math.floor(10 + Math.random() * 90)}`;
        const numero = `${Math.floor(900000000 + Math.random() * 100000000)}`;
        return new Telefone(ddd, numero);
    }

    private gerarNomeProdutoServicoAleatorio(): string {
        const produtosServicos = ["Banho", "Tosa", "Vacinação", "Ração", "Brinquedo", "Guia", "Coleira", "Shampoo", "Condicionador", "Petiscos"];
        return produtosServicos[Math.floor(Math.random() * produtosServicos.length)];
    }

    private gerarPrecoAleatorio(): number {
        return Math.floor(10 + Math.random() * 90);
    }

    private gerarPetAleatorio(): Pet {
        const nomesPets = ["Rex", "Bella", "Charlie", "Luna", "Max", "Lucy", "Buddy", "Molly", "Rocky", "Daisy"];
        const tipos = ["Cachorro", "Gato", "Pássaro", "Peixe", "Roedor"];
        const racas = ["Vira-lata", "Siamês", "Pastor", "Labrador", "Poodle"];
        const generos = ["Macho", "Fêmea"];
        const nome = nomesPets[Math.floor(Math.random() * nomesPets.length)];
        const tipo = tipos[Math.floor(Math.random() * tipos.length)];
        const raca = racas[Math.floor(Math.random() * racas.length)];
        const genero = generos[Math.floor(Math.random() * generos.length)];
        return new Pet(nome, raca, genero, tipo);
    }

    public popularEmpresa(empresa: Empresa): void {
        for (let i = 0; i < 20; i++) {
            // Criar cliente
            const nome = this.gerarNomeAleatorio();
            const nomeSocial = this.gerarNomeAleatorio();
            const cpf = this.gerarCpfAleatorio();
            const cliente = new Cliente(nome, nomeSocial, cpf);
            cliente.adicionarRg(this.gerarRgAleatorio());
            cliente.adicionarTelefone(this.gerarTelefoneAleatorio());
            cliente.adicionarPet(this.gerarPetAleatorio());
            empresa.getClientes.push(cliente);

            // Criar produto
            const nomeProduto = this.gerarNomeProdutoServicoAleatorio();
            const precoProduto = this.gerarPrecoAleatorio();
            const produto = new Produto();
            produto.nome = nomeProduto;
            produto.preco = precoProduto;
            empresa.getProdutos.push(produto);

            // Criar serviço
            const nomeServico = this.gerarNomeProdutoServicoAleatorio();
            const precoServico = this.gerarPrecoAleatorio();
            const servico = new Servico();
            servico.nome = nomeServico;
            servico.preco = precoServico;
            empresa.getServicos.push(servico);

            // Associar produtos consumidos pelo cliente (quantidade aleatória entre 1 e 5)
            const numProdutos = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < numProdutos; j++) {
                const produtoConsumido = empresa.getProdutos[Math.floor(Math.random() * empresa.getProdutos.length)];
                cliente.getProdutosConsumidos.push(produtoConsumido);
            }

            // Associar serviços consumidos pelo cliente (quantidade aleatória entre 1 e 5)
            const numServicos = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < numServicos; j++) {
                const servicoConsumido = empresa.getServicos[Math.floor(Math.random() * empresa.getServicos.length)];
                cliente.getServicosConsumidos.push(servicoConsumido);
            }
        }
    }
}

export default Base;
