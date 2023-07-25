
///////////////////////////////////////////// JSON.stringify e JSON.parse /////////////////////////////////////////////
//

let numSalvo, nome, nome2

    localStorage.setItem('numero', JSON.stringify(10)) 
    numSalvo = JSON.parse(localStorage.getItem('numero'))

    localStorage.setItem('nome2', JSON.stringify('Mario')) 
