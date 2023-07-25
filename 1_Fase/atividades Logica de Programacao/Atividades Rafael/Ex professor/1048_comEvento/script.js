
function calcularAumento(){
    let salario = Number(document.getElementById('inpSalario').value)
    document.getElementById('inpSalario').value = ''
    document.getElementById('inpSalario').focus()
    let reajuste

    switch(true){
        case salario <= 400:
            reajuste = 15
            break
        case salario > 400 && salario <= 800:
            reajuste = 12
            break
        case salario > 800 && salario <= 1200:
            reajuste = 10
            break
        case salario > 1200 && salario <= 2000:
            reajuste = 7
            break
        case salario > 2000:
            reajuste = 4
            break        
    }

    let aumento = salario * reajuste/100
    let novoSalario = salario + aumento

    document.getElementById('divResultado').innerHTML = 
    `Novo salario: R$${novoSalario.toFixed(2)}<br>
    Reajuste ganho: ${aumento.toFixed(2)}<br>
    Em percentual: ${reajuste}%`


}

document.getElementById('inpSalario').addEventListener('keypress', (event) => {
    if(event.key == 'Enter') {
        console.log(event)
        calcularAumento()
    }
  });

