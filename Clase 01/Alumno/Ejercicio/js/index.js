var ageOfTheUser = prompt('Cual es tu nombre','Pepe')
console.log ('Hola '+ageOfTheUser+'!!')

var number1 = prompt('Ingrese un numero a sumar')
var number2 = 5
var parsedNumber1 = parseInt(number1, 10)
var totalSuma = parsedNumber1 + number2
console.log('La suma de su numero mas 5 es:'+totalSuma)

var number3 = prompt('Ingrese un numero a restar')
var number4 = 10
var parsedNumber2 = parseInt(number3, 10)
var totalResta = parsedNumber2 + number4
console.log('La resta de su numero menos 10 es:'+totalResta)

var number5 = prompt('Ingrese un primer numero')
var number6 = prompt('Ingrese un segundo numero')
var parsedNumber3 = parseInt(number5, 10)
var parsedNumber4 = parseInt(number6, 10)
var totalSumaParsed = parsedNumber3 + parsedNumber4
console.log('La suma de sus numeros es: '+totalSumaParsed)
