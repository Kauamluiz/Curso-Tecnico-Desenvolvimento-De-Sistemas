// 3) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas por ambos, lista com todas doenças.

let quant, addDoenças, transmitida
let doenças = []
let dVirus = []
let dBacteria = []
let dAmbos = []

    quant = Number(prompt("Digite o numeros de doenças a cadastrar:"))

    for(i=0; i < quant; i++){

        addDoenças = prompt("digite o nome da doença:")
        doenças.push(addDoenças)

        transmitida = prompt("A doença é transmitida por virus, bacteria ou ambas?").toLowerCase()
        switch(transmitida){
            case 'virus':
                dVirus.push(addDoenças)
                break
            
            case 'bacteria':
                dBacteria.push(addDoenças)
                break
            
            case 'ambas':
                dAmbos.push(addDoenças)
                break
        }
        

    }
    alert(`Doenças transmitidas por virus: ${dVirus}\nDoenças transmitidas por bactérias: ${dBacteria}\nDoenças transmitidas por ambas: ${dAmbos}\nDoenças listadas: ${doenças}`)