let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challeng area

//name, age, location
let myPerson = {
    name: 'Jameel',
    age: 34,
    location: 'Milwaukee'
}

//Print Jameel is 34 and lives in Milwaukee
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)
myPerson.age = myPerson.age ++

//Increase age by 1 and print message again
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`)