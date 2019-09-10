const todos = [{
    text: 'Walk the dog',
    completed: false
}, {
    text: 'Feed the fish',
    completed: true
}, {
    text: 'Change kitty litter',
    completed: false
}, {
    text: 'Buy groceries',
    completed: true
}, {
    text: 'Wash the car',
    completed: false
}]

//Function that only shows incomplete todos
const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed 
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

// Print sumary message -> You have 2 todos left (p element)
//Add a p for each todo above (Use text value)