

function gerarNumero() {
    let num = []
    let correcao
    
    
        for (i = 0; i < 50; i++){
        let n1
        let n2
    
            n1 = Number(Math.floor(Math.random() * (101 - (-101)) + (-101)))
            
            if(n1 < 0){
                num.push(0)

            }else{
                num.push(n1)

            }
    
            
    
        }
        correcao = num.join("  ,  ")

        document.getElementById("demo").innerHTML = `Numeros gerados: <br>${correcao}.`

    }
    