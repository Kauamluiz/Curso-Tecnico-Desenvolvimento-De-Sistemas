let valorDiaria
let diarias = Number(prompt('Digite quantos dias vai ficar'))
let desconto
let valorTotal

if(diarias >= 1 && diarias <= 5){
    valorDiaria = 100
}else if(diarias >= 6 && diarias <= 10){
    valorDiaria = 90
}else{
    valorDiaria = 80
}

    desconto = (diarias*valorDiaria) * 0.25
    valorTotal = (diarias*valorDiaria - desconto + 150).toFixed(2)

    alert(`Valor a pagar: R$${valorTotal}`)