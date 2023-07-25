///////////////////////////////////////////// Fila V2 /////////////////////////////////////////////

let fila = [], filaIdade =[]
let nomes, idades, resultado = ''

    for(i=0; i < 4; i++){
        nomes = prompt("Digite o nome: ")
        idades = Number(prompt("Digite a idade: "))

        if(idades < 13){
            fila.unshift(nomes)
            filaIdade.unshift(idades)
            
        }else{
            fila.push(nomes)
            filaIdade.push(idades)
            
        }

    }
    
    for(i=0;  i < fila.length; i++){

        if(i < 9){

            resultado = resultado + fila[i] + ': ' + filaIdade[i] + ' anos, ' 

        }else{
            resultado = resultado + fila[i] + ': ' + filaIdade[i] + ' anos.' 

        }

    }
    
    alert(`Fila: ${resultado}`)

