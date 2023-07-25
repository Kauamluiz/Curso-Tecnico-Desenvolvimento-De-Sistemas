//5) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor. Voltar para de menu sempre, ao menos quando escolher sair.
//======== MENU ========
//1- Cadastrar nome
//2- Excluir um nome
//3- Editar um nome
//4- Pesquisar se um nome está cadastrado
//5- Listar todos os nomes cadastrados
//0- Sair do programa

let menu
let cadastrar, pesq
let userEdit, userPos, userNew, usuario = []

    while(menu != 0){
        menu = prompt("O que dejesa fazer:\n1 - Cadastrar\n2 - Excluir\n3 - Editar\n4 - Pesquisar\n5 - Lista\n0 - Sair").toLowerCase()

        switch(true){
            case menu == 1:
                cadastrar = prompt("digite o nome do usuario a ser cadastrado")
                usuario.push(cadastrar)
                alert(`Lista de usuarios: ${usuario}`)
                break

            case menu == 2:
                userEdit = prompt("Qual usuario deseja excluir ? ")
                userPos = usuario.indexOf(userEdit)
            
                usuario.splice(userPos, 1)
                alert(`Lista de usuarios: ${usuario}`)
                break

            case menu == 3:
                userEdit = prompt("Qual usuario deseja editar ? ")
                userPos = usuario.indexOf(userEdit)

                userNew = prompt("Qual o novo usuario ? ")
                usuario.splice(userPos, 1, userNew)
                alert(`Lista de usuarios: ${usuario}`)
                break

            case menu == 4:
                pesq = prompt('Qual o nome que deseja pesquisar: ')

                if(usuario.includes(pesq) == true){
                    alert(`Usuario cadastrado`)
                }else{
                    alert("Usuario não existente")
                }
                break

            case menu == 5:
                alert(`Lista de usuarios: ${usuario}`)
                break
                
        }
    }



