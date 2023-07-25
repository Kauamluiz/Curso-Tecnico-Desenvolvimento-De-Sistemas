//2) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador exponencial **). (DESAFIO: Condição para expoente 0. Qualquer número elevado a 0 tem como resultado 1).

let base, expoente, baseFixa, resultado = 1

    base = Number(prompt("DIgite a base"))
    expoente = Number(prompt("DIgite o expoente"))

    baseFixa = base
    resultado = base

    if(expoente != 0){
        for(i=0; i < expoente-1; i++){

            resultado = resultado * baseFixa

        }
    }

    alert(` resultado: ${resultado}`)
