//4) Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.

let numeroConta, deposito, saque, deposito1, saldo1, saldo2, saque1
let saldo = 5000

    numeroConta = Number(prompt('Digite o numero da conta'))
    switch(true){
        case numeroConta == 1954:
           alert('Login efetuado')
           break

        case numeroConta != 1954:
            alert('Login falhou')
            break
    }

if (numeroConta == 1954){
    saldo = Number(prompt('Digite o valor do saldo')) .toFixed(2)
    alert(`Seu saldo atual e: R$${saldo}`)

    saque = prompt('Deseja realizar um saque') .toLowerCase()
    if (saque == 'sim'){
        saque1 = Number(prompt('Digite o valor do saque')) .toFixed(2)         
    
    switch (true){
        case (saque1 > saldo):
            alert(`Saque falhou!`)
            break
           
        case (saque1 <= saldo): 
            alert(`Saque realizado`)
            break
        }
    }

    deposito = prompt('Deseja realizar um deposito') .toLowerCase()
    if (deposito == 'sim'){
        deposito1 = Number(prompt('Digite o valor do deposito')) .toFixed(2)
    
    switch(true){
        case (deposito1 <= 0):
            alert(`Deposito falhou!`)
            break

        case (deposito1 >= 1):       
            alert(`Deposito realizado!`)
            break
           
        } 
    }  
}