let valorMaca
let quantMaca = Number(prompt('Digite quantas macas voce vai comprar'))
let maca

switch(true){
    case quantMaca < 12:
        valorMaca = 0.30
        break

    default:
        valorMaca = 0.25
}

    maca = (quantMaca * valorMaca).toFixed(2)
        alert(`Voce vai gastar R$${maca} comprando ${quantMaca} macas`)
       