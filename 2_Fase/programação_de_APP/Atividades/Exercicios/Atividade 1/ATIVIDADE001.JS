
let notaDoAtendimento = 10;

function atendimento(notaDoAtendimento){

    if(notaDoAtendimento >= 8 && notaDoAtendimento <= 10){

        console.log("O atendimento foi perfeito! :D")

    }else if(notaDoAtendimento >= 6 && notaDoAtendimento < 8){

        console.log("O atendimento foi bom! :/")

    }else if(notaDoAtendimento >= 4 && notaDoAtendimento < 6){

        console.log("O atendimento foi mediano! :|")

    }else if(notaDoAtendimento >= 2 && notaDoAtendimento < 4){

        console.log("O atendimento foi ruim! :C")

    }else{

        console.log("O atendimento foi o pior que eu já vi!  >:C")

    }

}

atendimento(notaDoAtendimento);