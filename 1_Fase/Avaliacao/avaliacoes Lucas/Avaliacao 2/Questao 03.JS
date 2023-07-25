//Desenvolver a lógica de respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.

// 1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?
// A) Van Helsing (2 pontos)
// B) Castlevania (3 pontos)
// C) The Vampire Diaries (2 pontos)
// D) Blade: The Series (1 ponto)

// 2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?
// A) Alice no País das Maravilhas (4 pontos)
// B) O Hobbit (2 pontos)
// C) A Fantástica Fábrica de Chocolates (4 pontos)
// D) Coraline (3 pontos)

// 3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?
// A) The Legend of Zelda (3 pontos)
// B) Kirby (2 pontos)
// C) Metroid (2 pontos)
// D) Super Mario Bros (4 pontos)

// 4) Quais dos autores citados, representam melhor o gênero de livros de terror?
// A) Stephen King (4 pontos)
// B) Edgar Allan Poe (2 pontos)
// C) H.P. Lovecraft (3 pontos)
// D) Mary Shelley (4 pontos)

// Critérios de avaliação:
// (1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
// (1,0) Validar para que respostas com letra minúscula (a, b, c, d) também somem os pontos.
// (1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
// (1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir "Parabéns!"

let pergunta1, pergunta2, pergunta3, pergunta4, total

// pergunta 1
let A1 = 2, B1 = 3, C1 = 2, D1 = 1

// pergunta 2
let A2 = 4, B2 = 2, C2 = 4, D2 = 3

// pergunta 3
let A3 = 3, B3 = 2, C3 = 2, D3 = 4

// pergunta 4
let A4 = 4, B4 = 2, C4 = 3, D4 = 4

let A = (A1, A2, A3, A4), B = (B1, B2, B3, B4), C = (C1, C2, C3, C4), D = (D1, D2, D3, D4)

    alert('Bem-vindo ao mini-quiz! \n\nEste quiz contem 4 perguntas e 4 alternativas de respostas para cada uma delas onde cada resposta tem uma pontuacao diferente.\nE ao fim do quiz essa pontuacao sera somada e mostrada ao jogador!')

    pergunta1 = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração? \n\nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series') .toUpperCase()


   switch(pergunta1){

        case 'A':
            alert('Voce ganhou 2 pontos')
            break

        case 'B':
            alert('Voce ganhou 3 pontos')
            break

        case 'C':
            alert('Voce ganhou 2 pontos')
            break

        case 'D':
            alert('Voce ganhou 1 pontos')
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
    }


    pergunta2 = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia? \n\nA) Alice no País das Maravilhas \nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates \nD) Coraline') .toUpperCase()


    switch(pergunta2){
        case 'A':
            alert('Voce ganhou 4 pontos')
            break

        case 'B':
            alert('Voce ganhou 2 pontos')
            break

        case 'C':
            alert('Voce ganhou 4 pontos')
            break

        case 'D':
            alert('Voce ganhou 3 pontos')
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
    }


    pergunta3 = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo? \n\nA) The Legend of Zelda \nB) Kirby \nC) Metroid \nD) Super Mario Bros') .toUpperCase()

    
        switch(pergunta3){
        case 'A':
            alert('Voce ganhou 3 pontos')
            break

        case 'B':
            alert('Voce ganhou 2 pontos')
            break

        case 'C':
            alert('Voce ganhou 2 pontos')
            break

        case 'D':
            alert('Voce ganhou 4 pontos')
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
    }


    pergunta4 = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror? \n\nA) Stephen King \nB) Edgar Allan Poe \nC) H.P. Lovecraft \nD) Mary Shelley') .toUpperCase()


    switch(pergunta4){
        case 'A':
            alert('Voce ganhou 4 pontos')
            break

        case 'B':
            alert('Voce ganhou 2 pontos')
            break

        case 'C':
            alert('Voce ganhou 3 pontos')
            break

        case 'D':
            alert('Voce ganhou 4 pontos')
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
    }


total = (pergunta1 = A1 || B1 || C1 || D1) + (pergunta2 = A2 || B2 || C2 || D2) + (pergunta3 = A3 || B3 || C3 || D3) + (pergunta4 = A4 || B4 || C4 || D4)
        
    switch(true){
        case (total < 15):
            alert(`Voce ganhou ${total} pontos`)
            break

        case (total == 15):
            alert(`Parabens! Voce ganhou ${total} pontos`)
            break

    }