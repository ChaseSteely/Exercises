const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
planets.forEach(function (string) {
    planetEl.innerHTML += `
            <section class="planetList">
            <ul class="planetList">
                <li>${string}</li>
            </section>
        `
});



/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const upperEl = document.getElementById("planetsUpper")
planets.map(function (thisPlanet) {
    let p = thisPlanet.charAt(0).toUpperCase() + thisPlanet.slice(1)
    upperEl.innerHTML += `
    <section class="planetList">
    <ul class="planetList">
        <li>${p}</li>
    </section>
    `
});


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const eEl = document.getElementById("planetsE")
planets.filter(function (word) {
if(word.includes('e')) {
    eEl.innerHTML += `
    <section class="planetList">
    <ul class="planetList">
        <li>${word}</li>
    </section>
    `
}

});

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reduceEl = document.getElementById("reduce")

let sentence = words.reduce( (prev, curr) => prev + ' '+ curr )

reduceEl.innerHTML = sentence;