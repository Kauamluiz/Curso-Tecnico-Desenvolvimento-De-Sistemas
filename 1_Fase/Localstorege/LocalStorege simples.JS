
///////////////////////////////////////////// Salvar informação /////////////////////////////////////////////

    localStorage.setItem('numero', 10)
    localStorage.setItem('idade', 15)



///////////////////////////////////////////// pegar informação /////////////////////////////////////////////

    let idadeSalva

    idadeSalva = localStorage.getItem('idade')
    alert(idadeSalva)



///////////////////////////////////////////// teste numero 1 (chave existente ) /////////////////////////////////////////////

    let nome

    nome = prompt("Digite um nome")
    localStorage.setItem('nomes', nome)


/////////////////////////////////////////////  teste numero 2 (chave não existente) /////////////////////////////////////////////

    let biomasMinecraft

    biomasMinecraft = localStorage.getItem('mapas')

    alert(biomasMinecraft)
    
