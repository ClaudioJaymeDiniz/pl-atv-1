import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem{
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log('Listagem de produtos: ');
        this.produtos.forEach(p =>{
            console.log(`Nome do produto: ${p.nome}`);
            console.log(`Preço do produto: ${p.preco}`);
            
        })
    }

}