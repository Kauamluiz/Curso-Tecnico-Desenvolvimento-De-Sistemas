
const ambienteSelect = document.getElementById("sel")

Ambientes = JSON.parse(localStorage.getItem("ambienteSalvo"))

let selector = []

i=0

for(nomeAmbiente in Ambientes) {

    let batata = `${Ambientes[i].nomeAmbiente}`;
    option = new Option (batata, nomeAmbiente);    
    ambienteSelect.options[ambienteSelect.options.length] = option;
    i++

    selector.push(batata)

    localStorage.setItem('temAmbiente', JSON.stringify(selector))

}

function XyzA(){
    alert('aquiaqui')
  for(i=0; i < Controladores.length; i++){
    if(Controladores[i].ambiente == batata){
      nomeControlador2.push(Controladores[i].nomeControlador)
  }
  }  
}




