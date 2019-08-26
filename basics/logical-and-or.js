let temp = 55 

//Logical And Operator - True is both side are true. False otherwise
//Logical Or Operator _ True if at least one side is true. False otherwise
if (temp >= 60 && temp <= 90) {
    console.log("it is pretty nice out")
} else if (temp <= 0 || temp >= 120) {
console.log('Do no go outside!')
} else {
    console.log('Eh. Do what you want')
}

//Challenge area

let isGuestOneVegan = true
let isGuestTwoVegan = false

// Are both vegan? Only offer vegan dishes.
// At lease one vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Here are all of our vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Here are both vegan and regular options')
} else {
    console.log('Here is everything on the menu')
}

