//5) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela.
let temperatura = Number(prompt('Digite a temperatura'))

divisao = temperatura / 5
multiplicacao = divisao * 9
soma = (multiplicacao + 32) .toFixed(1)

alert(`A temperatura em fahrenheit é: ${soma}'F`)