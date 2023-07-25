//             0  1  2  3  4
let numeros = [7, 3, 8, 7, 9]
let idades = []
let nomes = []
//              0       1       2
let carros = ['Fox', 'Kiwd', 'Opala']
let addNumero, addIdade

    nomes.push('Lucas', 'Abgail', 'Ermenegildo')
    alert(nomes)
    carros.push('Gol')
    alert(carros)

    for(i=0; i < 5; i++){

        addIdade = Number(prompt("Idade:: "))
        idades.push(addIdade)    
        
    }

idades.shift()
// idades.pop()
alert(idades)

    
// addNumero = Number(prompt("Numero a adicionar?"))
// numeros.push(addNumero)

// alert(numeros)
// alert(numeros[0] + numeros[2])
// alert(numeros[0] + numeros[numeros.length-1])
// alert(numeros.length)






