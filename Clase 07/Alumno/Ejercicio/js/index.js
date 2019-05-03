var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

setLocalList('studentsList', testList)

function setLocalList (key, array) {
  if (typeof key === 'string' || Array.isArray(array) === true){
    var parsedArray = JSON.stringify(array)
    localStorage.setItem(key, parsedArray)
  }
}
