import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemPets extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os pets dos clientes:`);
        this.clientes.forEach(cliente => {
            // Listando os pets do cliente
            console.log(`Cliente: ${cliente.nome}`);
            cliente.getPets.forEach(pet => {
                console.log(`  Nome: ${pet.getNome}`);
                console.log(`  Tipo: ${pet.getTipo}`);
                console.log(`  Raça: ${pet.getRaca}`);
                console.log(`  Gênero: ${pet.getGenero}`);
                console.log(`----------------------------`);
            });
        });
        console.log(`\n`);
    }
}
