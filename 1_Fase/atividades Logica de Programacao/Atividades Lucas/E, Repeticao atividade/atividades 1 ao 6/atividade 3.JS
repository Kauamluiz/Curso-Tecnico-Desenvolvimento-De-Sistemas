//3) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, mostrar a frase “Sua salada de frutas está pronta!”

let fruta

    while(fruta != "cereja"){
        fruta = prompt("Qual fruta adicionar a salada de fruta?").toLowerCase()

        if(fruta == "cereja"){
        
            alert('Sua salada de frutas esta pronta!')
        
            }

    }