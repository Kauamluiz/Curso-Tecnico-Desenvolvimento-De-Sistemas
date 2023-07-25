

function salarioRE(){
    let salario = Number(document.getElementById('salario').value)
    document.getElementById('salario').value = ``
    document.getElementById('salario').focus()
    let resultado = document.getElementById('novoSalario')
    let reajuste1, novoSalario
    let reajuste = salario / 100

    switch (true){
        case salario > 0 && salario <= 400:
            reajuste1 = reajuste * 15
            novoSalario = salario + reajuste1
            resultado.innerHTML = `Novo salario: R$${(novoSalario).toFixed(2)} <br> Reajuste ganho: R$${(reajuste1).toFixed(2)} <br> Em porcentual 15%`
            break;
    
        case salario > 400 && salario <= 800:
            reajuste1 = reajuste * 12
            novoSalario = salario + reajuste1
            resultado.innerHTML = `Novo salario: R$${(novoSalario).toFixed(2)} <br> Reajuste ganho: R$${(reajuste1).toFixed(2)} <br> Em porcentual 12%`
            break;

        case salario > 800 && salario <= 1200:
            reajuste1 = reajuste * 10
            novoSalario = salario + reajuste1
            resultado.innerHTML = `Novo salario: R$${(novoSalario).toFixed(2)} <br> Reajuste ganho: R$${(reajuste1).toFixed(2)} <br> Em porcentual 10%`
            break;

        case salario > 1200 && salario <= 2000:
            reajuste1 = reajuste * 7
            novoSalario = salario + reajuste1
            resultado.innerHTML = `Novo salario: R$${(novoSalario).toFixed(2)} <br> Reajuste ganho: R$${(reajuste1).toFixed(2)} <br> Em porcentual 7%`
            break;

        case salario > 2000:
            reajuste1 = reajuste * 4
            novoSalario = salario + reajuste1
            resultado.innerHTML = `Novo salario: R$${(novoSalario).toFixed(2)} <br> Reajuste ganho: R$${(reajuste1).toFixed(2)} <br> Em porcentual 4%`
            break;


    }

    document.getElementById('divResultado').innerHTML = 
    `Novo salario: R$${novoSalario.toFixed(2)}<br>
    Reajuste ganho: ${aumento.toFixed(2)}<br>
    Em percentual: ${reajuste}%`
}
    document.getElementById('salario').addEventListener('keypress', (event) => {
        if(event.key == 'Enter') {
            console.log(event)
            salarioRE()
    }
    });
