let perguntasFeitas = []
let vezes = 0
let pontuacao = 0
let corretos = ["Alternativa C: Brasil.\n\nFrancisco Canhos é o nome do homem que, na década de 40, desenvolveu o primeiro chuveiro elétrico seguro em Jaú-SP. O aparelho vinha sendo desenvolvido desde os anos 30, mas apresentava riscos de curto-circuito.", "Alternativa A: Vaticano e Rússia.\n\nO Vaticano, sede da igreja católica, tem apenas 44 hectares (0,44 km2). A Rússia, localizada em dois continentes (Ásia e Europa), tem 17 milhões de km2.", "Alternativa B: Asterisco, beneficente, meteorologia, entretido.\n\nEstas palavras são exemplos de barbarismo, um vício de linguagem em que as palavras são pronunciadas ou escritas incorretamente.", "Alternativa B: Dom Quixote.\n\nDom Quixote, de Miguel de Cervantes, é um clássico da literatura espanhola. A obra foi escrita em duas partes, uma em 1605, e a outra em 1615.", "Alternativa A: Japão e Serra Leoa.\n\nNo Japão, a expectativa de vida é em média 84 anos, enquanto na Serra Leoa é 53 anos.", "Alternativa D: Lenda.\n\nLegend, que parece significar “legenda”, faz parte do grupo dos falsos cognatos. Falsos cognatos são palavras de línguas distintas que apresentam semelhanças na grafia e/ou na pronúncia, mas cujos significados são diferentes. Outros exemplos são: costume, que significa fantasia, e to push, que significa empurrar.", "Alternativa E: 7.\n\nUma partida de futebol conta com o número máximo de 11 jogadores e mínimo de 7, contando com o goleiro, em cada equipe.", "Alternativa B: Proclamação da República e Dia Nacional da Consciência Negra.\n\nA Proclamação da República é comemorada no dia 15 de novembro, data em que Marechal Deodoro da Fonseca proclamou a república em 1889.\n\nO Dia Nacional da Consciência Negra é comemorado no dia 20 de novembro, data em que Zumbi dos Palmares morreu, em 1695.", "Alternativa E: 2,43 m e 2,24 m.\n\nAntigamente, a altura era de 1,98 m. Atualmente é 2,43 m para jogadores adultos masculinos e 2,24 m para jogadores adultos femininos. A altura da rede também varia de acordo com a idade dos jogadores."]
let respostas = ["C", "A",  "B",  "B", "A", "D", "E", "B", "E"]
let perguntas = ["De onde é a invenção do chuveiro elétrico? <br>A) França<br>B) Inglaterra<br>C) Brasil<br>D) Austrália<br>E) Itália", "Quais o menor e o maior país do mundo?<br>A) Vaticano e Rússia<br>B) Nauru e China<br>C) Mônaco e Canadá<br>D) Malta e Estados Unidos<br>E) São Marino e Índia", "Qual o grupo em que todas as palavras foram escritas corretamente?<br>A) Asterístico, beneficiente, meteorologia, entertido<br>B) Asterisco, beneficente, meteorologia, entretido<br>C) Asterisco, beneficente, metereologia, entretido<br>D) Asterístico, beneficiente, metereologia, entretido<br>E) Asterisco, beneficiente, metereologia, entretido", "Qual o livro mais vendido no mundo a seguir da Bíblia?<br>A) O Senhor dos Anéis<br>B) Dom Quixote<br>C) O Pequeno Príncipe<br>D) Ela, a Feiticeira<BR>E) Um Conto de Duas Cidades", "Quais os países que têm a maior e a menor expectativa de vida do mundo?<br>A) Japão e Serra Leoa<br>B) Austrália e Afeganistão<br>C) Itália e Chade<br>D) Brasil e Congo<br>E) Estados Unidos e Angola", "O que a palavra legend significa em português?<br>A) Legenda<br>B) Conto<br>C) História<br>D) Lenda<br>E) Legendário", "Qual o número mínimo de jogadores em cada time numa partida de futebol?<br>A) 8<br>B) 10<br>C) 9<br>D) 5<br>E) 7", "Quais das alternativas são duas das datas comemoradas em novembro?<br>A) Independência do Brasil e Dia da Bandeira<br>B) Proclamação da República e Dia Nacional da Consciência Negra<br>C) Dia do Médico e Dia de São Lucas<br>D) Dia de Finados e Dia Nacional do Livro<br>E) Black Friday e Dia da Árvore", "Qual a altura da rede de vôlei nos jogos masculino e feminino?<br>A) 2,4 para ambos<br>B) 2,5 m e 2,0 m<br>C) 1,8 m e 1,5 m<br>D) 2,45 m e 2,15 m<br>E) 2,43 m e 2,24 m"]
let posi
let acertos = 0

facilHEHEHE()
function facilHEHEHE(){
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
        localStorage.setItem('pontuacao', pontuacao) //****
        localStorage.setItem('respostasJogador', acertos) //****

        window.open("../tabela/Tabela facil/Tab facil.HTML", "_self")
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


  facilHEHEHE()

}

document.getElementById('resposta').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        console.log(event)
        verificarResposta()
    }
  });