// 4) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados. O programa deve calcular e mostrar:

//a) A quantidade de produtos com preço inferior a R$50;
//b) O nome dos produtos com preço de R$50 a R$100;
//c) A média dos preços dos produtos com preço superior a R$100.

let nProduto = [], addProduto
let pProduto = [], addPreço
let produtos50a100 = [], produtos100 = 0
let produtos = 0, media = 0, v = 0

    for(i=0; i < 5; i++){
        addProduto = prompt("Digite o nome do produto:")
        nProduto.push(addProduto)

        addPreço = Number(prompt("Digite o preço do produto:"))
        pProduto.push(addPreço)

        if(addPreço < 50){
            produtos++

        }else if(addPreço >= 50 && addPreço < 100){
            produtos50a100.push(addProduto)

        }else{
            v++
            produtos100 += addPreço
        }
    }

    media = (produtos10 / v).toFixed(2)

    alert(`Quantidade de produtos com preço inferior a R$50,00: ${produtos}\nProdutos com preço entre R$50,00 e R$100,00: ${produtos5a10}\nMedia dos preços dos produtos com preço superior a R$100,00: R$${media}`)
     