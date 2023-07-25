
function Calcular(){

let conceito
let nota1 = Number(document.getElementById('nota1').value)
let nota2 = Number(document.getElementById('nota2').value)
let resultado = document.getElementById('media')
let notaTotal = ((nota1 + nota2) / 2).toFixed(1)

    switch(true){
        case notaTotal > 9 && notaTotal <= 10:
            conceito = "A"
            break

        case notaTotal > 7.5 && notaTotal <= 9:
            conceito = "B"
            break

        case notaTotal > 6 && notaTotal <= 7.5:
            conceito = "C"
            break

        case notaTotal > 4 && notaTotal <= 6:
            conceito = "D"
            break

        case notaTotal >= 0 && notaTotal <= 4:
            conceito = "E"
            break
    }

    resultado.innerHTML = `Primeira nota: ${nota1}<br>Segunda nota: ${nota2}<br>Media: ${notaTotal}<br>Conceito: ${conceito}`

}
