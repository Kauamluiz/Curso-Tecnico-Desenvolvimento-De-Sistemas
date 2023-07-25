//3) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nome = prompt('Digite o seu nome') .toLowerCase()
let idade = Number(prompt('Digite a sua idade'))
let comorbidade = prompt('Voce possui comorbidades ?') .toLowerCase()

    if(comorbidade == 'sim')

        alert('Voce pode se vacinar!')

    else if(idade > 60)

        alert('Voce pode se vacinar!')


    else if(idade < 60)

        alert('Voce nao pode se vacinar')

