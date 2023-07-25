let nome, diasFicar
let desconto1, desconto2, descontoCalc, total, totalValor
let dias, diaria

    nome = prompt('Digite o seu nome:') .toLowerCase()
    diasFicar = Number(prompt('Digite quantos dias vai ficar'))


switch(true){
    case (diasFicar >= 1 && diasFicar <= 5):
        diaria = 100
        break

    case (diasFicar >= 6 && diasFicar <= 10):
        diaria = 90
        break

    default:
        diaria = 80
        break
}

    dias = diasFicar * diaria
    total = dias
    desconto1 = (total / 100) * 10
    desconto2 = (total / 100) * 15
    descontoCalc = desconto1 + desconto2
    totalValor = (total - descontoCalc + 150).toFixed(2)
       alert(`Seu nome e: ${nome} \nVoce vai ficar: ${diasFicar} dias \nValor a pagar: R$${totalValor}`)
