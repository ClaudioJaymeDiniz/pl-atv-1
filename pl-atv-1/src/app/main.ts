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
    alterar = 3,
    excluir = 4,
    sair = 0
}
enum EscolhaCadastro{
    cliente = 1,
    pet = 2,
    produto = 3,
    serviço = 4,
    back = 9
}
enum EscolhaListar{
    clientes = 1,
    pets = 2,
    produtos = 3,
    serviços = 4,
    topClienteQuantidade = 5,
    topClienteValor = 6,
    topProdutos = 7,
    topServicos = 8,
    back = 9
}
enum EscolhaDeletar{
    cliente = 1,
    pet = 2,
    produto = 3,
    serviço = 4,
    back = 9
}
enum EscolhaAlterar{
    cliente = 1,
    pet = 2,
    produto = 3,
    serviço = 4,
    back = 9
}

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar`);
    console.log(`2 - Listar`);
    console.log(`3 - Alterar`);
    console.log(`4 - Excluir`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case EscolhaUser.cadastrar:
            let opcaoCadastro = entrada.receberNumero
            (`Por favor, escolha o que deseja cadastrar:\n1 - Cliente\n2 - Pet\n3 - Produto\n4 - Serviço\n0 - Voltar\n`);
            
            switch (opcaoCadastro) {
                case EscolhaCadastro.cliente:
                    let cadastroCliente = new CadastroCliente(empresa.getClientes);
                    cadastroCliente.cadastrar();
                    break;
                case EscolhaCadastro.pet:
                    let cadastroPet = new CadastroPet(empresa.getPets);
                    cadastroPet.cadastrar();
                    break;
                case EscolhaCadastro.produto:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                case EscolhaCadastro.serviço:
                    // Lógica para cadastrar serviço
                    break;
                case EscolhaCadastro.back:
                    // Volta ao menu principal
                    break;
                default:
                    console.log(`Opção inválida`);
            }
            break;
        case EscolhaUser.listar:
            let opcaoListagem = entrada.receberNumero(`Por favor, escolha o que deseja listar:
                \n1 - Clientes\n2 - Pets\n3 - Produtos\n4 - Serviços\n5 - Top Clientes Quantidade\n6 - Top Clientes Valor\n7 Top Protudos\n8 Top Valor\n9 -  Voltar\n`);
            
            switch (opcaoListagem) {
                case EscolhaListar.clientes:
                    let listagemClientes = new ListagemClientes(empresa.getClientes);
                    listagemClientes.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.pets:
                    let listagemPets = new ListagemPets(empresa.getPets);
                    listagemPets.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.produtos:
                    let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                    listagemProdutos.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.serviços:
                    // Lógica para listar serviços
                    break;
                case EscolhaListar.topClienteQuantidade:
                    // Lógica para listar clientes por quantidade
                    break;
                case EscolhaListar.topClienteValor:
                    // Lógica para listar clientes por valor
                break;
                case EscolhaListar.topProdutos:
                    // Lógica para listar clientes por quantidade
                    break;
                case EscolhaListar.topServicos:
                    // Lógica para listar clientes por valor
                break;
                case EscolhaListar.back:
                    // Volta ao menu principal
                    break;
                default:
                    console.log(`Opção inválida`);
            }
            break;
        // Adicione casos para outras opções como cadastrarProduto, listarProdutos, etc.
        case EscolhaUser.sair:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }



//     switch (opcao) {
//         case EscolhaUser.cadastrar:
//             let cadastroCliente = new CadastroCliente(empresa.getClientes);
//             cadastroCliente.cadastrar();
//             break;
//         case EscolhaUser.listar:
//             let listagemClientes = new ListagemClientes(empresa.getClientes);
//             listagemClientes.listar();
//             console.log('\n');
//             break;
//         case EscolhaUser.cadastrarProduto:
//             let cadastroProduto = new CadastroProduto(empresa.getProdutos);
//             cadastroProduto.cadastrar();
//             break;
//         case EscolhaUser.listarProdutos:
//             let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
//             listagemProdutos.listar();
//             console.log('\n');
//             break;
//         case EscolhaUser.cadastrarPet:
//             let cadastroPet = new CadastroPet(empresa.getPets);
//             cadastroPet.cadastrar();
//             break;
//         case EscolhaUser.listarPets:
//             let listagemPets = new ListagemPets(empresa.getPets);
//             listagemPets.listar();
//             console.log('\n');
//             break;
//         case EscolhaUser.sair:
//             execucao = false;
//             console.log(`Até mais`);
//             break;
//         default:
//             console.log(`Operação não entendida :(`);
//     }
// }
}