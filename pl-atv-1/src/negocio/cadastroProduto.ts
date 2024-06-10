import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro{
    private entrada: Entrada
    private produtos: Array<Produto>
    constructor (produtos: Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(' Iniciando o cadastro do produto: ');
        let nome = this.entrada.receberTexto('Digite o nome do produto: ')
        let produto = new Produto()
        produto.nome = nome
        this.produtos.push(produto)
    }
}