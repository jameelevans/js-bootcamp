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

//DOM - Document Object Model


//Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = "******"
    //console.log(p.textContent)
   // p.remove()
})

//Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)
