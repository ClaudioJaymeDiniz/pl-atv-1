import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cadastro from "../negocio/cadastro";
import CadastroPet from "../negocio/cadastroPet";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemPets from "../negocio/listagemPets";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
let execucao = true;

enum EscolhaUser {
    cadastrar = 1,
    listar = 2,
    cadastrarProduto = 3,
    listarProdutos = 4,
    cadastrarPet = 5,
    listarPets = 6,
    sair = 0
}

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case EscolhaUser.cadastrar:
            let cadastroCliente = new CadastroCliente(empresa.getClientes);
            cadastroCliente.cadastrar();
            break;
        case EscolhaUser.listar:
            let listagemClientes = new ListagemClientes(empresa.getClientes);
            listagemClientes.listar();
            console.log('\n');
            break;
        case EscolhaUser.cadastrarProduto:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case EscolhaUser.listarProdutos:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            console.log('\n');
            break;
        case EscolhaUser.cadastrarPet:
            let cadastroPet = new CadastroPet(empresa.getPets);
            cadastroPet.cadastrar();
            break;
        case EscolhaUser.listarPets:
            let listagemPets = new ListagemPets(empresa.getPets);
            listagemPets.listar();
            console.log('\n');
            break;
        case EscolhaUser.sair:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
