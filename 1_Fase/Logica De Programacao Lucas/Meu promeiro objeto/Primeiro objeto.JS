
/////////////////////////////////////////////////// Objeto padrao ///////////////////////////////////////////////////

let filme = {

    titulo: 'Titanic',
    ano: 1998,
    diretor: 'James Cameron'

}

//Criar propriedade
filme.pais = 'EUA'

//Trocar propriedade
filme.diretor = 'Pedro Almodovar'

//Deletar propriedade
delete filme.ano

alert(Object.values(filme))

/////////////////////////////////////////////////// vetor de objetos ///////////////////////////////////////////////////

let carros = []

let marcaAdd, anoAdd, corAdd

    for(i=0; i < 3; i++){

        let carroObj = {

            marca: '',
            ano: '',
            cor: ''
        
        }

        marcaAdd = prompt("Digite a marca: ")
        carroObj.marca = marcaAdd
        
        anoAdd = Number(prompt("Digite o ano: "))
        carroObj.ano = anoAdd


        corAdd = prompt("Digite a cor: ")
        carroObj.cor = corAdd

        carros.push(carroObj)

    }

    console.log(carros)
