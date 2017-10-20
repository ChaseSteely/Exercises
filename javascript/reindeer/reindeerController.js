const reindeerEl = document.getElementById("colored-reindeer")

let reindeerData = reindeerBuilder()

// Loop over the array of objects
for (i=0; i < reindeerData.length; i++) {
    let thisReindeer = reindeerData[i]

    reindeerEl.innerHTML += `
    <section style="color:${thisReindeer.color}; font-size:24px;">${thisReindeer.name}</section>
    `


}