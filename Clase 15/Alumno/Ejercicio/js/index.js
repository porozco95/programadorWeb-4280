$(document).ready(function () {
  console.log('Wookie')

  var url = 'https://swapi.co/api/'
  for (i=0 ; i<=10 ; i++){
        getData(url + 'people/'+i, callback)
  }

})

function callback (error, data) {
  var characterNameNode = $('#character-name')
  if (error) {
    console.log('Hubo un error', error)
  } else {
    characterNameNode.html(data.name)
    console.log('Nombre: ', data.name)
  }
}

function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}
