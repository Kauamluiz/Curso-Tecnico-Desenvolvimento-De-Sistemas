//1) Criar um programa que simule um jogo de adivinhação. Deve-se criar uma variável com um número secreto e pedir ao usuário para digitar um número repetidamente até que ele acerte esse número secreto. Acertando, mostrar mensagem de "Acertou miseráááááááávi" e quantos palpites foram utilizados para acertar.

let numeroSecreto = 75
let numeroPalpites, quantidadePalpites = 0

    while(numeroPalpites != numeroSecreto){

        numeroPalpites = Number(prompt("Diga um numero: "))
        quantidadePalpites++

    }

    alert(`Acertou em ${quantidadePalpites} palpites, miseráááááááááávi! :D`)