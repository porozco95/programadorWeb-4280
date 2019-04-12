day = prompt('Ingrese su día de la semana con la primer letra con Mayuscula')

switch (day) {
  case 'Lunes':
  case 'Martes':
  case 'Miercoles':
  case 'Jueves':
  case 'Viernes':
    console.log('Su día es un día habil')
    break
  case 'Sabado':
  case 'Domingo':
    console.log('Su día es un día del fin de semana')
    break
  default:
    console.log('El día no es válido o lo escribio de manera incorrecta')
    break
}
