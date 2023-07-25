//5) Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.

let valor, assinatura, venda1, venda2, venda3, valor1, desconto1, desconto1Frete, desconto2Frete
let frete = 12.50  

    valor = Number(prompt('Digite o valor da compra'))

    assinatura = Number(prompt('Digite o nivel da sua assinatura: \n1) Assinante Premium\n2) Assinante Gold\n3) Assinante Silver\n4) Nao e assinante\n'))

    switch(assinatura){
        case 1:
        desconto1 = (valor / 100) * 20
        venda1 = (valor - desconto1).toFixed(2)
            alert(`Valor de compra: R$${venda1}`)
            break

        case 2:
            desconto1Frete = (valor / 100) * 20
            venda2 = ((valor - desconto1Frete) + 12.50).toFixed(2)
                alert(`Valor de compra: R$${venda2}`)
                break

        case 3:
            desconto2Frete = (valor / 100) * 10
            venda3 = ((valor - desconto2Frete) + 12.50).toFixed(2)
                alert(`Valor de compra: R$${venda3}`)
                break

        case 4:
            valor1 = (valor + 12.50).toFixed(2)
                alert(`Valor de compra: R$${valor1}`)
                break

        default:
            alert('Assinstura nao existente')
    }
