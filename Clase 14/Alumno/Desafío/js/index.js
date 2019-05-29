$(document).ready(function(){
  console.log('Desafio')
  var deleteButton = $('.btn-danger')

  deleteButton.click(function(){
    var trAll = $(this).parent().parent()
    
    trAll.hide(400, function(){
      trAll.remove()
    })
  })
})
