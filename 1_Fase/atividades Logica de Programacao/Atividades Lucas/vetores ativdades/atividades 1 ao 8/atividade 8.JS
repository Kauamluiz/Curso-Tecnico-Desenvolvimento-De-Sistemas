//8) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.

let coresPrimarias = []
let coresSecundarias = []
let todasCores = []
let vetorFinal = []
let addCores 

    for(i=0; i < 7; i++){

        if(i < 3){
            addCores = prompt("Digite uma cor primaira: ")
            coresPrimarias.push(addCores)
            todasCores.push(addCores)

        }else if(i < 6){
            addCores = prompt("Digite uma cor secundaria: ")
            coresSecundarias.push(addCores)
            todasCores.push(addCores)

        }else{
            vetorFinal = coresPrimarias.concat(coresSeucundarias)

            addCores = prompt("Adicionar uma cor ao inicio da lista: ")
            vetorFinal.unshift(addCores)

            addCores = prompt("Adicionar uma cor ao final da lista")
            vetorFinal.push(addCores)

        }

    }

    alert(`Vetor Primárias: ${coresPrimarias}\nVetor Secundárias: ${coresSecundarias}\nVetor Primárias e Secundárias: ${todasCores}\n Vetor Final: ${vetorFinal}`)

