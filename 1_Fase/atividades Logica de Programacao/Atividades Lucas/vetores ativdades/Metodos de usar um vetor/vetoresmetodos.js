////////////////////////////////////////// Metodo concat() //////////////////////////////////////////
// junta vetores sem ordenar

//                 0           1             2
let nomesUm = ['Cleitom', 'Uerverssom', 'Romarinho']
let nomesDois = ['Maria', 'Pedro', 'Jomerilsom']
let nomesTres = 12
let nomeQuatro = []

    nomeQuatro = nomesUm.concat(nomesDois, nomesTres)
    alert(nomeQuatro)





////////////////////////////////////////// Metodo join() ///////////////////////////////////////////
// melhora a aparencia dos elementos

//            0      1       2       3       4
let pets = ['Dog', 'Cat', 'Bird', 'Fish', 'Bear']
let petsBonito

    petsBonito = pets.join(' - ')

    alert(petsBonito)
    //dog - cat - bird...




/////////////////////////////////////////// Metodo fill() ///////////////////////////////////////////
//troca elementos

//             0      1       2       3      4       5
let pets1 = ['Dog', 'Cat', 'Bird', 'Deer', 'Fox', 'Fish']

    alert(pets1.fill('bee', 2, 4))
    //dog, cat, bee, bee, fox, fish




//////////////////////////////////////////  Metodo includes() ////////////////////////////////////////
// pesquisa elementos

//            0      1       2      3
let cars = ['Gol', 'Fox', 'Polo','Kwid']

    cars.includes('kwid')
    //true

    cars.includes('fusca')
    //false





/////////////////////////////////////////// Metode slice() ///////////////////////////////////////////
// corta um pedaco do vetor

//             0    1    2    3    5
let letras = ['A', 'B', 'C', 'D', 'E']
let sliced

    sliced = letras.slice(1, 4)
    //corta um pedaco do vetor

    alert(letras)
    alert(sliced)





////////////////////////////////////////// Metode splice() //////////////////////////////////////////
// remover e editar elementos

//              0         1        2       3         4
let users = ['Lucas', 'Tyfanny', 'Ana', 'Carla', 'Bruno']
let userEdit, userPos, userNew

// REMOVER !!!!!!!
    userEdit = prompt("Qual user deseja editar ? ")
    userPos = users.indexOf(userEdit)

    users.splice(userPos, 1)
    // remover elemento

// EDITAR !!!!!!!!
    userNew = prompt("Qual o novo user: ? ")
    users.splice(userPos, 1, userNew)
    // metodo editar elemento 1

    users[userPos] = userNew
    // metodo editar elemento 2

    alert(users)





////////////////////////////////////////// Metode sort() /////////////////////////////////////////////
// ordena os elementos pelo primeiro caracter

// numeros
//             0  1  2  3  4  5 
let numbers = [1, 4, 2, 8, 6, 9, 10, 22, 43]

    numbers.sort(compareNumbers)
    // ordena pelo caracter

    alert(numbers)

function compareNumbers(a, b) {

        return a - b;

}
// function para ordenar corretamente o elemento


// palavras
//             0       1       2        3         4
let cores = ['Red', 'Blue', 'Green', 'Yellow', 'Brown']

    cores.sort()





////////////////////////////////////////// Metode map() //////////////////////////////////////////////
// encontra elementos e realiza contas matematicas

//              0  1  2  3
let inteiros = [2, 4, 6, 9]

    inteiros.map(resto)
    // mapeia o vetor e retorna os resultados

function resto(num){

    return num % 2

}
// function dos calculos





////////////////////////////////////////// Metode filter() ///////////////////////////////////////////
// filtra os elementos

let palavras = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let resultado = palavras.filter(word => word.length > 6);
// retorna os elementos que passam do filter ["exuberant", "destruction", "present"]

console.log(resultado);

