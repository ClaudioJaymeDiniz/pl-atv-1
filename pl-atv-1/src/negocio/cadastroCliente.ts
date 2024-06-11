import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);

        // Entrada de dados do cliente
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);

        // Entrada de dados do CPF
        let valorCPF = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let dataCPF = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesDataCPF = dataCPF.split('/');
        let anoCPF = parseInt(partesDataCPF[2]);
        let mesCPF = parseInt(partesDataCPF[1]) - 1; // Ajuste para mês correto
        let diaCPF = parseInt(partesDataCPF[0]);
        let dataEmissaoCPF = new Date(anoCPF, mesCPF, diaCPF);
        let cpf = new CPF(valorCPF, dataEmissaoCPF);

        // Criar cliente e adicionar CPF
        let cliente = new Cliente(nome, nomeSocial, cpf);

        // Entrada de dados do RG
        let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRG = dataRG.split('/');
        let anoRG = parseInt(partesDataRG[2]);
        let mesRG = parseInt(partesDataRG[1]) - 1; // Ajuste para mês correto
        let diaRG = parseInt(partesDataRG[0]);
        let dataEmissaoRG = new Date(anoRG, mesRG, diaRG);
        let rg = new RG(valorRG, dataEmissaoRG);

        // Adicionar RG ao cliente
        cliente.adicionarRg(rg);

        // Entrada de dados do Telefone
        let adicionarMaisTelefones = true;
        while (adicionarMaisTelefones) {
            let ddd = this.entrada.receberTexto(`Por favor informe o DDD do telefone: `);
            let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
            let telefone = new Telefone(ddd, numero);
            cliente.adicionarTelefone(telefone);

            let adicionarOutroTelefone = this.entrada.receberTexto(`Deseja adicionar outro telefone? (s/n): `);
            adicionarMaisTelefones = adicionarOutroTelefone.toLowerCase() === 's';
        }

        // Adicionar cliente à lista de clientes
        this.clientes.push(cliente);

        console.log(`\nCadastro concluído :)\n`);
    }
}
