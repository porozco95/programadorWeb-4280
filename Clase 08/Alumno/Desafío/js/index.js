console.log('Desafio Clase 08')

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

var studentList = document.getElementById('student-list')

var studentNode = createStudentNode(student)

function createStudentNode(student){

  var li = document.createElement('li')

  li.class = 'list-group-item'
  li.id = student.dni
//  li.innerHTML = '<h1>' + student.firstName + student.lastName + '</h1>' + '<h3>' + student.dni '</h3>' + '<p>' + student.email + '</p>'

  studentList.appendChild(li)
}
