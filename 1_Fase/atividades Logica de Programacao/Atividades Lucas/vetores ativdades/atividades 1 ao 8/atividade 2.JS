//2) Desenvolva um programa que o usuário digite 10 números, ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade. Mostrar também a lista.

let numDigi
let numeros = []
let numerosMenor = 0, numerosMaior = 0, sub

    for(i=0; i < 10; i++){
        numDigi = Number(prompt("Digite um numero"))
        numeros.push(numDigi)

        if(i < 5){

            numerosMenor = numerosMenor + numDigi

        }else{

            numerosMaior = numerosMaior + numDigi

        }

    }
    sub = numerosMaior - numerosMenor

    alert(`Primeira metade: ${numerosMenor}\nSegunda metade: ${numerosMaior}\nSubtração das metades: ${sub}\nLista: ${numeros}`)