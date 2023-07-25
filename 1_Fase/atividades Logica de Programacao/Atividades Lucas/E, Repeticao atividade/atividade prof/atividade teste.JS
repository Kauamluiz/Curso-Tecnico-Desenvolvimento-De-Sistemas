let numeroSecreto = 75
let numeroPalpites, quantidadePalpites = 0

    while(numeroPalpites != numeroSecreto){

        numeroPalpites = Number(prompt("Diga um numero: "))
        quantidadePalpites++

    }

    alert(`Acertou em ${quantidadePalpites} palpites, miseráááááááááávi! :D`)