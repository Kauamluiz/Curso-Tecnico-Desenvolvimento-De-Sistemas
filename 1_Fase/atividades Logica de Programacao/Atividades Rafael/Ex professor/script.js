

function calcularTempo(){
    let minutos, horas, dias, meses, anos
    let resultado = document.getElementById('divTempo')
    let distancia = Number(document.getElementById('inpDistancia').value)
    const velocidade = 300000
    let tempo = distancia / velocidade

    resultado.innerHTML = `Tempo de viagem:<BR>${tempo.toFixed(2)} segundos`

    minutos = tempo / 60
    if(minutos > 1){
        resultado.innerHTML += `<BR>${minutos.toFixed(2)} minutos`
        horas = minutos / 60
        if(horas > 1){
            resultado.innerHTML += `<BR>${horas.toFixed(2)} horas`
            dias = horas / 24
            if(dias > 1) {
                resultado.innerHTML += `<BR>${dias.toFixed(2)} dias`
                meses = dias / 30
                if(meses > 1){
                    resultado.innerHTML += `<BR>${meses.toFixed(2)} meses`
                    anos = meses / 12
                    if(anos > 1){
                        resultado.innerHTML += `<BR>${anos.toFixed(2)} anos`
                    }
                }
            }
        }
    }

}