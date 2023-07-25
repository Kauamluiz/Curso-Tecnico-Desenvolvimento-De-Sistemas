//>>>>>>>>>>>>>>>>>>> Atividade 1 (2,0) <<<<<<<<<<<<<<<<<<<
//Um parque aquático recém inaugurou uma das suas mais incríveis atrações: ComboLoco, um toboágua gigante. Para organização das filas, resolveu separar em grupos de 10 pessoas por vez, onde as crianças tem preferência em relação aos adultos. Criar um sistema que simule essa fila. Deve-se perguntar o nome e a idade de cada uma das 10 pessoas, caso seja criança (menor que 12 anos) vai para o início da fila, caso não seja criança, vai para o final da fila. Ao final, mostrar a fila com os nomes.
//Exemplo: João, 60 anos, chegou. Astrogildo, 67 anos chegou. Enzo, 10 anos, chegou. Alícia, 9 anos, chegou. Suzana, 25 anos, chegou.
//Fila: Alícia, Enzo, João, Astrogildo, Suzana
//Critérios de avaliação:
//(0,5) Receber nome e idade das pessoas.
//(1,0) Adicionar no local correto (início ou fim) da fila.
//(0,5) Mostrar a lista completa com os nomes.

let fila = []
let nomes, idades

    for(i=0; i < 10; i++){
        nomes = prompt("Digite o nome: ")
        idades = Number(prompt("Digite a idade: "))

        if(idades < 13){
            fila.unshift(nomes)
            
        }else{
            fila.push(nomes)
            
        }

    }alert(`Fila: ${fila}`)
