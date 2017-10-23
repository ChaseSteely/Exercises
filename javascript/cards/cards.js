const outputEl = document.getElementById("output")
let fieldEl = document.getElementById("content")

outputEl.addEventListener("click", deleteCard)

//capture user input from text area
fieldEl.addEventListener("keyup", function (event) {
    thisInput = event.target.value
})

//generator function for button and section id's
const idFactory = function* () {
    let id = 1
    while (true) {
        yield id
        id++
    }
}

//initiate idFactory
const idGen = idFactory()

//capture create button event and writ to the dom
document.getElementById("create").addEventListener("click", function () {
    thisId = idGen.next().value
    outputEl.innerHTML += `
        <section id="section_${thisId}" class="card">
        <p>${thisInput}</p>
        <button id="button_${thisId}" class="delete">Delete</button>
        </section>
        `
    //for user friendliness I am clearing the text box once the card is created
    fieldEl.value = ''
})


//delete button function
function deleteCard() {
    if (event.target.id.startsWith("button_")) {
        event.target.parentNode.remove()
    }
}