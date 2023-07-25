//7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. Caso exista, o programa deve mostrar todos os índices que ele se encontra. Caso não exista, mostrar mensagem dizendo que não existe.

//             0  1  2  3  4   5   6  7  8  9
let numeros = [2, 4, 2, 8, 7, 12, 11, 9, 1, 1]
let posicoes = []
let numPesq

    numPesq = Number(prompt("Numero a ser pesquisado: "))

    for(i=0; i < numeros.length; i++){

        if(numPesq == numeros[i]){

            posicoes.push(i)

        }

    }

    if(posicoes.length == 0){

        alert("Numero nao existe!")

    }else{

        alert(`O numero foi encontrado nas posicoes ${posicoes}`)

    }
