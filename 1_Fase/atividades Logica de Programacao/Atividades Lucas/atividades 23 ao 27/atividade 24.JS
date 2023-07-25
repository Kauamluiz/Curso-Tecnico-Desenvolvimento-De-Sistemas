//2) Criar um programa onde o usuário digite o ano de nascimento e retorne a geração a qual ele pertence:
//Sem Geração (até 1945)
//Baby Boomers (nascidos entre 1946 e 1964)
//Geração X (1965-1980)
//Geração Y ou Millennials (1981-1996)
//Geração Z (1997-2010)
//Geração Alfa (a partir de 2011)

let anoNasc

    anoNasc = Number(prompt('Digite o seu ano de nascimento'))

    switch(true){

        case anoNasc <= 1945:
            alert('Voce nao tem geracao')
            break

        case anoNasc >= 1946 && anoNasc <= 1964:
            alert('Voce e da geracao Baby Boomers')
            break

        case anoNasc >= 1965 && anoNasc <= 1980:
            alert('Voce e da geracao X')
            break

        case anoNasc >= 1981 && anoNasc <= 1996:
            alert('Voce e da geracao Millennials')
            break

        case anoNasc >= 1997 && anoNasc <= 2010:
            alert('Voce e da geracao Z')
            break

        case anoNasc >= 2011:
            alert('Voce e da geracao Alfa')
            break

    }