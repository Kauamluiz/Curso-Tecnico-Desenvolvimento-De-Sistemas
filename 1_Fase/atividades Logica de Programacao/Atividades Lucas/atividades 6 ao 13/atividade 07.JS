//2)Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação

let base = document.getElementById("num1")
let expoente = document.getElementById("num2")
let expoente5

function Multiplicar(){

    expoente5 = (base.value) ** (expoente.value)

alert(`O resultado é: ${expoente5}`)
}