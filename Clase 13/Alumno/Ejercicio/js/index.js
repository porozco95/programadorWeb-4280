$(document).ready(function () {
  console.log('Ejercicio Clase 13')

  counter = $('#counter')
  $(window).keydown(keyDownPress)


  function keyDownPress (event) {
    var keyCode = event.keyCode
    var value = counter.html()
    switch (keyCode) {
      case 13:
        value = 0
        break
      case 38:
        value++
        break
      case 40:
        value--
        break
    }
    counter.html(value)
  }
})
