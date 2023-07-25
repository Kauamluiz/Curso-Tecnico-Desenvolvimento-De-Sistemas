//4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let addNum
let vetor1 = []
let vetor2 = []
let vetorInter = []

    for(i=0; i < 6; i++){

        addNum = prompt("Digite um numero").toUpperCase()

        if(i < 3){

            vetor1.push(addNum)
            vetorInter.push(addNum)
        }else{

            vetor2.push(addNum)
            vetorInter.push(addNum)
        }

        vetorInter.sort()
    }

    alert(`Primeiro vetor: ${vetor1}\nSegundo vetor: ${vetor2}\nVetor final: ${vetorInter}`)

