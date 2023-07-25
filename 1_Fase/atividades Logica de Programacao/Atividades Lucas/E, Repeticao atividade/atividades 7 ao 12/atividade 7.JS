//1) Faça um programa no qual o usuário deve digitar a sequência de números de 1 a 10, invertida. Caso digite algum número fora da sequência, interromper e mostrar uma mensagem "Você errou a sequência". Do contrário, ao final mostrar uma mensagem "Você terminou a sequência corretamente".

let numeroDig
let numero = 10

for(i=0; i < 10; i++){

    numeroDig = Number(prompt("Digite um numero"))

    if(numeroDig == numero){
        numero--
    }else{
        alert("Você errou a sequência")
        break
    }
}
    if(i == 10){
    alert("Você terminou a sequência corretamente")
    }
