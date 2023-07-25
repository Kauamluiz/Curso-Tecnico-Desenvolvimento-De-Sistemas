// Criação de uma página WEB, onde será possível realizar o cadastro de produtos de uma loja (nome, marca e valor), alterar o valor de um produto, deletar um produto e apresentar a lista dos produtos para os clientes, na página.
// Tudo isso deverá ser realizado em uma única página.
// Itens obrigatórios:
// - Criação de um array de objetos para armazenar os produtos. Deverá ser armazenados dentro do LocalStorage com a chave "produtosLoja". (3,0)
// - Criação da página HTML para apresentar / alterar / cadastrar / deletar os produtos. (2,0)
// - Função para listar os produtos. (1,0)
// - Função para alterar o valor de um produto, deverá buscar cada produto pelo seu nome. (2,0)
// - Função para deletar um produto. (1,0)
// - Função para cadastrar um produto. (1,0)

let produtosListados = []
let nomeProduto = document.getElementById("ProdutosDigitados")
let valorProduto = document.getElementById("ValorDigitados")
let marcaProduto = document.getElementById("MarcaDigitados")

function CadastrarProdut(){

    produtosListados = JSON.parse(localStorage.getItem('produtosLoja'))

    if(produtosListados == null){

        produtosListados = []
        produt()

    }else{

        produt()

    }

    

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function AlterarProdut(){

    produtosListados = JSON.parse(localStorage.getItem('produtosLoja'))

    for(i=0; i < produtosListados.length; i++){

        if(nomeProduto.value == produtosListados[i].nomes){

            produtosListados[i].valores = valorProduto.value

            document.getElementById("mensagem").innerHTML = `Valor alterado!`

            localStorage.setItem('produtosLoja', JSON.stringify(produtosListados))

            listaProdutos()

            document.getElementById('ProdutosDigitados').focus()
            document.getElementById('ProdutosDigitados').value = ''

            document.getElementById('ValorDigitados').focus()
            document.getElementById('ValorDigitados').value = ''

            break

        }else{

            document.getElementById("mensagem").innerHTML = `Produto não encontrado!`

        }
   
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function DeletarProdut(){

    produtosListados = JSON.parse(localStorage.getItem('produtosLoja'))

    for(i=0; i < produtosListados.length; i++){

        if(nomeProduto.value == produtosListados[i].nomes){
            
            produtosListados.splice(i, 1)  

            document.getElementById("mensagem").innerHTML = `Produto removido!`

            localStorage.setItem('produtosLoja', JSON.stringify(produtosListados))

            listaProdutos()

            document.getElementById('ProdutosDigitados').focus()
            document.getElementById('ProdutosDigitados').value = ''

            break

        }else{

            document.getElementById("mensagem").innerHTML = `Produto não encontrado!`

        }
   
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function produt(){

    if(nomeProduto.value == null || nomeProduto.value == ''){

        document.getElementById("mensagem").innerHTML = `Verificar o nome do produto!`

    }else if(valorProduto.value == null || valorProduto.value == ''){

        document.getElementById("mensagem").innerHTML = `Verificar o valor do produto!`

    }else if(marcaProduto.value == null || marcaProduto.value == ''){

        document.getElementById("mensagem").innerHTML = `Verificar a marca do produto!`

    }else{

    let produtos = {

        nomes: '',
        valores: '',
        marcas: ''

    }

    produtos.nomes = nomeProduto.value

    produtos.valores = valorProduto.value

    produtos.marcas = marcaProduto.value

    produtosListados.push(produtos)

    localStorage.setItem('produtosLoja', JSON.stringify(produtosListados))

    listaProdutos()

    document.getElementById("mensagem").innerHTML = `Produto adicionado! <br>Produto: ${nomeProduto.value}`

    document.getElementById('ProdutosDigitados').focus()
    document.getElementById('ProdutosDigitados').value = ''

    document.getElementById('ValorDigitados').focus()
    document.getElementById('ValorDigitados').value = ''

    document.getElementById('MarcaDigitados').focus()
    document.getElementById('MarcaDigitados').value = ''

    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listaProdutos(){
    
    produtosListados = JSON.parse(localStorage.getItem('produtosLoja'))

    document.getElementById("produt").innerHTML = ``

    for(i=0; i < produtosListados.length; i++){

        document.getElementById("produt").innerHTML += `Produto: ${produtosListados[i].nomes}, Valor: R$${produtosListados[i].valores}, Marca: ${produtosListados[i].marcas}.<br>`

    }

}
