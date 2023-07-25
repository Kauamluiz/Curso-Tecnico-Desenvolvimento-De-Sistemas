/* Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let moeda
let valorTotal = 0, moedaUm = 0, moedaCinco = 0, moedaDez = 0, moedaVinteECinco = 0, moedaCinquenta = 0

    do{
        
        moeda = Number(prompt(`Digite o valor da moeda inserida (1, 5, 10, 25, 50) ou 0 para encerrar!`))

        valorTotal += moeda

        switch(moeda){

            case 1:

                moedaUm++
                break

            case 5:

                moedaCinco++
                break

            case 10:

                moedaDez++
                break

            case 25:

                moedaVinteECinco++
                break

            case 50:

                moedaCinquenta++
                break

        }

    }while(moeda != 0)

alert(`Valor total: ${valorTotal}.\nMoedas de 1: ${moedaUm}\nMoedas de 5: ${moedaCinco}\nMoedas de 10: ${moedaDez}\nMoedas de 25: ${moedaVinteECinco}\nMoedas de 50: ${moedaCinquenta}\n`)
