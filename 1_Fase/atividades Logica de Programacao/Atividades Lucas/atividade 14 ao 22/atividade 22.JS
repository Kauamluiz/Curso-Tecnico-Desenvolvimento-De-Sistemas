//9) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (metros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let populacao, area, densidadeDemog

    populacao = Number(prompt('Digite o numero da populacao'))
    area = Number(prompt('Digite a area em metros quadrados'))

    densidadeDemog = populacao / area

    if(densidadeDemog >= 100){
        alert('Densidade demografica alta')

    }if(densidadeDemog >= 25 && densidadeDemog <=99){
        alert('Densidade demografica media')

    }if(densidadeDemog < 25){
        alert('Densidade demografica baixa')

    }