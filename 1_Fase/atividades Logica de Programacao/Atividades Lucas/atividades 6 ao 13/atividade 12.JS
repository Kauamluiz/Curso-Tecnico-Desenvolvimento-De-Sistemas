//7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa. (JS)

let chopp = 300
let pessoas = 45
let choppDesp = Number(prompt('Digite a quantidade de chopp desperdicado'))
let choppSobra = Number(prompt('Digite a quantidade de chopp que sobrou'))

dividir1 = chopp - choppDesp
dividir2 = dividir1 - choppSobra
dividir3 = (dividir2 / pessoas) .toFixed(2)

alert(`Chopp bebido por pessoa: ${dividir3}L\n Chopp desperdicado: ${choppDesp}L\n Chopp que sobrou: ${choppSobra}L`)
