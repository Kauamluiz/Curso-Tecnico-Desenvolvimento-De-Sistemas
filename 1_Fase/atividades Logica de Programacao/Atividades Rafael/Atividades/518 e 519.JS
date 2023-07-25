let distancia = Number(prompt('Digite a distancia em KM'))
let tempo
   //velocidade da luz = 300000km em 1segundo    
   tempo = distancia / 300000
   minuto = tempo / 60
   hora = minuto / 60
   dia = hora / 24
   mes = dias / 30
   ano = mes / 12

if(tempo >= 0 && dias >= 1 && dias <= 30 && mes >= 1 && mes <= 12 && ano >= 1){
   switch(true){
      case tempo < 60:
         alert(`Voce ira levar ${(tempo).toFixed(1)} segundos!`)
         break

      case minuto >= 1 && minuto < 60:
         alert(`Voce ira levar ${(minuto).toFixed(1)} minutos!`)
         break

      case hora >= 1 && hora <= 60:
         alert(`Voce ira levar ${(hora).toFixed(1)} horas!`)
         break

      case dia >= 1 && dia <= 30:
         alert(`Voce ira levar ${(dia).toFixed(1)} dias!`)
         break

      case mes >= 1 && mes <= 12:
         alert(`Voce ira levar ${(mes).toFixed(1)} meses!`)
         break

      case ano >= 1:
         alert(`Voce ira levar ${(ano).toFixed(1)} anos!`)
         break
         
   }
}alert(`Tempo de viagem:\n${(tempo).toFixed(1)} segundos.\n${(minuto).toFixed(1)} minutos.\n${(hora).toFixed(1)} horas.\n${(dia).toFixed(1)} dias.\n${(mes).toFixed(1)} meses.\n${(ano).toFixed(1)} anos.`)