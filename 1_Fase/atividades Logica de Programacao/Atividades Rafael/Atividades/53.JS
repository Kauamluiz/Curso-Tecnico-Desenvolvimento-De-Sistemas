let placa

    placa = Number(prompt('DIgite o ultimo numero da sua placa:'))

    switch(true){
        case (placa == 0 || placa == 1):
            alert('Voce nao pode rodar na segunda-feira!')
            break

        case (placa == 2 || placa == 3):
            alert('Voce nao pode rodar na terca-feira!')
            break

        case (placa == 4 || placa == 5):
            alert('Voce nao pode rodar na quarta-feira!')
            break

        case (placa == 6 || placa == 7):
            alert('Voce nao pode rodar na quinta-feira!')
            break

        case (placa == 8 || placa == 9):
            alert('Voce nao pode rodar na sexta-feira!')
            break

        default:
            alert('Voce nao digitou um numero entre 0 e 9!')
            break
    }
    