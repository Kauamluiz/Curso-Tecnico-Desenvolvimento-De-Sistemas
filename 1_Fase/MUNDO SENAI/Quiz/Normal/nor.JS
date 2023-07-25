let perguntasFeitas = []
let vezes = 0
let pontuacao = 0
let corretos = ["Alternativa A: Estátua da Liberdade, Golden Gate Bridge e Empire State Building.\n\nA Estátua da Liberdade, localizada na Ilha da Liberdade em Manhattan, Nova York, pode ser vista de vários locais, graças a sua altura, que é de 92,99 metros.\nGolden Gate Bridge, localizada em São Francisco, na Califórnia, é o principal cartão postal da cidade.\nEmpire State Building, localizada em Manhattan, Nova York, mais precisamente na Quinta Avenida, é um arranha-céu de 102 andares.", "Alternativa C: Gonorreia, clamídia e sífilis.\n\nGonorreia e clamídia são infecções sexualmente transmissíveis (IST) causadas por bactérias, que podem atingir além dos órgãos genitais, a garganta e os olhos.\nSífilis também é uma infecção sexualmente transmissível, cujo principal sintoma é uma ferida no pênis, vulva, vagina, colo uterino, ânus, boca, ou outros locais da pele.", "Alternativa E: Antônio Francisco Lisboa.\n\nAleijadinho (1730-1814), apelido de Antônio Francisco Lisboa, foi um dos maiores representantes do barroco brasileiro. Recebeu essa alcunha pois foi acometido por uma doença que deformou sua mãos e pés. No entanto, mesmo nessas condições, continuou trabalhando como escultor, entalhador, carpinteiro e arquiteto.", "Alternativa C: Elefante africano.\n\nO elefante africano é o maior animal terrestre. Ele pode medir até 4 metros de altura e 7 de comprimento. Seu peso pode chegar até 8 toneladas.", "Alternativa E: Neil Armstrong, em 1969.\n\nNeil Armstrong (1930-2012) foi um engenheiro e astronauta, sendo o primeiro homem a pisar na lua em 1969 na missão Apollo 11, ao lado dos astronautas: Michael Collins e Edwin 'Buzz' Aldrian.", "Alternativa C: Tipo O.\n\nNo Sistema ABO, existem quatro tipos sanguíneos: A, B, AB e O. O sangue O doa para todos os outros tipos (A,B,AB e O), entretanto, somente recebe de O. Por isso, ele é considerado o doador universal.", "Alternativa C: Os Y.\n\nOs cromossomos sexuais são dois: o “X” é o cromossomo feminino e “Y”, o cromossomo masculino.", "Alternativa E: o dióxido de carbono.\n\nO dióxido de carbono (CO2), popularmente chamado de gás carbônico, é uma molécula composta por um átomo de carbono (C) e dois de oxigênio (O). As plantas absorvem dióxido de carbono (CO2) do ar e o transformam no processo de fotossíntese. Já os animais, inspiram oxigênio (O2) e expiram dióxido de carbono (CO2)."]
let respostas = ["A", "C", "E", "C", "E", "C", "C", "E"]
let perguntas = ["Quais destas construções famosas ficam nos Estados Unidos?<br>A) Estátua da Liberdade, Golden Gate Bridge e Empire State Building<br>B) Estátua da Liberdade, Big Ben e The High Line<br>C) Angkor Wat, Taj Mahal e Skywalk no Grand Canyon<br>D) Lincoln Memorial, Sidney Opera House e Burj Khalifa<br>E) 30 St Mary Axe, The High Line e Residencial 148 Spruce Street", "Quais destas doenças são sexualmente transmissíveis?<br>A) Aids, tricomoníase e ebola<br>B) Chikungunya, aids e herpes genital<br>C) Gonorreia, clamídia e sífilis<br>D) Botulismo, cistite e gonorreia<br>E) Hepatite B, febre tifoide e hanseníase", "Qual era o nome de Aleijadinho?<br>A) Alexandrino Francisco Lisboa<br>B) Manuel Francisco Lisboa<br>C) Alex Francisco Lisboa<br>D) Francisco Antônio Lisboa<br>E) Antônio Francisco Lisboa", "Qual o maior animal terrestre?<br>A) Baleia Azul<br>B) Dinossauro<br>C) Elefante africano<br>D) Tubarão Branco<br>E) Girafa", "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?<br>A) Yuri Gagarin, em 1961<br>B) Buzz Aldrin, em 1969<br>C) Charles Conrad, em 1969<br>D) Charles Duke, em 1971<br>E) Neil Armstrong, em 1969.", "As pessoas de qual tipo sanguíneo são consideradas doadores universais?<br>A) Tipo A<br>B) Tipo B<br>C) Tipo O<br>D) Tipo AB<br>E) Tipo ABO", "Quais são os cromossomos que determinam o sexo masculino?<br>A) Os cromossomos V<br>B) Os cromossomos X<br>C) Os cromossomos Y<br>D) Os cromossomos W<br>E) Os cromossomos Z", "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?<br>A) o oxigênio<br>B) o nitrogênio<br>C) o nitrato de sódio<br>D) o dióxido de ferro<br>E) o dióxido de carbono"]
let posi
let acertos = 0

normalHUM()
function normalHUM(){
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

        window.open("../tabela/Tabela normal/Tab normal.HTML", "_self")
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


  normalHUM()

}

document.getElementById('resposta').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        console.log(event)
        verificarResposta()
    }
  });