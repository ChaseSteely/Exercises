const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside


    /*
    The gem mine does not exist outside the barricade of the
    hëap-skopes. The Lexscopistanians build the barricade
    around their facility AND the resource.
    
    a.k.a.
    Instead of being located in an outer scope to the
    function, the gem mine is enclosed by the scope of
    the `gemHeapSkope` function.
    */
    const GemMine = {
        "Onyx": {
            "kilograms": 453
        },
        "Amethyst": {
            "kilograms": 453
        },
        "Bloodstone": {
            "kilograms": 453
        },
        "Emerald": {
            "kilograms": 453
        }
    }

    /*
    Instead of processing the entirety of the resources in
    bulk - which is what the stâck-skope does - this skope
    will return an object that has a method for processing
    each type of mineral.
    
    We're exposing the functionality of this skope to code
    in the outer scope, so that the order in which minerals
    are processed can be customized.
    
    Hëap-skopes workshops can process 5 kilograms of a
    mineral with each work order. So every time the `process`
    function is invoked, subtract 5 from the amount of the
    requested mineral from the enclosed GemMine above.
    */
    return {
        "process": function (requestedMineral) {
            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */
            let currentWeight = GemMine[requestedMineral].kilograms

            if (GemMine[requestedMineral].kilograms >= 5) {
                /*
                You can reference the `GemMine` variable here
                because it lives in an outer scope:
                e.g. GemMine[requestedMineral].kilograms
                */
                currentWeight = 5;
            } else {
                currentWeight = GemMine[requestedMineral].kilograms
            }

            GemMine[requestedMineral].kilograms -= currentWeight

            return {
                "mineral": requestedMineral,
                "amount": currentWeight // Change this to the correct amount
            }
        }
    }
}//END gemHeapSkope function

/*
The SkopeManager variable represents the object with the
`process` method on it.
*/
const SkopeManager = gemHeapSkope()



let gems = ["Onyx", "Amethyst", "Bloodstone", "Emerald"]
let processedGems = []


gems.forEach(function (gem) {

    let processGem
        do {
            //invoke process method
            processGem = SkopeManager.process(gem)

            if (processGem.amount > 0) {
                processedGems.push(processGem)
            }
        } while (processGem.amount === 5)//while I get 5 back

})

/*
Create a generator for 30 storage containers, which is how many a hëap-skope
is equipped with.
*/
const containerGenerator = function* () {
    let cId = 1
    const maxContainers = 30

    while (cId <= maxContainers) {
        yield { "id": cId, "type": "Mineral", "orders": [] }
        cId++;
    }
}

let containerGeneratorFactory = containerGenerator()

// Open the first container
let currentContainer = containerGeneratorFactory.next().value

let container = []
/*
Place the gems in the storage containers, making sure that
once a container has 565 kilograms of gems, you move to the
next one.
*/
processedGems.forEach(
    mineral => {

        //Push containers into array if at capacity and get new container
        if (currentContainer) {
            currentContainer.orders.push(mineral)

            let capacity = 565 - (currentContainer.orders.length * 5)


            if (capacity === 0) {
                container.push(currentContainer)
                currentContainer = containerGeneratorFactory.next().value
            }
        }



    })

console.log(container)