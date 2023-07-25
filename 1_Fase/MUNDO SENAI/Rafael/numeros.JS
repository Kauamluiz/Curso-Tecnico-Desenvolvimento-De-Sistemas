function Numeros(){

let pontos = 0
let perguntas = 0
let operacao

do{ 

    let n1 = gerarNumero(0, 30)
    let n2 = gerarNumero(0, 30)
    let sinal = gerarNumero(1, 4)
    

    if(sinal == 1){
        operacao = "-"
        resultado = n1 - n2

    }
    if(sinal == 2){
        operacao = "+"
        resultado = n1 + n2

    }
    if(sinal == 3){
        operacao = "*"
        resultado = n1 * n2

    }
    if(sinal == 4){
        operacao = "/"
        resultado = n1 / n2

    }
    
    document.getElementById("calc").innerHTML = `${n1} ${operacao} ${n2}`

    perguntas ++

}while(perguntas < 10)


function gerarNumero(min, max){
    return Math.floor(Math.random() * (max-min))+ min;
}

}
