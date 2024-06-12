import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Excluir from "../excluir";

export default class RemoverPet extends Excluir {
    private pets: Array<Pet>;
    private entrada: Entrada;

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
        this.entrada = new Entrada();
    }

    public remover(): void {
        console.log(`\nRemover pet`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do pet que deseja remover: `);

        // Encontrar o índice do pet com o nome fornecido
        let indice = this.pets.findIndex(pet => pet.getNome === nome);

        // Verificar se o pet foi encontrado
        if (indice !== -1) {
            this.pets.splice(indice, 1);
            console.log(`\nPet excluído :)\n`);
        } else {
            console.log(`\nPet não encontrado :(\n`);
        }
    }
}
