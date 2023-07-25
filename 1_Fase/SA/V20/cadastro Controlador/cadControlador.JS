

let controladorCad = document.getElementById("controlador")

let controladorSerial = document.getElementById("serial")

let Ambientes = []

let selecionar = []

selecionar = JSON.parse(localStorage.getItem("temAmbiente"))

Ambientes = JSON.parse(localStorage.getItem("ambienteSalvo"))


for(i=0;i<Ambientes.lenght;i++)
{

document.getElementById("ambienteDois").innerHTML += `${Ambientes[i].nomeAmbiente}`

}

//createelement



let Controladores = []

function CadastrarControlador(){

    Controladores = JSON.parse(localStorage.getItem('controladorSalvo'))

    if(Controladores == null){

        Controladores = []

        Cadast()

    }else{

     Cadast()

    }
    

   
}

function Cadast(){

    if(controladorCad.value=='' || controladorCad.value==null)
        { 
            
            alert('Verifique o nome!')
        
        }

    else if(controladorSerial.value=='' || controladorSerial.value==null)
        {
            alert('Verifique o serial')
        }
    
    else
    {


    let objUser = {

        nomeControlador: '',
        serialControlador: '',
        ambiente: ''
            
    }
    var select = document.getElementById("sel");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;

    objUser.nomeControlador = controladorCad.value

    objUser.serialControlador = controladorSerial.value

    objUser.ambiente = opcaoTexto

    Controladores.push(objUser)

    localStorage.setItem('controladorSalvo', JSON.stringify(Controladores))

    document.getElementById('serial').value = ''
    document.getElementById('serial').focus()
    document.getElementById('controlador').value = ''
    document.getElementById('controlador').focus()  

    }

    disposit()

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

let aparelhosDele = []

function ExcluirControlador(){

    aparelhosDele = JSON.parse(localStorage.getItem('controladorSalvo')) 

    for(i=0; i < aparelhos.length; i++){        
        
        if(aparelhosDele[i].nomeControlador == controladorCad.value.toLowerCase()){

            
            aparelhosDele.splice(i,1)
            localStorage.setItem('controladorSalvo', JSON.stringify(aparelhosDele))
            
            document.getElementById('mensag123').innerHTML = ``

            document.getElementById('serial').value = ''
            document.getElementById('serial').focus()

            document.getElementById('controlador').value = ''
            document.getElementById('controlador').focus()

        }else{
            document.getElementById('mensag123').innerHTML = 'Comtrolador inexistente'

        }    
    }

    disposit()
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
  