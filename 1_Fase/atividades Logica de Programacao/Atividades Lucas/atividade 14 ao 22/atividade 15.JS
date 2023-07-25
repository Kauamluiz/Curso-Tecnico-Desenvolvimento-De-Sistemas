//2) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (salário mensal igual ou maior que o piso da categoria) ou se recebe abaixo do piso.

let salario = Number(prompt('Digite o seu salario anual'))
let pisoCateg = 5000

    salarioMens = (salario / 12) .toFixed(2)

    if(salarioMens >= 5000){
        alert(`Seu salario mensal esta maior ou igual o piso\n salario mensal: R$${salarioMens}`)

    }if(salarioMens < 5000){

        alert(`Seu salario esta abaixo do piso\n Salario mensal: R$${salarioMens}`)

}