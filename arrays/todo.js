//Create an array with 5 things to do
// 1. Convert array to array of object ->text, completed property
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

//Find item in list and delete it
// 2. Create a function to remove a todo by text value
const deleteTodo = function(todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > 1) {
        todos.splice(index, 1)
    }
}

//Function that only shows incomplete todos
const getThingsToDo = function (todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed
        
    })
}


console.log(getThingsToDo(todos))


// deleteTodo(todos, 'Buy groceries')
// console.log(todos)