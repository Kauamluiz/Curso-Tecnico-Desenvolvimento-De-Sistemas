//1) Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço. Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade], reside no endereço [endereço]".  Exemplo: Cliente Lucas, com 29 anos, brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

    let cliente = prompt('digite seu nome')
    let idade = prompt('digite sua idade')
    let nacionalidade = prompt('digite sua nacionalidade')
    let endereço = prompt('digite seu endereço')

alert(`Cliente: ${cliente} \n Idade: ${idade} \n Nacionalidade: ${nacionalidade} \n Endereço: ${endereço}`)