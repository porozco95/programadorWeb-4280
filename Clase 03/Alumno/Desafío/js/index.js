var typeOperation = prompt('Ingrese el tipo de operacion (sum, res, div o mult)')

var number1 = prompt ('Ingrese su primer número: ')
var number2 = prompt ('Ingrese su segundo número: ')
var parsedNumber1 = parseInt(number1,10)
var parsedNumber2 = parseInt(number2,10)

var message
var total

switch (typeOperation) {
  case 'sum':
    total = parsedNumber1 + parsedNumber2
    console.log('La suma de sus números es:'+ total)
    break
  case 'res':
    total = parsedNumber1 - parsedNumber2
    console.log('La resta de sus números es:'+ total)
    break
  case 'div':
    while(parsedNumber2 === 0){
      var number2 = prompt ('Ingrese su segundo número: ')
      var parsedNumber2 = parseInt(number2,10)
    }
    total = parsedNumber1 / parsedNumber2
    console.log('La division de sus numeros es:' + total)
    break
  case 'mult':
    total = parsedNumber1 * parsedNumber2
    console.log('La multiplicación de sus numeros es:' + total)
    break
  default:
      message = 'Ingreso una operación inválida'
}
