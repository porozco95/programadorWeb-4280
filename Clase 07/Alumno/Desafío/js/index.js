console.log("Estoy aqui en el desafio clase 7")

var studentsList = getLocalList('studentsList')

console.log(studentsList)

function getLocalList (key) {
  if (typeof key !== 'string') {
    return []
  }

  var keyStorage = localStorage.getItem(key)
  var parsedKey = JSON.parse(keyStorage)

  if (!parsedKey){
    return []
  }else{
    return parsedKey
  }
}
