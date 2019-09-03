const notes = [{
    title: 'My next trip',
    body: 'I Would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise and not get fat'
}, {
    title: 'Office modifications',
    body: 'Get new seat'
}]

const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}



console.log(findNotes(notes, 'exercise'))



// 
// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

//const note = findNote(notes, 'office modifications')
//console.log(note)

// //Removes an item from the end of array
// console.log(notes.pop())

// // Add new item on to the end of array
// notes.push('My new note')

// //Removes very first item from array
// console.log(notes.shift())

// // Adds a note to the very begining
// notes.unshift('My first note')

//Starts at 1 positons then delete 1 item
//notes.splice(1, 1)

//Add a new item in second spot and moves all other items over 1 spot
//notes.splice(1, 0, 'This is the new second item')

//Add a new item in second spot replaces the item in place
//notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)
// })



//Get the last item of an array 
// console.log(notes[notes.length - 1])

//Get the second to last item in an array


// // Counting...1
// for (let count = 2; count >= 0; count--) {
//     console.log(count)
// }

// //Counting from last item to first in reverse
// for (let count = notes.length - 1; count >=0; count--) {
//     console.log(notes[count])
//}


// // Get the number of items inside an array
// console.log(notes.length)

// // console.log(notes[notes.length - 2])
// console.log(notes)

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'Habits to work on'
// })

// console.log(index)