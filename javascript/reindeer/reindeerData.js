const getNextColor = function* () {
    const color = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let counter = 0

    while (counter < color.length) {
        yield currentColor = color[counter]
        counter += 1  // Increment the counter
    }
}//end generator function

// Create instance of generator
const reindeerFactory = getNextColor()
let coloredReindeer = []

const reindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    // Write a for loop that looks at each reindeer
    for (let i=0;i < reindeer.length;i++) {
        let currentName = reindeer[i]
        // Invoke factory function to create reindeer object
            const generateReindeer = function () {
                return Object.create(null, {
                    "name": {
                        enumerable: true,
                        value: currentName
                    },
                    "color": {
                        enumerable: true,
                        value: reindeerFactory.next().value
                    }
                })   
            }// END factory function

                    // Put new reindeer object in coloredReindeer array
                    coloredReindeer.push(generateReindeer())   
            
    }//end for reindeer loop

        // Return coloredReindeer array
        return coloredReindeer
     
   
}// END reindeerBuilder

