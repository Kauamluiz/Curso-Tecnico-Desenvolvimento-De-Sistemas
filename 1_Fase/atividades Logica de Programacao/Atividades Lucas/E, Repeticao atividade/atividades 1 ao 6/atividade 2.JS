//2) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas. (DESAFIO: Mostrar na tela também o nome da pessoa com maior idade)

let nome, nomeMaisVelho, idade, media, idadeMedia
let CalcIdade = 0
let maiorIdade = 0
let quantidade = 5

    for(i=0; i < quantidade; i++){

        nome = prompt("digite um nome: ")
        idade = Number(prompt("Digite uma idade: "))

            CalcIdade = CalcIdade + idade

        if(idade > maiorIdade){
            maiorIdade = idade 
            nomeMaisVelho = nome

        }
    }
    idadeMedia = (CalcIdade / 5).toFixed(0)

    alert(`Maior idade: ${maiorIdade}\nNome: ${nomeMaisVelho} \nMedia de idade das pessoas presentes: ${idadeMedia}`)