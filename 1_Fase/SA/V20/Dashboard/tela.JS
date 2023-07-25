
let espaços = []
let aparelhos = []
let op


function disposit(){
    espaços = JSON.parse(localStorage.getItem('ambienteSalvo'))

    aparelhos = JSON.parse(localStorage.getItem('controladorSalvo'))

    
    document.getElementById("textos").innerHTML = ``
    

  for(i=0; i < aparelhos.length; i++){

    document.getElementById("textos").innerHTML += `Nome: ${aparelhos[i].nomeControlador.toUpperCase()}<br>`

  }

}

let nomeControlador2 = []





function ambiente(){

  window.open("../cadastro Ambiente/cadAmbiente2.HTML", "_self")

}

function dispositivo(){

  window.open("../cadastro Controlador/cadControlador.HTML", "_self")

}

function PerfilUser(){

  window.open("../PG inicial/PG.HTML", "_self")

}

function Dash(){

  window.open("../Dashboard/tela.HTML", "_self")

}




let variavel

function Delet(){
  
  variavel = JSON.parse(localStorage.getItem('logado'))
  
  if(confirm("Deseja sair?")){
    
      variavel = 1
    
      localStorage.setItem('logado', JSON.stringify(variavel))
    
      window.open("../Login/Log.HTML", "_self")

  }else{
    

  }
  

  return
  
}
  