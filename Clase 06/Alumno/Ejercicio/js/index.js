console.log('Ejercicio Clase 06')

var numbers = [1,2,3,4,5]

var userNumber = 2

arrayWithDelete = deleteElement (userNumber, numbers)

console.log(arrayWithDelete)

function deleteElement (index, array){
  var arrayCopy = array.slice()
  arrayCopy.splice(index, 1)
  return arrayCopy
}
