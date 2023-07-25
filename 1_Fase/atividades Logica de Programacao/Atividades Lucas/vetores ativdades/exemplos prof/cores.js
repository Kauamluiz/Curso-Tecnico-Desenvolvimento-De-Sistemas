/*Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.*/

let corAdd
let vetorPrimarias = []
let vetorSecundarias = []
let vetorPrimSec = []
let vetorFinal = []

    for(i=0; i < 7; i++){

        if(i < 3){

            corAdd = prompt("Digite uma cor primaria: ")
            vetorPrimarias.push(corAdd)
            vetorPrimSec.push(corAdd)

        }else if(i < 6){

            corAdd = prompt("Digite uma cor secundaria: ")
            vetorSecundarias.push(corAdd)
            vetorPrimSec.push(corAdd)

        }else{

            vetorFinal = vetorPrimarias.concat(vetorSecundarias)

            corAdd = prompt("Adicionar cor no início da lista")
            vetorFinal.unshift(corAdd)

            corAdd = prompt("Adicionar cor no final da lista")
            vetorFinal.push(corAdd)

        }
        
    }

alert(`Vetor Primárias: ${vetorPrimarias}\nVetor Secundárias: ${vetorSecundarias}\nVetor Primárias e Secundárias: ${vetorPrimSec}\n Vetor Final: ${vetorFinal}`)


 
        


