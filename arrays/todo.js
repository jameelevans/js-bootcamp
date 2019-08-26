//Create an array with 5 things to do
const todos = ['Walk the dog', 'Feed the fish', 'Change kitty litter', 'Buy groceries', 'Wash the car']

 // *ARRAYS Manipulating Arrays with Methods Cahallenge*

//Delete the thrid item -> Third item has an index of 2
todos.splice(2, 1)

//Add new item to the end
todos.push('My new item on end')

//Delete the first item from list
todos.shift()

//Print message that include length. You have x todos
console.log(`You have ${todos.length} items on your to do list!`)
//console.log(todos)

//Print the first and second to last items to terminal -> Todo: Walk the Dog
//console.log(`Todo: ${todos[0]}`)
//console.log(`Todo: ${todos[todos.length - 2]}`)

// * Foreach challenge
todos.forEach(function(item, index){
    const num = index + 1
    console.log(`${num}. ${item}`)
})
// 1. The first item
// 2. Th esecond item

