//>>>>>>>>>>>>>>>>>>> Atividade 3 (4,0) <<<<<<<<<<<<<<<<<<<
//A brincadeira "Acerte os legumes" consiste em acertar uma sequência de legumes (batata, beterraba, mandioca, cebola, pepino) geradas aleatoriamente pelo sistema. Criar um sistema no qual são gerados 3 legumes entre os citados acima e armazenados em um vetor. Em seguida peça para o usuário digitar (um de cada vez) quais legumes ele acha que formam a sequência. Caso acerte todos as legumes na ordem correta, mostrar uma mensagem "Parabéns! Você acertou a sequência". Caso erre algum legume, mostrar uma mensagem "Você não acertou todos os legumes". Ao final, dar opção para o jogador jogar novamente ou não, iniciando uma nova rodada caso responda SIM ou finalizando o programa caso responda NÃO.
//Critérios de avaliação:
//(1,0) Gerar 3 legumes aleatórios e armazenar em um vetor.
//(1,0) Receber os legumes digitadas pelo usuário e comparar com os legumes gerados.
//(1,0) Mostrar uma tela com os legumes gerados, os legumes do usuário e o resultado (ganhou ou perdeu).
//(1,0) Dar opção ao jogador de jogar novamente.

let legumes = ['batata', 'beterraba', 'mandioca', 'cebola', 'pepino']
let jogo = []
let jogadorResp = []
let sort1, sort2, sort3
let resposta, continuar, pontuacao = 0

    while(continuar != 'nao'){
        for(i=0; i < 3; i++){

            sort1 = Math.floor(Math.random() * (5-0) + 0)
            sort2 = Math.floor(Math.random() * (5-0) + 0)
            sort3 = Math.floor(Math.random() * (5-0) + 0)

            switch(true){
                case (sort1 >= 0 && sort1 <= 4):
                    jogo.push(legumes[sort1])
                    break

                case (sort2 >= 0 && sort2 <= 4):
                    jogo.push(legumes[sort2])
                    break

                case (sort3 >= 0 && sort3 <= 4):
                    jogo.push(legumes[sort3])
                    break

            }
            console.log(jogo)

            resposta = prompt("Digite o legume: ")
            jogadorResp.push(resposta)

            if(resposta == jogo[i]){
                pontuacao++
            }

        }
        if(pontuacao == 3){
            alert(`Legumes do jogo: ${jogo}\nLegumes digitados: ${jogadorResp}\nPontuação: ${pontuacao} de 3\nParabens voce ganhou!`)

        }else{
            alert(`Legumes do jogo: ${jogo}\nLegumes digitados: ${jogadorResp}\nPontuação: ${pontuacao} de 3\nVoce perdeu!`)

        }


        continuar = prompt("Deseja jogar novamente ?").toLowerCase()
        jogo = []
        jogadorResp = []
        pontuacao = 0

    }

