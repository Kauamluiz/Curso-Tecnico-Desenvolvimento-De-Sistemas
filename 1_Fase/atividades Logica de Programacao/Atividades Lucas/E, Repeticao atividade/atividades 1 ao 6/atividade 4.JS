//4) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

let numeros, mediaNum, resto, total
let media = 0
let quantidade = 5

    for(i=0; i < quantidade; i++){
        numeros = Number(prompt("Digite um numero: "))

        media = media + numeros
        resto = numeros / 2
        total = resto % 2 == 0

    }
    if(total > 0){
        alert('Um dos numeros digitados era impar')

    }else{
        mediaNum = media / 5
        alert(`Media dos numeros: ${mediaNum}`)
    }
