let name = '   Jameel Evans   '

//Length property
console.log(name.length)

//Convert to uppercase
console.log(name.toUpperCase())

//Convert to lowercase
console.log(name.toLowerCase())

//Includes method
let password = 'abc123pasfsd098'
console.log(password.includes('password'))

//Trim method
console.log(name.trim())


//Challenge area

//craete function isVaildPassword
let isValidPassword = function(password) {
    //Return true if lenght is more than 8 - and dosen't contain the word password
    return password.length > 8 && !password.includes('password')
    //Simplified: Dont need if statment if youre reutrning a boolean else other boolean 
}


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpwefwcpassword'))