//5) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. (DESAFIO: Mostrar também a quantidade de vezes que cada fruta foi adicionada)

let fruta = []
let addFruta
let correcaoFruta

    while(addFruta != "cereja"){

        addFruta = prompt("Qual fruta adicionar a salada de fruta?").toLowerCase()
        fruta.push(addFruta)

        

    }

    correcaoFruta = fruta.join(' - ')

    alert(`Sua salada de frutas esta pronta!\nFrutas incluidas na salada: ${fruta}`)