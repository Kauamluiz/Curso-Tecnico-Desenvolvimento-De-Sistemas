//6) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). Criar um programa que simule esse sistema.
//1- Adicionar sabor
//2- Remover sabor
//3- Visualizar sorvete
//4- Finalizar pedido
//======== MENSAGENS e VALIDAÇÕES ========
//Opção 1-> “Sabor adicionado!” OU “Limite de sabores atingido, remova um sabor!”
//Opção 2-> “Sabor removido!” OU “Não existem sabores adicionados!”
//Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.” OU “Seu sorvete não possui sabores!”
//Opção 4-> “Pedido realizado!” OU “Adicione pelo menos um sabor!”

let addSabor, remoSorvete, posiSabor, menu
let sorvete = []

do{
    menu = prompt("Monte o seu sorvete de 4 bolas (sabores):\n1 - Adicionar sabor\n2 - Remover sabor\n3 - Visualizar sorvete\n4 - finalizar pedido")
    switch(true){
        case menu == 1:

            addSabor = prompt("Qual sabor deseja adicionar?")
            sorvete.push(addSabor)
            
            if(addSabor == sorvete[4]){
                alert("Remova um sabor antes de adicionar outro")
                posiSabor = sorvete.indexOf(addSabor)
                sorvete.splice(posiSabor, 1)
            }
            break

        case menu == 2:
            remoSorvete = prompt("Qual sabor deseja remover ? ")

            if(sorvete == remoSorvete){
            posiSabor = sorvete.indexOf(remoSorvete)
            alert("Sabor removido!")
            sorvete.splice(posiSabor, 1)

            }else{
                alert("Não esistem sabores adicionais!")
            }
            break

        case menu == 3:
            if(sorvete[0]){
            alert(`Camada 1 - sabor ${sorvete[0]}`)
                if(sorvete[1]){
                alert(`Camada 2 - sabor ${sorvete[1]}`)
                    if(sorvete[2]){
                        alert(`Camada 3 - sabor ${sorvete[2]}`)
                        if(sorvete[3]){
                            alert(`Camada 4 - sabor ${sorvete[3]}`)
                        }
                    }
                }
            }else{
                alert("Seu sorvete não possui sabores!")
            }
            break

        

    }
}while(menu != 4)
