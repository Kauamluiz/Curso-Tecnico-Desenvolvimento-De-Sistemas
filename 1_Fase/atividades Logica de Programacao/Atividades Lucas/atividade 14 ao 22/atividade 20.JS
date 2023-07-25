//7) Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Perdir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let usuario 
let senha

    usuario = prompt('Digite o nome de usuario') .toLowerCase()
    senha = Number(prompt('Digite a senha'))

    if(usuario == 'admin' && senha == 123){
        alert('Login efetuado!')

    }else
        alert('Login falhou!')