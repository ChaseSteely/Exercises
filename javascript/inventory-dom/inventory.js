const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"))
const inventoryEl = document.getElementsByClassName("inventory")[0]

// Loop over keys in the database
for (let key in HomeInventory) {
    // Get a reference to the array of objects
    const currentType = HomeInventory[key]
    
    // Loop over the array of objects
    for (let i = 0; i < currentType.length; i++) {
        // Current item in the array
        let item = currentType[i]

        // Build a string to insert into the DOM
        inventoryEl.innerHTML += `
        <section class="${key} item">
            <h2>${item.name}</h2>
            <div>Location: ${item.location}</div>
            <div>${item.description}</div>
        </section>
        `
    }
}