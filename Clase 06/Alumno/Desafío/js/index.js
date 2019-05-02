console.log('Desafio Clase 06')

includesText('Pa', 'Patricia') // Deberá devolver true

includesText('Patricia', 'Pa') // Deberá devolver false

includesText(2, 'Pa') // Deberá devolver false

function includesText (string1, string2){

// Utilizo el typeof para poder distinguir si lo que me facilita el usuario es un string y devolver false en caso afirmativo

  if (typeof string1 !== 'string' || typeof string2 !== 'string'){
    console.log(false)
} else {

// Transformo todo a mayusculas para que realice una comparación correcta.

    var string1ToUpperCase = string1.toUpperCase()
    var string2ToUpperCase = string2.toUpperCase()

// Chequeo si el string esta incluido en el otro y devuelvo true o false segun corresponda

    if (string2ToUpperCase.indexOf(string1ToUpperCase) !== -1) {
      console.log(true)
    } else {
      console.log(false)
    }
  }
}
