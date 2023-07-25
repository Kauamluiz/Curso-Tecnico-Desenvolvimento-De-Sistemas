
let pontos = 0
let perguntas = 0
let operacao

do{ 

    let n1 = gerarNumero(0, 200)
    let n2 = gerarNumero(0, 200)
    let sinal = gerarNumero(1, 4)
    let resposta
    let resultado
    operacao = '-'
    

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

    resposta = Number(prompt(`${n1} ${operacao} ${n2}? `))

    if(resposta == resultado){
        alert('Acertou! :D')
        pontos += 3
    
    }else{
        alert('Errado! :C')
    
    }
    perguntas ++

}while(perguntas < 10)


function gerarNumero(min, max){
    return Math.floor(Math.random() * (max-min+1))+ min;
}