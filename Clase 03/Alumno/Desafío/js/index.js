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
    message = ('La suma de sus números es:'+ total)
    console.log(message)
    break
  case 'res':
    total = parsedNumber1 - parsedNumber2
    message = ('La resta de sus números es:'+ total)
    console.log(message)
    break
  case 'div':
    while(parsedNumber2 === 0){
      var number2 = prompt ('Ingrese su segundo número: ')
      var parsedNumber2 = parseInt(number2,10)
    }
    total = parsedNumber1 / parsedNumber2
    message = ('La division de sus números es:'+ total)
    console.log(message)
    break
  case 'mult':
    total = parsedNumber1 * parsedNumber2
    message = ('La multiplicacion de sus números es:'+ total)
    console.log(message)
    break
  default:
    message = 'Ingreso una operación inválida'
    console.log(message)
    break
}
