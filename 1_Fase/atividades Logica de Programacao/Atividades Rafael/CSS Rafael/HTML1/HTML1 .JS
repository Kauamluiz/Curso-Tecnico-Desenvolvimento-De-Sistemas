
function Verificar(){

let valorCompra = Number(document.getElementById('valor').value)
let resultado = document.getElementById('valorVenda')
let valorVenda1

    if(valorCompra < 20){
        valorVenda1 = ((valorCompra / 100) * 45 + valorCompra).toFixed(2)

    }else{
        valorVenda1 = ((valorCompra / 100) * 30 + valorCompra).toFixed(2)
    }
    
    resultado.innerHTML = `O preco de venda sera R$${valorVenda1}`
}