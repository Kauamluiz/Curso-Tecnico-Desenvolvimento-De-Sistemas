//5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula. (HTML + JS)

let inputUm = document.getElementById("num1")
let inputDois = document.getElementById("num2")

function IMC(){

    imc = (Number(inputUm.value) / Number(inputDois.value) * Number(inputDois.value)) .toFixed(2)

alert(`O seu IMC é: ${imc}`)
}