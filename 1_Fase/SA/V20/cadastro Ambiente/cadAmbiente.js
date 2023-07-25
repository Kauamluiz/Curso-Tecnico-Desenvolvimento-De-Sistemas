
let ambienteCad = document.getElementById("ambienteNome")





let Ambientes = []

function CadastrarAmbiente(){

    Ambientes = JSON.parse(localStorage.getItem('ambienteSalvo'))

    if(Ambientes == null){

        Ambientes = []

        Cadast()

    }else{

     Cadast()

    }
    
    ListarAmbiente()
   
}

function Cadast(){

    if(ambienteCad.value=='' || ambienteCad.value==null)
        { 
            
            alert('Verifique o nome do Ambiente!')
        
        }else{


    let objUser = {

        nomeAmbiente: ''
        
            
    }

    objUser.nomeAmbiente = ambienteCad.value

    
    Ambientes.push(objUser)

    localStorage.setItem('ambienteSalvo', JSON.stringify(Ambientes))

    document.getElementById('ambienteNome').value = ''
    document.getElementById('ambienteNome').focus()
  
    }

    document.getElementById('mensag123').innerHTML = ``

}

function ListarAmbiente(){

    document.getElementById('listarAmbientes').innerHTML = ''

    Ambientes = JSON.parse(localStorage.getItem('ambienteSalvo'))
   
    for(i=0; i < Ambientes.length; i++){
        
        document.getElementById('listarAmbientes').innerHTML += `Nome: ${Ambientes[i].nomeAmbiente}<br>`

        
    }

}


function voltar(){
    
    window.open("../Dashboard/tela.HTML", "_self")
    
}


let espaços = []
let aparelhos = []


function disposit(){
    espaços = JSON.parse(localStorage.getItem('ambienteSalvo'))

    aparelhos = JSON.parse(localStorage.getItem('controladorSalvo'))

    document.getElementById("textos").innerHTML = ``

  for(i=0; i < aparelhos.length; i++){

    document.getElementById("textos").innerHTML += `Nome: ${aparelhos[i].nomeControlador.toUpperCase()}<br>`

  }

}

function ExcluirAmbiente(){

    Ambientes = JSON.parse(localStorage.getItem('ambienteSalvo'))       
    for(i=0; i < Ambientes.length; i++){

        if(Ambientes[i].nomeAmbiente === ambienteNome.value){

            
            Ambientes.splice(i,1)
            localStorage.setItem('ambienteSalvo', JSON.stringify(Ambientes))
            document.getElementById('mensag123').innerHTML = 'Ambiente deletado'
            document.getElementById('ambienteNome').value = ''
            document.getElementById('ambienteNome').focus()
            
            
        }else{
            document.getElementById('mensag123').innerHTML = 'Ambiente inexistente'

        }    
    }

    ListarAmbiente()
}



function Dash(){

    window.open("../Dashboard/tela.HTML", "_self")

}

function ambiente(){

    window.open("../cadastro Ambiente/cadAmbiente2.HTML", "_self")

}

function dispositivo(){

    window.open("../cadastro Controlador/cadControlador.HTML", "_self")

}

function PerfilUser(){

  window.open("../PG inicial/PG.HTML", "_self")
  
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
  