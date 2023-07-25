//3) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos. (JS)

//Meu
let casal = Number(prompt('Digite o numero de casais'))
let areaIndiv = Number( 320 )
let individuos
let areaCasal = Number( 400 )
let area
let casais

    casais = Number(casal) * 2
    individuos = Number(casais)  + 4
    area = Number(individuos) * 320
    area1 = Number(casais) * 400
    areaTotal = Number(area) + Number(area1)

alert(`A area total é: ${areaTotal}km²\n A area total dos individuos é: ${area}km²\n A area total dos casais é: ${area1}km²`)

// Professor
let leoesCasais = Number(prompt('Digite o numero de casais'))
let leoesIndividuais = 14
    casais = Number(leoesCasais) * 2
    indiv = 14 - Number(casais)
    areaInd = Number(indiv) * 320
    areaCas = Number(casais) * 400
    areaTot = Number(areaInd) + Number(areaCas)

    alert(`A area total dos individuos é: ${areaInd}km²\n A area total dos casais é: ${areaCas}km²\n A area total é: ${areaTot}km²`)