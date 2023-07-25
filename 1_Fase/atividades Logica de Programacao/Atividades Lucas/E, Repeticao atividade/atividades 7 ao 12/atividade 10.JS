//4) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados. (DESAFIO: Ao final, dizer a quantidade de números que foram desconsiderados)


let numeroDigitado, menorNumero = 50, maiorNumero = 0, numeroFora = 0

    for(i=0; i<10; i++){

        numeroDigitado = Number(prompt("Digite um numero"))

        if(numeroDigitado > 0 && numeroDigitado < 50){
            if(numeroDigitado > maiorNumero){
                maiorNumero = numeroDigitado

            }else if(numeroDigitado < menorNumero){
                menorNumero = numeroDigitado

            }
        }else{
            numeroFora++
        }
    }

alert(`Maior numero: ${maiorNumero}.\nMenor numero: ${menorNumero}.\nQuantidade de numeros desconsiderados: ${numeroFora}.`)
