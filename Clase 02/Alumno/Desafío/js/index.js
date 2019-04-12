var gender = prompt('Ingrese su genero (male, female o other):')

var age = prompt('Ingrese su edad:')

var message = ''

switch (gender) {
  case 'male':
      message = message + 'Sr.'
      break
  case 'female':
      message = message + 'Sra.'
      break
  default:
      message = message + 'Sx.'
      break
}

if (age >= 18){
  message = message + ' usted es mayor y puede ingresar.'
} else {
  message = message + ' usted es menor y no puede ingresar'
}
console.log(message)
