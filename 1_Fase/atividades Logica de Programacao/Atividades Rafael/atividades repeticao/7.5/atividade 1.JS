//7.5: Mano Juca passou na entrevista!!!! Ele arrumou um emprego!!!!
//Agora ele é operador de fotocopiadora (tira xeróx) :D
//Mas, né...
//Adiantou nada, ele não aprendeu a tabuada. Tá se perdendo todo na hora de cobrar os clientes e o patrão já tá de ovo virado com ele.
//PRECISAMOS AGIR RÁPIDO!
//Tendo em vista que cada cópia sai R$0,33, faz aí um programa que mostre uma lista de quanto custa desde 1 até 500 cópias.
//Exemplinho pra ninguém dizer “numtendiiii”:
//Quantidade     Preço
//1        :  R$0,33
//2        :  R$0,66
//3        :  R$0,99

    for(i=1; i <= 500; i++){
        let valor = 0.33 * i
        document.getElementById("divLista").innerHTML += `${i} : R$${valor.toFixed(2)}<br>`

    }


