//1) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!" e a média. Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. (DESAFIO: Criar uma terceira condição para recuperação. Exemplo: Menor que 5 reprovado, entre 5 e 7 recuperação, maior ou igual aprovado.

let nota1 = Number(prompt('Digite a nota 1'))
let nota2 = Number(prompt('Digite a nota 2'))
let nota3 = Number(prompt('Digite a nota 3'))

    notasCalc = nota1 + nota2 + nota3
    notas = (notasCalc / 3) .toFixed(1)

    if(notas >= 7){

        alert(`Aprovado! Média: ${notas}`)

    
    }else if(notas >= 5 && notas < 7){

        alert(`Voce esta de recuperacao! Média: ${notas}`)

    }if(notas <= 4){

        alert(`Reprovado! Média: ${notas}`)

    }