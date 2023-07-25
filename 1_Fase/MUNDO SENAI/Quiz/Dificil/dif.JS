let perguntasFeitas = []
let vezes = 0
let pontuacao = 0
let corretos = ["Alternativa A: Oceano Índico.\n\nMadagascar é um país insular banhado pelo Oceano Índico. Localizado no sudeste da África, sua capital é Antananarivo.", "Alternativa B: Entre 4 a 6 litros. São retirados 450 mililitros.\n\nA quantidade de sangue varia de pessoa para pessoa. O volume de sangue é entre 7% e 8% o peso corporal. Assim, um adulto com 50 e 80 quilos, pode ter entre 4 e 6 litros de sangue, respectivamente.\nPortanto, 4 a 6 litros é a alternativa que compreende a quantidade mais próxima de adultos com pesos diferentes.", "Alternativa D: 118.\n\nOs últimos elementos foram adicionados à tabela periódica em 2016. Eles são: 113 (Nihônio), 115 (Moscóvio), 117 (Tenessino) e 118 (Oganessônio).", "Alternativa C: Hiena, urso branco e lobo cinzento.\n\nA hiena é o único animal que enfrenta o leão, atacando-o quando estão em grupo. Enquanto isso, o urso branco, ou urso polar, se camufla entre o gelo do Ártico. O lobo cinzento, por sua vez, tem excelentes audição e visão noturna, características que fazem dele grandes caçadores.", "Alternativa E: Dalton, Thomson, Rutherford, Rutherford-Bohr.\n\nAo logo dos tempos, os modelos atômicos evoluíram. O Modelo atômico de Dalton foi proposto em 1803. Em 1898 foi a vez de Thomson apresentar o seu modelo. Em 1911, Rutherford mostrou a sua proposta. Pouco depois, baseado no modelo de Rutherford, o cientista Niels Bohr aprimorou um modelo que apresentou em 1913, o Modelo atômico de Rutherford-Bohr.", "Alternativa E: Substantivo, verbo e preposição.\n\nClasses de palavras são palavras que se organizam de acordo com as suas funções na língua portuguesa. Existem 10 classes de palavras: substantivo, verbo, preposição, adjetivo, pronome, artigo, numeral, conjunção, interjeição e advérbio.", "Alternativa D: 299 792 458 metros por segundo (m/s).\n\nA primeira medição real da luz foi feita pelo astrônomo Ole Romer, que em 1676 chegou a um número próximo da velocidade da luz. Hoje, sabe-se com precisão que a velocidade da luz é 299 792 458 metros por segundo.", "Alternativa D: Macau.\n\nMacau tem duas línguas oficiais, mandarim e português. Macau, uma região especial da China, foi território português até 1999.", "Alternativa E: João Goulart.\n\nJoão Belchior Marques Goulart (1919-1976) foi o 24º presidente do Brasil, cujo período de governo compreende os anos de 1961 a 1964."]
let respostas = ["A", "B", "D", "C", "E", "E", "D", "D", "E"]
let perguntas = ["Em que oceano fica Madagascar?<br>A) Oceano Índico<br>B) Oceano Antártico<br>C) Oceano Atlântico<br>D) Oceano Pacífico<br>E) Oceano Ártico", "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?<br>A) Tem entre 2 a 4 litros. São retirados 450 mililitros<br>B) Tem entre 4 a 6 litros. São retirados 450 mililitros<br>C) Tem 10 litros. São retirados 2 litros<br>D) Tem 7 litros. São retirados 1,5 litros<br>E) Tem 0,5 litros. São retirados 0,5 litros", "Atualmente, quantos elementos químicos a tabela periódica possui?<br>A) 113<br>B) 109<br>C) 108<br>D) 118<br>E) 92", "Quais são os três predadores do reino animal reconhecidos pela habilidade de caçar<br> em grupo, se camuflar para surpreender as presas e possuir sentidos apurados, respectivamente:<br>A) Tubarão branco, crocodilo e sucuri<br>B) Tigre, gavião e orca<br>C) Hiena, urso branco e lobo cinzento<br>D) Orca, onça e tarântula<br>E) Leão, tubarão branco e urso cinzento", "Em que ordem surgiram os modelos atômicos?<br>A) Thomson, Dalton, Rutherford, Rutherford-Bohr<br>B) Rutherford-Bohr, Rutherford, Thomson, Dalton<br>C) Dalton, Rutherford-Bohr, Thomson, Rutherford<br>D) Dalton, Thomson, Rutherford-Bohr, Rutherford<br>E) Dalton, Thomson, Rutherford, Rutherford-Bohr", "Qual das alternativas abaixo contém apenas classes de palavras?<br>A) Vogais, semivogais e consoantes<br>B) Artigo, verbo transitivo e verbo intransitivo<br>C) Fonologia, Morfologia e Sintaxe<br>D) Hiatos, ditongos e tritongos<br>E) Substantivo, verbo e preposição", "Qual a velocidade da luz?<br>A) 300 000 000 metros por segundo (m/s)<br>B) 150 000 000 metros por segundo (m/s)<br>C) 199 792 458 metros por segundo (m/s)<br>D) 299 792 458 metros por segundo (m/s)<br>E) 30 000 000 metros por segundo (m/s)", "Em qual local da Ásia o português é língua oficial?<br>A) Índia<br>B) Filipinas<br>C) Moçambique<br>D) Macau<br>E) Portugall", "Qual o nome do presidente do Brasil que ficou conhecido como Jango?<br>A) Jânio Quadros<br>B) Jacinto Anjos<br>C) Getúlio Vargas<br>D) João Figueiredo<br>E) João Goulart",]
let posi
let acertos = 0

dificilAIAI()
function dificilAIAI(){
    document.getElementById('resposta').focus()

    if(vezes <= 4){

    do{

    sortPergunta = Math.floor(Math.random() * (perguntas.length - 0) + 0)
    posi = sortPergunta
    
    }while(perguntasFeitas.includes(posi))
    perguntasFeitas.push(posi)


    document.getElementById("pergunta").innerHTML = `${perguntas[posi]}`
    vezes++
    
    }else{
        window.open("../tabela/Tabela dificil/Tab dificil.HTML", "_self")
        perguntasFeitas = []
        vezes = 0
    }

}

function verificarResposta(){

let jogador = document.getElementById("resposta").value
document.getElementById('resposta').value = ''
document.getElementById('resposta').focus()



    if((jogador).toUpperCase() == respostas[posi]){
        pontuacao = pontuacao + 3
        acertos++

    }else{
        if(pontuacao > 0){
            pontuacao = pontuacao - 1
        }
        alert(`${corretos[posi]}`)
    }

    localStorage.setItem('pontuacao', pontuacao) //****
    localStorage.setItem('respostasJogador', acertos) //****
    console.log(pontuacao)


  dificilAIAI()

}

document.getElementById('resposta').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        console.log(event)
        verificarResposta()
    }
  });


