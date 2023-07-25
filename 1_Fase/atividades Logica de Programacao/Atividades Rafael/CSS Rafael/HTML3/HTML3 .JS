
function Moedas(){

let valorProduto = Number(document.getElementById('valorP').value)
let real = Number(document.getElementById('real').value)
let centav1 = Number(document.getElementById('centav1').value)
let centav2 = Number(document.getElementById('centav2').value)
let centav3 = Number(document.getElementById('centav3').value)
let centav4 = Number(document.getElementById('centav4').value)
let resultado = document.getElementById('compra')
let total, resto, falta

    total = (real + (centav1 / 2) + (centav2 / 4) + (centav3 / 10) + (centav4 / 20)).toFixed(2)
    resto = (total - valorProduto).toFixed(2)
    falta = (valorProduto - total) * (-1)

if(total >= valorProduto){
    resultado.innerHTML = `Voce pode fazer a compra e ira sobrar R$${resto}`
    
}else
    resultado.innerHTML = `Voce nao pode comprar o produto, falta R$${(-1*falta).toFixed(2)}`
}
