// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"]
let nextSentence = [ "The", "warrior", "ethos", "is", "at", "risk", "because", "popular", "culture", "waters", 
                     "down", "and", "coarsens", "the", "warrior", "ethos", "Hollywood", "tells", "us", "little", "about", "the", "warriors", "calling", "or", "commitment", 
                     "to", "his", "or", "her", "fellow", "warriors", "or", "what", "compels", "him", "or", "her", "to", "act", "courageously", "endure", 
                     "hardships", "take", "risks", "or", "make", "sacrifices"]

/*
The addExcitement function should be an impure function, and accept 
the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, punc) => {
    // initiate string to plug our words into
   let row = ""
   let count = 0
   //loop through array pluging in our words into row
    for (let i = 0; i < theWordArray.length; i++) {
        row += theWordArray[i]
        //every third word has remainder of 2, so let's add punc after the third word
        if(i % 3 === 2){
            row += punc
            //keeping count of everytime we add punc
            count++
            //looping through count and everytime we hit count > 1, add another punc, and subtract one from that count
            for (let j = count; j > 1; j--){
                row += punc
            }
        }
          row += " "
          console.log(row)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence, "?")
addExcitement(nextSentence, "$")