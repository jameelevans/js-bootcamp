const notes = ['Note 1', 'Note 2', 'Note 3']

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

notes[2] = 'This is now the new note 3'

notes.forEach(function(item, index) {
    console.log(index)
    console.log(item)
})

//Get the number of items inside an array
console.log(notes.length)

//Get the last item of an array 
// console.log(notes[notes.length - 1])

//Get the second to last item in an array
// console.log(notes[notes.length - 2])
console.log(notes)

