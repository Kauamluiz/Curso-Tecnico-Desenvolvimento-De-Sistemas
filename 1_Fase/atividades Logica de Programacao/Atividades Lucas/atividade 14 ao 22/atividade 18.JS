//5) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25). IMC = peso / (altura * altura).

let peso , altura , IMC

    peso = Number(prompt('Digite o seu peso'))
    altura = Number(prompt('Digite a sua altura'))

    IMC = (peso / (altura * altura)) . toFixed(1)

    if(IMC < 18)

        alert('Voce esta abaixo do peso')

    else if(18 >= IMC <= 25)

        alert('Voce esta no peso ideal')

    else if(IMC > 25)

        alert('Voce esta acima do peso')

    