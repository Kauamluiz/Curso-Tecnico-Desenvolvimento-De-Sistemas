// 4) Criar um programa que realize o cálculo de uma média da faculdade. A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1), Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela. (HTML + JS) -->

let inputUm = document.getElementById("num1")
let inputDois = document.getElementById("num2")
let inputTres = document.getElementById("num3")

function SomaNumeros(){
    
    soma = Number(inputUm.value) + Number(inputDois.value) + Number(inputTres.value)
    dividir = (soma / 5) .toFixed(2)

    alert(`Sua media é: ${dividir}`)
}