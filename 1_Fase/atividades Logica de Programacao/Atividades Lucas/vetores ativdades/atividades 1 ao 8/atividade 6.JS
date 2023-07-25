//6) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo. Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo. (DESAFIO: fazer com 7 números e/ou com palavras e frases).

let palindromo = []
let addNum, palin = 0

    for(i=0; i < 6; i++){

        addNum = Number(prompt("Digite um numero"))

        palindromo.push(addNum)

    }

    let j = 5
    for(i=0; i < 3;i++){
        
        if(palindromo[i] != palindromo[j]){

        palin = 1

        }

        j--

    }

    if(palin == 1){
        alert("Nao e palindromo")
    }else{
        alert("E palindromo")
    }