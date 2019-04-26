console.log('Im here')

var cars = [
  {
    model:'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model:`Audi TT`,
    brand:'Audi',
    year: 2017
  },
  {
    model:`Gran turismo`,
    brand:'Maserati',
    year: 2018
  }
]

function Cars (model, brand, year) {
  var id = Math.random()
  this.model = model
  this.brand = brand
  this.year = year
  this.getCarName = function (){
    var carNameMessage = 'El modelo es ' + model + ' de la marca ' + brand + ' del año ' + year
    return carNameMessage
  }
}

for (var i = 0; i < cars.length; i++) {
  carToShow = cars[i]
  var carToShow = new Cars(carToShow.model, carToShow.brand, carToShow.year)
  console.log(carToShow.getCarName())
}
