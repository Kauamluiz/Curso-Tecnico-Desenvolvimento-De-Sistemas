
let jogadoresClass = []
let pontuacaoJogador = []
let acertosJogador = []
let jogadorNome
let posiVetor = 0

function TabelaTTT(){

    jogadoresClass = JSON.parse(localStorage.getItem('jogadoresClassDif'))
    pontuacaoJogador = JSON.parse(localStorage.getItem('pontosJogadorDif'))
    acertosJogador = JSON.parse(localStorage.getItem('acertosJogadorDif'))

    if(jogadoresClass == null && pontuacaoJogador == null && acertosJogador == null){

    jogadoresClass = []
    pontuacaoJogador = []
    acertosJogador = []

    }else{

    for(i=0; i < jogadoresClass.length; i++){

    document.getElementById('Tabela').innerHTML += `${jogadoresClass[i]} | ${pontuacaoJogador[i]} pontos | ${acertosJogador[i]} de 5 acertos<br>`

    }
    }

}

function Classificar(){

    jogadoresClass = JSON.parse(localStorage.getItem('jogadoresClassDif'))
    pontuacaoJogador = JSON.parse(localStorage.getItem('pontosJogadorDif'))
    acertosJogador = JSON.parse(localStorage.getItem('acertosJogadorDif'))

    if(jogadoresClass == null && pontuacaoJogador == null && acertosJogador == null){

        jogadoresClass = []
        pontuacaoJogador = []
        acertosJogador = []

        let jogadorNome = document.getElementById("nome").value
        document.getElementById('nome').value = ''
        document.getElementById('nome').focus()
        jogadoresClass.push(jogadorNome)
        
        let pontuacao = localStorage.getItem('pontuacao')
        pontuacaoJogador.push(pontuacao)
        
        let acertos = localStorage.getItem('respostasJogador')
        acertosJogador.push(acertos)

        document.getElementById('Tabela').innerHTML = ``

        for(i=0; i < jogadoresClass.length; i++){
        
            localStorage.setItem('jogadoresClassDif', JSON.stringify(jogadoresClass))
            localStorage.setItem('pontosJogadorDif', JSON.stringify(pontuacaoJogador))
            localStorage.setItem('acertosJogadorDif', JSON.stringify(acertosJogador))
            
            document.getElementById('Tabela').innerHTML += `${jogadoresClass[i]} | ${pontuacaoJogador[i]} pontos | ${acertosJogador[i]} de 5 acertos<br>`

        }

    }else{

        let jogadorNome = document.getElementById("nome").value
        document.getElementById('nome').value = ''
        document.getElementById('nome').focus()
        jogadoresClass.push(jogadorNome)

        let pontuacao = localStorage.getItem('pontuacao')
        pontuacaoJogador.push(pontuacao)

        let acertos = localStorage.getItem('respostasJogador')
        acertosJogador.push(acertos)

        document.getElementById('Tabela').innerHTML = ``

        for(i=0; i < jogadoresClass.length; i++){

            localStorage.setItem('jogadoresClassDif', JSON.stringify(jogadoresClass))
            localStorage.setItem('pontosJogadorDif', JSON.stringify(pontuacaoJogador))
            localStorage.setItem('acertosJogadorDif', JSON.stringify(acertosJogador))

            document.getElementById('Tabela').innerHTML += `${jogadoresClass[i]} | ${pontuacaoJogador[i]} pontos | ${acertosJogador[i]} de 5 acertos<br>`

        }

    }
        
}


document.getElementById('nome').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        console.log(event)
        Classificar()
    }
  });



function Voltar(){

    window.open("../../Quiz.HTML", "_self")

}

