//Created a new variable with todays date
const today = new Date()
// Test time const today = new Date('Aug 27, 2019 17:59:00')

//getDay returns the day number from 0 - 6 (Sun - Sat)
let day = today.getDay() 

//getHours returns the hour number 0 - 23
let hours = today.getHours()

//getMinutes returns the minutes 0 - 59
let minutes = today.getMinutes()

//Return true if between 9a - 5p, Monday - Friday
let officeHours = function () {
    if (day >= 1 && day <= 5 && hours >= 8 && hours <= 16 ) {
        console.log(`Hey its office hours! The time is ${hours}:${minutes} `)
    } else {
        console.log(`Hey it's not office hours! The time is ${hours}:${minutes}`)
    }
}



console.log(officeHours())

