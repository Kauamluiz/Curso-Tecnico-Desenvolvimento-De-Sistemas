//6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. (JS)

//plastico = 2 / 10
//papel = 3 /30 
//metal = 5 / 50

let plastico = Number(prompt('Digite a qultidade de plastico em kg'))
let papel = Number(prompt('Digite a quantidade de papel em kg'))
let metal = Number(prompt('Digite a quantidade de metal em kg'))


mult1 = plastico * 0.2
mult2 = papel * 0.1
mult3 = metal * 0.1
soma = (mult1 + mult2 + mult3) .toFixed(2)

alert(`Voce ira um total de: R$${soma}`)
