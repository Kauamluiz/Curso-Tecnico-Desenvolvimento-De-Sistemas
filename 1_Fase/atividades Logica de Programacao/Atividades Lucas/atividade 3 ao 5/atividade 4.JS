//4) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.

    let anoNascimento  = Number(prompt('digite o seu ano de nascimento'))
    let anoAtual  = Number(prompt('digite o ano atual'))

    idade = anoAtual - anoNascimento

    meses = idade * 12
    dias = idade * 365
    semanas = idade * 52

alert(`Sua idade é: ${idade}\n Idade em meses: ${meses}\n Idade em semanas: ${semanas}\n Idade em dias: ${dias}`)