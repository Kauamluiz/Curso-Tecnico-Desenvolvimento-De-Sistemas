const dispositivoSelectX = document.getElementById("sel2")
const selectX = document.getElementById("sel")

Controladores = JSON.parse(localStorage.getItem('controladorSalvo'))

let selectorC = []
var opcaoTexto2 = ambienteSelect[selectX.selectedIndex].text;
var 
i=0
let nomeControlador2 = []

for(nomeControlador in Controladores) {

    if(Controladores[i].ambiente == opcaoTexto2){
        nomeControlador2.push(Controladores[i].nomeControlador)
    }
        

    let batata2 = `${nomeControlador2[i]}`;
    option = new Option (batata2, nomeControlador2);    
    dispositivoSelectX.options[dispositivoSelectX.options.length] = option;
    i++

    selectorC.push(batata2)

    

}


