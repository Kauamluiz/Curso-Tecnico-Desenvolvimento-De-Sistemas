// No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque, como na página principal, na página da categoria daquele produto, na página de promoções ou se não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba essas avaliações do comprador (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 a 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice acima de 9 (destaque na página principal).

// Critérios de avaliação:
// (1,0) Receber as notas da avaliação.
// (1,0) Calcular o índice do produto (média) com duas casas após a vírgula e mostrar na tela.
// (1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela.

let produto, qualidadeProduto, custoBeneficio, durabilidade, destaque

    produto = prompt('Digite o nome do produto:') .toLowerCase()
    qualidadeProduto = Number(prompt('Qual a qualidade do produto 1 e 10'))   
    custoBeneficio = Number(prompt('Qual o custo beneficio do produto entre 1 e 10'))
    durabilidade = Number(prompt('Qual a durabilidade do produto entre 1 e 10'))

    destaque = ((qualidadeProduto + custoBeneficio + durabilidade) / 3) .toFixed(2)
    
    switch(true){
        case (destaque < 5):
            alert(`O produto: ${produto}, nao ganha destaque \nAvaliacao: ${destaque}`)
            break

        case (destaque >= 5 && destaque < 7):
            alert(`O produto: ${produto}, ganha destaque na pagina categoria \nAvaliacao: ${destaque}`)
            break

        case (destaque >= 7 && destaque < 9):
            alert(`O produto: ${produto}, ganha destaque na pagina promocoes \nAvaliacao: ${destaque}`)
            break

        case (destaque >= 9):
            alert(`O produto: ${produto}, ganha destaque na pagina principal \nAvaliacao: ${destaque}`)
            break

    }
