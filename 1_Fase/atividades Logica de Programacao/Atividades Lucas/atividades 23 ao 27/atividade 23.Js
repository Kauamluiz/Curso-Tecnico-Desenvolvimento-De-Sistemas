//1) Fazer um programa onde o usuário pode acessar as seguintes opções:
//A) Falar com a atendente B) Falar com o RH
//C) Falar com o gerente D) Sair
//Mostrar mensagens para cada opção!
//(DESAFIO: Fazer voltar para o menu quando digitar A, B ou C)


let opcao
    

    opcao = prompt('>>>Digite a opcao desejada<<<\nGostaria de falor com:\n A) Atendente\n B) RH\n C) Gerente\n D) Sair').toUpperCase()

    switch(opcao){

        case 'A':
            alert('Atendente: Boa noite, em que eu poderia te ajudar ?')
            break        

        case 'B':
            alert('RH: Boa noite, em que eu poderia te ajudar ?')
            break

        case 'C':
            alert('Gerente: Boa noite, em que eu poderia te ajudar ?')
            break

        case 'D':
            alert('Tenha uma boa noite')
    }