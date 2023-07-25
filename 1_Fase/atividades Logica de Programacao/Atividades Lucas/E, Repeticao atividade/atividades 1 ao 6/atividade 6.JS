//6) Desenvolver um programa no qual o usuário digite o número de multas que deseja cadastrar e para cada multa deve colocar o valor em reais e os pontos perdidos na carteira de habilitação. Ao final, mostrar o somatório das multas e dos pontos, caso os pontos alcancem 21 ou mais, exibir a mensagem “Você está irregular”, senão, exibir “Você está regular”.

let numeroMultas, valorMultas, pontosCarteira
let valorTotal = 0
let pontosTotal = 0

    numeroMultas = Number(prompt("Digite o numero de multas"))

    for(i=0; i < numeroMultas; i++){
        valorMultas = Number(prompt("Digite o valor da multa"))
        pontosCarteira = Number(prompt("Digite a quantidade de pontos"))

        valorTotal = valorTotal + valorMultas
        pontosTotal = pontosTotal + pontosCarteira

    }
    if(pontosTotal >= 21){
        alert(`Voce esta irregular`)

    }else{
        alert(`Voce esta regular`)
        
    }