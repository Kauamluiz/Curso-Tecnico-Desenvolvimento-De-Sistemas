//8.1//*** Um mês muito louco:
//Neste mês que termina, tivemos várias variações de variadas temperaturas. A coisa tá bem estranha mesmo. Será?
//Vamos estudar alguns dados (quase reais) sobre o caso.
//Para isso:
//- Criem dois vetores de 30 posições, um para armazenar a mínima de cada dia e outro para a máxima;
//- Usando a função Math.random(), gerem dois valores de temperatura para o dia. Estes valores devem estar entre 12 e 35 graus.
//- De posse destes dois valores gerados, coloquem o menor no vetor de mínimas e o maior no vetor de máximas.
//- Claro, este processo será repetido 30 vezes para “gerar” as temperaturas mínima e máxima de cada um dos 30 dias (30 dias no mês, 30 posições no vetor...)
//Saídas do programa:
//- Para começo de conversa, uma lista contendo a mínima e a máxima temperatura de cada dia de Junho;
//- Tem mais, peraí...
//DLC 1: Qual foi a temperatura média em cada dia?
//DLC 2: Qual foi a maior temperatura média registrada nesse mês?
//DLC 3: É sabido nas altas rodas iluminatis da meteorologia que existe a regra de Von Fahrenkelvin. Esta regra (entre outras coisas discutíveis) afirma que nenhuma temperatura máxima jamais será maior que o dobro da mínima deste mesmo dia. Verifique isto para cada um dos dias registrados em nosso script e diga se o clã iluminati dos meteorologistas tem razão.

function gerarNumero() {
let min = []
let media = []
let max = []
let verifi = []
let n1
let n2
let calc, maiorMes = 0, calc2

    for (i = 0; i < 30; i++) {

        n1 = Number(Math.floor(Math.random() * 18) + 12)

        n2 = Number(Math.floor(Math.random() * 18) + 12)

        if(n1 > n2){
            max.push(n1)
            min.push(n2)
            calc2 = n2 * 2
            verifi.push(calc2)
            

        }else{
            max.push(n2)
            min.push(n1)
            calc2 = n1 * 2
            verifi.push(calc2)

        }

        calc = (n1 + n2) / 2
        media.push(calc)

        if(calc > maiorMes){
            maiorMes = calc

        }

        

    }

    let iluminates = []
    for(i=0; i < max.length; i++){
        if(max[i] > min[i]*2){
            iluminates.push(i)
        }
    }

    document.getElementById("demo").innerHTML = `Maxima: ${max} <br> Minima: ${min} <br> Media dos dias: ${media} <br> Maior media do mes: ${maiorMes} <br> Verificação: ${verifi} <br> Os iluminates erraram nos dias: ${iluminates}`

}


