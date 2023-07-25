//1) Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

//eleitores = 15000
alert('Total de eleitores 15000')

let eleitores = Number(prompt('Digite o numero de eleitores'))
let porcentual1 = Number(prompt('Digite a quantidade de votos de Lucas'))
let porcentual2 = Number(prompt('Digite a quantidade de votos de Rafael'))
let porcentual3 = Number(prompt('Digite o numero de votos em branco'))
let porcentual4 = Number(prompt('Digite o numero de votos nulos'))

percX = Number(100 * porcentual1 / eleitores) .toFixed(2)
percY = Number(100 * porcentual2 / eleitores) .toFixed(2)
percVB = Number(100 * porcentual3 / eleitores) .toFixed(2)
percVN = Number(100 * porcentual4 / eleitores).toFixed(2)

alert(`Votos de Lucas: ${percX}%\n Votos de Rafael: ${percY}%\n Votos em branco: ${percVB}%\n Votos nulos: ${percVN}`)