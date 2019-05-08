
var texts = ['Ed', 'Edd', 'Eddy' ]

var characterList = document.getElementById('mainList')

for (var i = 0; i < texts.length; i++) {
  var text = texts[i]

  // Crea un nodo li
  var li = document.createElement('li')

  li.innerHTML = text

  // Agrega al final de la lista
  characterList.appendChild(li)
}
