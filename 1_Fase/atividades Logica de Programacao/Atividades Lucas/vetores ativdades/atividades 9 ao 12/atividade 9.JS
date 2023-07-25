// 1) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. (Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações).

let numeros = []
let maiorNumero = 0
let addNumero, calc, posicao, soma
let resultados = []

    for(i=0; i < 5; i++){
        addNumero = Number(prompt("Digite um numero: "))
        numeros.push(addNumero)
        if(addNumero > maiorNumero){

            maiorNumero = addNumero

        }
            
    }
    for(i=0; i < 5; i++){

        if(maiorNumero != numeros[i]){
        calc = numeros[i] * maiorNumero
        resultados.push(calc)
        }
    }
    soma = resultados[0] + resultados[1] + resultados[2] + resultados[3]
    alert(`A soma das multiplicações é: ${soma}`)

