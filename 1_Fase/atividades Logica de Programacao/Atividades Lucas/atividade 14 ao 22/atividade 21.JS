//8) Elaborar um programa que alerte sobre os riscos de animais em extinção. O usuário deve digitar o nome da espécie e a sua população (total de indivíduos). Populações entre 200 e 500 indivíduos, são classificadas como "Espécie criticamente em perigo", populações entre 500 e 1000 indivíduos, são classificadas como "Espécie em perigo" e populações entre 1000 e 5000 indivíduos, são classificadas como "Espécie vulnerável!"

let especieAnimal = 'boto rosa'
let populacaoEspecie

    especieAnimal = prompt('Digite o nome da especie').toLowerCase()
    populacaoEspecie = Number(prompt('Digite quantos individuos tem a especie'))

    if(populacaoEspecie >= 200 && populacaoEspecie <= 500){
        alert('Especie criticamente em perigo!')

    }else if( populacaoEspecie >= 501 && populacaoEspecie <= 1000){
        alert('Especie em perigo!')

    }else if(populacaoEspecie >= 1001 && populacaoEspecie <= 5000){
        alert('Especie vulneravel!')

    }else
        alert('especie em condicoes normais')
  