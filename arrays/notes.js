const notes = [{
    title: 'My next trip',
    body: 'I Would like to go to Spain'
}, {
    title: 'habits to work on',
    body: 'Exercise and not get fat'
}, {
    title: 'Office modifications',
    body: 'Get new seat'
}]

console.log('a' < 'b')

const sortNotes = function(notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

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



//console.log(findNotes(notes, 'exercise'))
//const note = findNote(notes, 'office modifications')
//console.log(note)

sortNotes(notes)
console.log(notes)
