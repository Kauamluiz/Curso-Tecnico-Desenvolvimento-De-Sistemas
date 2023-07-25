    let inputUm = document.getElementById("A")
    let inputDois = document.getElementById("B")
    let somaNumeros

function SomaNumeros() {

    somaNumeros = (Number(inputUm.value) + Number(inputDois.value)) .toFixed(1)
    alert(`X = ${somaNumeros}`)

}