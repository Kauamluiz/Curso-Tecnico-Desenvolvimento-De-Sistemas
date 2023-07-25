
let nomeUser = document.getElementById("nome")

let gmailUser = document.getElementById("gmail")

let senhaUser = document.getElementById("senha")

let teleUser = document.getElementById("tele")

let dataUser = document.getElementById("data")

let Contas = []

let gmailTempo

function CadastrarConta(){
    
    Contas = JSON.parse(localStorage.getItem('userSalvo'))
    
    if(Contas == null){
        
        Contas = []
   
        Cadast()
        
    }else{
        
        Cadast()

    }
    
}



function Cadast(){

    if(nomeUser.value == null || nomeUser.value == ""){

        document.getElementById('verificar').innerHTML = `Verificar o nome!`

    }else if(gmailUser.value == null || gmailUser.value == ""){

        document.getElementById('verificar').innerHTML = `Verificar o gmail!`

    }else if(senhaUser.value == null || senhaUser.value == ""){

        document.getElementById('verificar').innerHTML = `Verificar a senha!`

    }else if(teleUser.value == null || teleUser.value == ""){

        document.getElementById('verificar').innerHTML = `Verificar o telefone!`

    }else if(dataUser.value == null || dataUser.value == ""){

        document.getElementById('verificar').innerHTML = `Verificar a data de nascimento!`

    }else{

    
        let objUser = {

            nomes: '',
            datas: '',
            telefones: '',
            gmails: '',
            senhas: '',
            dispositivos: []

        }

        objUser.nomes = nomeUser.value

        objUser.datas = dataUser.value

        objUser.telefones = teleUser.value

        objUser.gmails = gmailUser.value

        objUser.senhas = senhaUser.value

        Contas.push(objUser)

        localStorage.setItem('userSalvo', JSON.stringify(Contas))

        LogarNaPagina()

        document.getElementById('nome').focus()
        document.getElementById('nome').value = ''
            
        document.getElementById('gmail').focus()
        document.getElementById('gmail').value = ''
            
        document.getElementById('senha').focus()
        document.getElementById('senha').value = ''
            
        document.getElementById('tele').focus()
        document.getElementById('tele').value = ''
            
        document.getElementById('data').focus()
        document.getElementById('data').value = ''


    }   
    
}

function LogarNaPagina(){
    
    gmailUser = document.getElementById("gmail")

    Contas = JSON.parse(localStorage.getItem('userSalvo'))

    for(i=0; i < Contas.length; i++){

        if(gmailUser.value == Contas[i].gmails){
            gmailTempo = Contas[i].gmails
            localStorage.setItem('nomeTemp', gmailTempo)

            window.open("../PG inicial/PG.HTML", "_self")
            
        }

    }
}

function entrar(){
    
    document.getElementById('verificar').innerHTML = ``
    
}




function validacaoEmail(field) {

    if(gmailUser.value == null || gmailUser.value == ""){

    }else{
        
        usuario = field.value.substring(0, field.value.indexOf("@"));
        dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById('verificar').innerHTML = ``
            document.getElementById('verificar2').innerHTML = ``


        }
        else{
            document.getElementById('verificar').innerHTML = `endereço de e-mail inválido`.toUpperCase()
        }

    }

}




function voltar(){
    
    window.open("../Login/Log.HTML", "_self")
    
}