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
                console.log(`  ----------------------------`);
            });

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
