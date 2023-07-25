//6) Desenvolva um programa no qual o usuário deve digitar o nome e a idade de 5 pessoas. Ao final mostrar a média de idade delas e a maior idade dentre essas pessoas.

let nome1 , nome2 , nome3 , nome4, nome5
let idade1 , idade2 , idade3 , idade4 , idadae5
let idadeMedia , maiorIdade

nome1 = prompt('Digite o seu nome da 1.pessoa')
idade1 = Number(prompt('Digite a idade da 1.pessoa'))
nome2 = prompt('Digite o seu nome da 2.pessoa')
idade2 = Number(prompt('Digite a idade da 2.pessoa'))
nome3 = prompt('Digite o seu nome da 3.pessoa')
idade3 = Number(prompt('Digite a idade da 3.pessoa'))
nome4 = prompt('Digite o seu nome da 4.pessoa')
idade4 = Number(prompt('Digite a idade da 4.pessoa'))
nome5 = prompt('Digite o seu nome da 5.pessoa')
idade5 = Number(prompt('Digite a idade da 5.pessoa'))
idadeMedia
maiorIdade

    idadeMedia = ((idade1 + idade2 + idade3 + idade4 + idade5) / 5) .toFixed()

    if(idade1 > maiorIdade)
    if(idade2 > maiorIdade)
    if(idade3 > maiorIdade)
       

    alert(`A idade media das pessoas é: ${idadeMedia} anos\n A pessoa que possui maior idade é: ${maiorIdade}`)

