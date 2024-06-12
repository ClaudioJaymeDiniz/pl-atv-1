import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log('Listagem de servicos: ');
        this.servicos.forEach(s => {
            console.log(`Nome do serviço: ${s.nome}`);
            console.log(`Preço do serviço: ${s.preco}`);

        })
    }

}