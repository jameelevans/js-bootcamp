//Global scope (ConverFahrenhietToCelcius, tempOne, tempTwo)
    //Local scpoe (fahrenheit, celsius)
        //Local scope (isFreezing)



//convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    if( celsius <= 0) {
        let isFreezing = true
    }
    return celsius
}

//Call a couple of times (32 -> 0) (68 -> 20)
let temp = convertFahrenheitToCelsius(32)
let otherTemp = convertFahrenheitToCelsius(68)

//Print the converted value
console.log(temp)
console.log(otherTemp)