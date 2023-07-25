const dispositivoSelectY = document.getElementById("sel3")

Controladores = JSON.parse(localStorage.getItem('controladorSalvo'))

let selectorD = []

i=0

for(nomeControlador in Controladores) {

    if(Controladores[i].ambiente == opcaoTexto2){
        nomeControlador2.push(Controladores[i].nomeControlador)
    }

    let batata3 = `${Controladores[i].nomeControlador}`;
    option = new Option (batata3, nomeControlador);    
    dispositivoSelectY.options[dispositivoSelectY.options.length] = option;
    i++

    selectorC.push(batata3)

    localStorage.setItem('temAmbiente', JSON.stringify(selectorD))

}


