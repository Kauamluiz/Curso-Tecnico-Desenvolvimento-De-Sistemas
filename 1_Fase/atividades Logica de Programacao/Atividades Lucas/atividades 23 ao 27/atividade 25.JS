//3) Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias".

let mes

    mes = prompt('Digite o mes').toLowerCase()
    
    switch(true){
        case (mes == 'janeiro'):
            alert('Janeiro possui 31 dias')
            break
        case (mes == 'fevereiro'):
            alert('Fevereiro possui 28 dias e em ano bissexto 29 dias')
            break
        case (mes == 'marco'):
            alert('Marco possui 31 dias')
            break        
        case (mes == 'abril'):
            alert('Abril possui 30 dias')
            break    
        case (mes == 'maio'):
            alert('Maio possui 31 dias')
            break   
         case (mes == 'junho'):
            alert('Junho possui 30 dias')
            break
        case (mes == 'julho'):
            alert('Julho possui 31 dias')
            break               
        case (mes == 'agosto'):
            alert('Agosto possui 31 dias')
            break           
        case (mes == 'setembro'):
            alert('Setembro possui 30 dias')
            break       
        case (mes == 'outubro'):
            alert('Outubro possui 31 dias')
            break
        case (mes == 'novenbro'):
            alert('Novenbro possui 30 dias')
            break           
        case (mes == 'dezembro'):
            alert('Dezembro possui 31 dias')
            break
    }