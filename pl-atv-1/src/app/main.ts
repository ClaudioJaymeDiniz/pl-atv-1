import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cadastro from "../negocio/cadastro";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

enum EscolhaUser {
    cadastrar = 1,
    listar = 2,
    cadastrarP = 3,
    listarProdutos = 4,
    sair = 0
}

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case EscolhaUser.cadastrar:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case EscolhaUser.listar:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            console.log('\n');
            
            break;
        case EscolhaUser.cadastrarP:
            let cadastroProduto = new CadastroProduto (empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case EscolhaUser.listarProdutos:
            let listagemProdutos = new ListagemProdutos (empresa.getProdutos)
            listagemProdutos.listar()
            console.log('\n');
                            
            break;
        case EscolhaUser.sair:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}