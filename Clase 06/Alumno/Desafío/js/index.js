console.log('Desafio Clase 06')

includesText('Pa', 'Patricia') // Deberá devolver true

includesText('Patricia', 'Pa') // Deberá devolver false

includesText(2, 'Pa') // Deberá devolver false

function includesText (string1, string2){
//  if (Array.isArray(string1) === false || Array.isArray(string2) === false){
//    console.log(false)
//  }
   var string1ToUpperCase = string1.toUpperCase()
   var string2ToUpperCase = string2.toUpperCase()

   if (string2ToUpperCase.indexOf(string1ToUpperCase) !== -1) {
     console.log(true)
   } else {
     console.log(false)
   }
}
