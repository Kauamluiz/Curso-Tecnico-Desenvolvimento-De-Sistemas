let carros = []

let marcaAdd, anoAdd, corAdd

    for(i=0; i< 3; i++){

        let carroObj = {

            marca: '',
            ano: '',
            cor: ''

        } 

        marcaAdd = prompt("Digite a marca: ")
        carroObj.marca = marcaAdd

        anoAdd = prompt("Digite a marca: ")
        carroObj.ano = anoAdd

        corAdd = prompt("Digite a marca: ")
        carroObj.cor = corAdd

        carros.push(carroObj)

    }

console.log(carros)