//4) Programar para que o usuário digite um número. Caso seja par, mostre "O número é par!", senão, mostre "O número é ímpar!"


let numero = Number(prompt('Digite o numero'))
let resto = numero / 2 
let total = resto % 2

    if(total === 0){

        alert('O numero é par!')
    
    }else if(total !== 0 )

        alert('O numero é impar!')

