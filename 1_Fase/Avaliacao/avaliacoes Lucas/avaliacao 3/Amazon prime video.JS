//>>>>>>>>>>>>>>>>>>> Atividade 2 (4,0) <<<<<<<<<<<<<<<<<<<
//O Amazon Prime Video, possui um sistema de pesquisa no seu catálogo que armazena as últimas buscas do usuário. Esse sistema armazena em um histórico de pesquisa somente as séries e filmes que existem no catálogo, ou seja, que foram encontradas na busca. Criar um programa que contenha a seguinte lista de séries: House, The Boys, Clarice, Periféricos, Pearson, Reacher, Undone, Bosch, Hunters e Lore. Solicitar ao usuário que pesquise 5 séries e a cada pesquisa mostrar mensagem "Série encontrada!" ou "Série não encontrada!". Após a pesquisa, mostrar o histórico somente com as séries encontradas. Caso nenhuma tenha sido encontrada, mostrar mensagem "Seu histórico de pesquisa está vazio!"
//Critérios de avaliação:
//(1,0) Criar a lista com as 10 séries.
//(1,0) Receber as séries pesquisadas pelo usuário e mostrar as mensagens.
//(1,0) Armazenar as séries encontradas em um histórico.
//(1,0) Mostrar histórico com as séries ou a mensagem de histórico vazio.

let series = ['house', 'the boys', 'clarice', 'periféricos', 'pearson', 'reacher', 'undone', 'bosch', 'hunters', 'lore']
let historico = []
let pesq, vezes = 0

    for(i=0; i < 5; i++){
        pesq = prompt("Digite o nome da série: ")
        
        if(series.includes(pesq) == true){
            alert("Série encontrada!")
            historico.unshift(pesq)
            vezes++

        }else{
            alert("Série não encontrada!")

        }

    }
    if(vezes != 0){
        alert(`Seu histórico de pesquisa: ${historico}`)

    }else{
        alert("Seu histórico de pesquisa está vazio!")
    }

