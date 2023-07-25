//3) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

let resultado, fatorial

    fatorial = Number(prompt("DIgite o numero"))

    resultado = fatorial

for(i=fatorial-1; i > 0; i++){

    resultado = resultado * i

}

    alert(`Fatorial igual a: ${resultado}`)