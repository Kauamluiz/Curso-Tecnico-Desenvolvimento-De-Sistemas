
let nomes = []
let tipos = []
let indice = -1

function editar(){
    if(indice != -1){
        nomes[indice] = document.getElementById('inpNomePokemon').value
        tipos[indice] = document.getElementById('inpTipoPokemon').value
        alert('Registro atualizado com sucesso absoluto')
    }else{
        alert("Primeiro pesquise um pokemon")
    }
}

function pesquisar(){
    let temp = document.getElementById('inpNomePokemon').value
    indice = nomes.indexOf(temp)
    if(indice != -1){
        document.getElementById('inpTipoPokemon').value = tipos[indice]
    }else{
        alert('Pokemon nao encontrado')
    }

}

function cadastrar(){
    let temp = document.getElementById('inpNomePokemon').value
    nomes.push(temp)
    temp = document.getElementById('inpTipoPokemon').value
    tipos.push(temp)

    console.log(nomes);
    console.log(tipos);

    limparInputs()
    
}

function limparInputs(){
    document.getElementById('inpNomePokemon').value = ''
    document.getElementById('inpNomePokemon').focus()
    document.getElementById('inpTipoPokemon').value = ''
}