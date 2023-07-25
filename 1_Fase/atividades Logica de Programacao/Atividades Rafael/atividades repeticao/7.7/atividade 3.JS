// 7.7 -  Aquecimento de repetição
// Crie um programa para executar a sequência abaixo:
// a- Contar de 0 até 250 mostrando o valor com document.write;
// b- Escrever um document.write dizendo “MANHÊ, ACABEI O PRIMEIRO”;
// c- Contar de 250 até 100 mostrando o valor com document.write;
// d- Escrever um document.write dizendo “MANHÊ, ACABEI O SEGUNDO”;
// e- Contar de 5 em 5, do 100 até o 0, mostrando os valores com document.write;
// f- Escrever um document.write dizendo “MANHÊ, ACABEI O TERCEIRO”;
// g- Contar de 3 em 3, do 0 até 9500, mostrando os valores com document.write;
// h- Escrever um document.write dizendo “MANHÊ, ACABEI O QUARTO”;
// i- Contar do 9500 até o 9600 mostrando com document.write apenas os números pares;
// j- Escrever um document.write dizendo “MANHÊ, ACABEI MAIS UM”;
// k- Contar do 9600 ao 10285 mostrando com document.write apenas os números ímpares;
// l- Escrever um document.write dizendo “MANHÊ, ACABEI TUDOOO. POSSO JOGAR BOLA?!”.
// *ObsImp: percebam que existe uma sutil diferença dos passos ‘e’ e ‘g’ para o passo ‘i’. Os primeiros contam de 5 em 5 ou 3 em 3 e mostram esses valores, enquanto que o passo ‘i’ conta de 1 em 1 normalmente, mas apenas mostra os valores pares;

    for(i=0; i <= 250; i++){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei o primeiro <br>"

    for(i=250; i >= 100; i--){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei o segundo <br>"

    for(i=100; i >= 0; i-=5){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei o terceiro <br>"

    for(i=0; i <= 9500; i+=3){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei o quarto <br>"

    for(i=9500; i <= 9600; i+=2){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei mais um <br>"



    for(i=9601; i <= 10285; i+=2){
        document.getElementById("mostrar").innerHTML += i + " "
        
    }

    document.getElementById("mostrar").innerHTML += "<br>Manhe, acabei tudo, posso jogar bola?!  <br>"