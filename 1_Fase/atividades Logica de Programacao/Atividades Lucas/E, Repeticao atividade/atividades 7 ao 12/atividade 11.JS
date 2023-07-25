//5) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas. Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

let leitosVagos = 40
let pessoas = 0, ocupacao, PsemLeito = 0

    pessoas = Number(prompt("Digite o numero de pessoas que entram ou saem"))
    ocupacao = pessoas
    console.log(ocupacao)

    if(ocupacao > 0){
        while(leitosVagos > ocupacao){

            pessoas = Number(prompt("Digite o numero de pessoas que entram ou saem"))

            if(pessoas > 0){
                ocupacao += pessoas
                console.log(ocupacao)

            }
            if(pessoas < 0 ){
                ocupacao += pessoas
                console.log(ocupacao)

            }
        }
    }else{
         alert("Nao e possivel liberar mais de 40 leios")
    }
    if(ocupacao > 40){
        PsemLeito = ocupacao - 40

        alert(`Nao e possivel ultrapassar a capacidade em ${PsemLeito} leito`)
    }

