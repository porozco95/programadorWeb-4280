var message
// Ingreso lo que pide la consiga rellenando el Array:
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

// Realizo el recorrido del Array, distinguiendo entre dia hábil, fin de semana y cualquier cosa:

for (i=0; i<daysOfTheWeek.length; i++){
  switch (daysOfTheWeek[i]) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Miércoles':
    case 'Jueves':
    case 'Viernes':
      message = daysOfTheWeek[i]+' es un día habíl'
      break
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      message = daysOfTheWeek[i]+' es día de fin de semana'
      break
    default:
      message = 'Ingresaste cualquier cosa! (Escribiste:'+daysOfTheWeek[i]+')'
      break
  }
  console.log(message)
}
