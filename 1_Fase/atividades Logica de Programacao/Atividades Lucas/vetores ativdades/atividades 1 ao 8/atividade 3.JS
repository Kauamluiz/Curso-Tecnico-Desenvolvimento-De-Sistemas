//3) Cria um programa onde o usuário digite 5 números. Ao terminar de digitar os números, mostrar uma lista somente com números ímpares digitados e a soma desses números.

let listaImpares = []
let addNum, somaImp = 0

    for(i=0; i < 6; i++){

        addNum = Number(prompt("Digite um numero"))

        if(addNum % 2 == 1){

            listaImpares.push(addNum)
            somaImp += addNum

        }
    }
    alert(`Lista impares: ${listaImpares}\nSoma dos impares: ${somaImp}`)