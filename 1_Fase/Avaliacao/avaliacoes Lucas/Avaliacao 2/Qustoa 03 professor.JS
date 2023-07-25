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

let pergunta1, pergunta2, pergunta3, pergunta4
let somaPontos = 0

    alert('Bem-vindo ao mini-quiz! \n\nEste quiz contem 4 perguntas e 4 alternativas de respostas para cada uma delas onde cada resposta tem uma pontuacao diferente.\nE ao fim do quiz essa pontuacao sera somada e mostrada ao jogador!')

pergunta1 = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração? \n\nA) Van Helsing \nB) Castlevania \nC) The Vampire Diaries \nD) Blade: The Series') .toUpperCase()


   switch(pergunta1){

        case 'A':
            somaPontos = somaPontos + 2
            break

        case 'B':
            somaPontos = somaPontos + 3
            break

        case 'C':
            somaPontos = somaPontos + 2
            break

        case 'D':
            somaPontos = somaPontos + 1
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
            break
   }

pergunta2 = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia? \n\nA) Alice no País das Maravilhas \nB) O Hobbit \nC) A Fantástica Fábrica de Chocolates \nD) Coraline') .toUpperCase()

   switch(pergunta2){

        case 'A':
            somaPontos = somaPontos + 4
            break

        case 'B':
            somaPontos = somaPontos + 2
            break

        case 'C':
            somaPontos = somaPontos + 4
            break

        case 'D':
            somaPontos = somaPontos + 3
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
            break
    }

pergunta3 = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo? \n\nA) The Legend of Zelda \nB) Kirby \nC) Metroid \nD) Super Mario Bros') .toUpperCase()

    switch(pergunta3){

        case 'A':
            somaPontos = somaPontos + 3
            break

        case 'B':
            somaPontos = somaPontos + 2
            break

        case 'C':
            somaPontos = somaPontos + 2
            break

        case 'D':
            somaPontos = somaPontos + 4
            break

        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
            break
    }

pergunta4 = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror? \n\nA) Stephen King \nB) Edgar Allan Poe \nC) H.P. Lovecraft \nD) Mary Shelley') .toUpperCase()

    switch(pergunta4){

        case 'A':
            somaPontos = somaPontos + 4
            break
    
        case 'B':
            somaPontos = somaPontos + 2
            break
    
        case 'C':
            somaPontos = somaPontos + 3
            break
    
        case 'D':
            somaPontos = somaPontos + 4
            break
    
        default:
            alert('nenhuma alternativa selecionada! voce ganhou 0 pontos')
            break
    }

    if(somaPontos < 15){
        alert(`Voce ganhou ${somaPontos} pontos!`)

    }else
        alert(`Voce ganhou ${somaPontos} pontos, Parabens!`)
