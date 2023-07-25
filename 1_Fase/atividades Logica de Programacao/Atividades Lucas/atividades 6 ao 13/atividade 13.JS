//8) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50. (JS)

let largura = Number(prompt('Digite a largura da piscina em metros'))
let comprimento = Number(prompt('Digite o comprimento em metros'))
let azulejo

    metroQua = largura * comprimento
    azulejo = metroQua * 60
    // 60 / 45.50 = 1.3186813187
    valor = (azulejo * 0.7584) .toFixed(2)

alert(`Serao necessarios: ${azulejo} Azulejos\n O valor a pagar pelos azulejos é: R$${valor}`)