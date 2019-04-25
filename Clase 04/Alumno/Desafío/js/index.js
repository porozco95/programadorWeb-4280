console.log('Desafio Clase 04')

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var student = prompt('Ingrese el estudiante a buscar: ')
var result = searchUser(studentsList, student)

console.log('La posición del usuario es ' + result)

function searchUser (arrayToSearch, userToSearch) {
  var user
  for (var i = 0; i < arrayToSearch.length; i++) {
    user = arrayToSearch[i]

    if (user.firstName === userToSearch || user.lastName === userToSearch) {
      return i
  }
  return -1
}
