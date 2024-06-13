import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import RG from "../../modelo/rg";
import Pet from "../../modelo/pet";

export default class AlterarCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public alterar(): void {
        console.log(`\nAlterar dados do cliente`);
        const cpf = this.entrada.receberTexto(`Por favor, informe o CPF do cliente que deseja alterar: `);
        const cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (cliente) {
            console.log(`Cliente encontrado: ${cliente.nome}`);

            const opcao = this.entrada.receberNumero(
                `Quais dados deseja alterar?\n` +
                `1 - Nome\n` +
                `2 - Nome Social\n` +
                `3 - Telefones\n` +
                `4 - RGs\n` +
                `5 - Pets\n` +
                `0 - Sair\n`
            );

            switch (opcao) {
                case 1:
                    const novoNome = this.entrada.receberTexto(`Informe o novo nome: `);
                    cliente.nome = novoNome;
                    console.log(`Nome alterado com sucesso.`);
                    break;

                case 2:
                    const novoNomeSocial = this.entrada.receberTexto(`Informe o novo nome social: `);
                    cliente.nomeSocial = novoNomeSocial;
                    console.log(`Nome social alterado com sucesso.`);
                    break;

                case 3:
                    this.alterarTelefones(cliente);
                    break;

                case 4:
                    this.alterarRgs(cliente);
                    break;

                case 5:
                    this.alterarPets(cliente);
                    break;

                case 0:
                    console.log(`Alteração cancelada.`);
                    break;

                default:
                    console.log(`Opção inválida.`);
                    break;
            }
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }

    private alterarTelefones(cliente: Cliente): void {
        console.log(`Telefones atuais:`);
        cliente.getTelefones.forEach(telefone => {
            console.log(`(${telefone.getDdd}) ${telefone.getNumero}`);
        });

        const opcao = this.entrada.receberNumero(
            `Deseja:\n` +
            `1 - Adicionar telefone\n` +
            `2 - Remover telefone\n` +
            `0 - Sair\n`
        );

        switch (opcao) {
            case 1:
                const ddd = this.entrada.receberTexto(`Informe o DDD: `);
                const numero = this.entrada.receberTexto(`Informe o número: `);
                cliente.adicionarTelefone(new Telefone(ddd, numero));
                console.log(`Telefone adicionado com sucesso.`);
                break;

            case 2:
                const telefoneRemover = this.entrada.receberTexto(`Informe o número do telefone a ser removido (sem DDD): `);
                const index = cliente.getTelefones.findIndex(tel => tel.getNumero === telefoneRemover);
                if (index > -1) {
                    cliente.getTelefones.splice(index, 1);
                    console.log(`Telefone removido com sucesso.`);
                } else {
                    console.log(`Telefone não encontrado.`);
                }
                break;

            case 0:
                console.log(`Operação cancelada.`);
                break;

            default:
                console.log(`Opção inválida.`);
                break;
        }
    }

    private alterarRgs(cliente: Cliente): void {
        console.log(`RGs atuais:`);
        cliente.getRgs.forEach(rg => {
            console.log(`RG: ${rg.getValor}, Data de Emissão: ${rg.getDataEmissao.toLocaleDateString()}`);
        });

        const opcao = this.entrada.receberNumero(
            `Deseja:\n` +
            `1 - Adicionar RG\n` +
            `2 - Remover RG\n` +
            `0 - Sair\n`
        );

        switch (opcao) {
            case 1:
                const valorRG = this.entrada.receberTexto(`Informe o número do RG: `);
                const dataEmissaoRG = new Date(this.entrada.receberTexto(`Informe a data de emissão (YYYY-MM-DD): `));
                cliente.adicionarRg(new RG(valorRG, dataEmissaoRG));
                console.log(`RG adicionado com sucesso.`);
                break;

            case 2:
                const rgRemover = this.entrada.receberTexto(`Informe o número do RG a ser removido: `);
                const indexRG = cliente.getRgs.findIndex(rg => rg.getValor === rgRemover);
                if (indexRG > -1) {
                    cliente.getRgs.splice(indexRG, 1);
                    console.log(`RG removido com sucesso.`);
                } else {
                    console.log(`RG não encontrado.`);
                }
                break;

            case 0:
                console.log(`Operação cancelada.`);
                break;

            default:
                console.log(`Opção inválida.`);
                break;
        }
    }

    private alterarPets(cliente: Cliente): void {
        console.log(`Pets atuais:`);
        cliente.getPets.forEach(pet => {
            console.log(`Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
        });

        const opcao = this.entrada.receberNumero(
            `Deseja:\n` +
            `1 - Adicionar pet\n` +
            `2 - Remover pet\n` +
            `0 - Sair\n`
        );

        switch (opcao) {
            case 1:
                const nomePet = this.entrada.receberTexto(`Informe o nome do pet: `);
                const tipoPet = this.entrada.receberTexto(`Informe o tipo do pet: `);
                const racaPet = this.entrada.receberTexto(`Informe a raça do pet: `);
                const generoPet = this.entrada.receberTexto(`Informe o gênero do pet: `);
                cliente.adicionarPet(new Pet(nomePet, tipoPet, racaPet, generoPet));
                console.log(`Pet adicionado com sucesso.`);
                break;

            case 2:
                const nomePetRemover = this.entrada.receberTexto(`Informe o nome do pet a ser removido: `);
                const indexPet = cliente.getPets.findIndex(pet => pet.getNome === nomePetRemover);
                if (indexPet > -1) {
                    cliente.getPets.splice(indexPet, 1);
                    console.log(`Pet removido com sucesso.`);
                } else {
                    console.log(`Pet não encontrado.`);
                }
                break;

            case 0:
                console.log(`Operação cancelada.`);
                break;

            default:
                console.log(`Opção inválida.`);
                break;
        }
    }
}
