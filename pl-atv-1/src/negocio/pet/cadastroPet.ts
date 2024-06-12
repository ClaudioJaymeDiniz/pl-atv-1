import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Cadastro from "../cadastro";

export default class CadastroPet extends Cadastro {
    private entrada: Entrada;
    private pets: Array<Pet>;

    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log('Iniciando o cadastro do pet:');
        let nome = this.entrada.receberTexto('Digite o nome do pet: ');
        let raca = this.entrada.receberTexto('Digite a raça do pet: ');
        let genero = this.entrada.receberTexto('Digite o genero do pet: ');
        let tipo = this.entrada.receberTexto('Digite o tipo do pet: ');

        let pet = new Pet(nome, raca, genero, tipo);
        
        this.pets.push(pet);
    }
}
