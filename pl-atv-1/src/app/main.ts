import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Cadastro from "../negocio/cadastro";
import CadastroPet from "../negocio/pet/cadastroPet";
import CadastroCliente from "../negocio/cliente/cadastroCliente";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import ListagemProdutos from "../negocio/produto/listagemProdutos";
import ListagemPets from "../negocio/pet/listagemPets";
import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServicos";
import RemoverCliente from "../negocio/cliente/removerCliente";
import RemoverServico from "../negocio/servico/removerServico";
import RemoverProduto from "../negocio/produto/removerProduto";
import RemoverPet from "../negocio/pet/removerPet";
import CompraProduto from "../negocio/cliente/compraProduto";
import CompraServico from "../negocio/cliente/compraServico";
import Base from "../negocio/base";
import ClienteProduto from "../negocio/cliente/clienteProduto";
import ClienteServico from "../negocio/cliente/clienteServico";
import AlterarCliente from "../negocio/cliente/alterarCliente";
import AlterarServico from "../negocio/servico/alterarServico";
import AlterarProduto from "../negocio/produto/alterarProduto";


console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);
let empresa = new Empresa();
const base = new Base();
base.popularEmpresa(empresa); // Populando a empresa com dados iniciais
let execucao = true;

enum EscolhaUser {
    cadastrar = 1,
    listar = 2,
    alterar = 3,
    excluir = 4,
    sair = 0
}
enum EscolhaCadastro {
    cliente = 1,
    pet = 2,
    produto = 3,
    serviço = 4,
    compraProduto = 5,
    compraServico = 6,
    back = 9
}
enum EscolhaListar {
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
enum EscolhaDeletar {
    cliente = 1,
    pet = 2,
    produto = 3,
    serviço = 4,
    back = 9
}
enum EscolhaAlterar {
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
            (`Por favor, escolha o que deseja cadastrar:\n1 - Cliente\n2 - Pet\n3 - Produto\n4 - Serviço\n5 - Compra Produto\n6 - Compra Servico\n9 - Voltar\n`);
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
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar();
                    break;
                case EscolhaCadastro.compraProduto:
                    let compraProduto = new CompraProduto(empresa.getClientes, empresa.getProdutos);
                    compraProduto.adicionar();
                    break;
                case EscolhaCadastro.compraServico:
                    let compraServico = new CompraServico(empresa.getClientes, empresa.getProdutos);
                    compraServico.adicionar();
                    break;
                case EscolhaCadastro.back:
                    // Volta ao menu principal
                    break;
                default:
                    console.log(`Opção inválida`);
            }
            break;
        case EscolhaUser.listar:
            let opcaoListagem = entrada.receberNumero(`Por favor, escolha o que deseja listar:\n1 - Clientes\n2 - Pets\n3 - Produtos\n4 - Serviços\n5 - Top Clientes Quantidade\n6 - Top Clientes Valor\n7 Top Protudos\n8 Top Valor\n9 -  Voltar\n`);

            switch (opcaoListagem) {
                case EscolhaListar.clientes:
                    let listagemClientes = new ListagemClientes(empresa.getClientes);
                    listagemClientes.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.pets:
                    let listagemPets = new ListagemPets(empresa.getClientes);
                    listagemPets.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.produtos:
                    let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
                    listagemProdutos.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.serviços:
                    let listagemServicos = new ListagemServicos(empresa.getServicos);
                    listagemServicos.listar();
                    console.log('\n');
                    break;
                case EscolhaListar.topClienteQuantidade:
                    let topClienteQuantidade = new ListagemClientes(empresa.getClientes);
                    topClienteQuantidade.listarMaisConsumiuProdutos();
                    break;
                case EscolhaListar.topClienteValor:
                    let topClienteValor = new ListagemClientes(empresa.getClientes);
                    topClienteValor.listarTopClientesPorValor();
                    break;
                case EscolhaListar.topProdutos:
                    let topProdutos = new ListagemProdutos(empresa.getProdutos);
                    topProdutos.listarMaisConsumidos(empresa.getClientes);
                    break;
                case EscolhaListar.topServicos:
                    let topServicos = new ListagemServicos(empresa.getServicos);
                    topServicos.listarMaisConsumidos(empresa.getClientes);
                case EscolhaListar.back:
                    // Volta ao menu principal
                    break;
                default:
                    console.log(`Opção inválida`);
            }
            break;
        case EscolhaUser.excluir:
            let opcaoExcluir = entrada.receberNumero(`Por favor, escolha o que deseja excluir:\n1 - Cliente\n2 - Pet\n3 - Produto\n4 - Serviço\n0 - Voltar\n`);

            switch (opcaoExcluir) {
                case EscolhaDeletar.cliente:
                    let removerCliente = new RemoverCliente(empresa.getClientes);
                    removerCliente.remover();
                    break;
                case EscolhaDeletar.pet:
                    let removerPet = new RemoverPet(empresa.getClientes);
                    removerPet.remover();
                    break;
                case EscolhaDeletar.produto:
                    let removerProduto = new RemoverProduto(empresa.getProdutos);
                    removerProduto.remover();
                    break;
                case EscolhaDeletar.serviço:
                    let removerServico = new RemoverServico(empresa.getServicos);
                    removerServico.remover();
                    break;
                case EscolhaCadastro.back:
                    // Volta ao menu principal
                    break;
                default:
                    console.log(`Opção inválida`);
            }
            break;
            case EscolhaUser.alterar:
            let opcaoAlterar = entrada.receberNumero
            (`Por favor, escolha o que deseja alterar:\n1 - Cliente\n2 - Pet\n3 - Produto\n4 - Serviço\n0 - Voltar\n`);

            switch (opcaoAlterar) {
                case EscolhaAlterar.cliente:
                    let alterarCliente = new AlterarCliente(empresa.getClientes);
                    alterarCliente.alterar();
                    break;
                case EscolhaAlterar.pet:
                    
                    break;
                case EscolhaAlterar.produto:
                    let alterarProduto = new AlterarProduto(empresa.getProdutos);
                    alterarProduto.alterar();
                    break;
                case EscolhaDeletar.serviço:
                    let alterarServico = new AlterarServico(empresa.getServicos);
                    alterarServico.alterar();
                    break;
                case EscolhaCadastro.back:
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