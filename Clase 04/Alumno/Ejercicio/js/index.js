console.log('Ejercicio clase 04')

var examResults = [ 7, 5, 6, 4, 3, 2, 8]

var result = prom(examResults)

console.log('La edad de todos sumada es ' + result)

function prom (notesArray) {
  var total = 0
  var notes
  for (var i = 0; i < notesArray.length; i++) {
    notes = notesArray[i]
    total = total + notes
  }
  return (total / notesArray.length)
}
