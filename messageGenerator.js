const dearDiary = () => {
    // arrays of words
    const adjectives = ["attractive", "bald", "beautiful", "chubby", "clean", "magnificent", "plump", "unsightly", "ambitous", "brave", "faithful", "jolly", "nice", "poilite", "proud", "scilly", "angry", "bewildered", "clumsy", "grumpy", "itchy", "jealous", "lazy", "nervous", "thoughtless", "big", "fat", "gigantic", "microscopic", "miniture", "tall", "short", "tiny"]
    const nouns = ["captain", "child", "brother", "sister", "friend", "mum", "dad", "baby", "dog", "pet", "monkey", "tiger", "lion", "clown", "priest", "woman", "man", "king", "thief", "neighbor", "desk", "planet", "grass", "tree", "fridge", "carpet", "wall", "duck", "ghost", "shadow", "mind", "bulb", "internet", "boss", "teacher"]
    const adverbs = ["secretly", "fast", "well", "quickly", "slowly", "accidentally", "badly", "carefully", "cheerfully", "strongly", "wishfully", "eagerly", "extermly", "entirely", "completely", "never", "sometimes", "occasionally", "always"]
    const verbs = ["argue", "believe", "change", "clean", "complain", "disappear", "dress", "drink", "eat", "encourage", "enjoy", "exist", "grow", "hide", "hold", "laugh", "record", "play", "point", "prepare", "sing", "sleep", "smile", "talk", "throw", "touch", "watch", "write"]

    // variables of the length of each array.

    const adjectiveLength = adjectives.length;
    const nounLength = nouns.length;
    const adverbLength = adverbs.length;
    const verbLength = verbs.length;

    // Getting a random value from the adjective array.

    const randomAdjective1 = adjectives[Math.floor(Math.random() * adjectiveLength)]
    
    // Checking it prints a random adjective.
    console.log(randomAdjective1)


    // creating an empty list to store the value of the "selectNoun" function.

    const randomNouns = [];

    // This function selects a random noun and pushes it to the "randomNouns" array IF the value is UNIQUE.
    // it does this 3 times.

    const selectNoun = () => {
        let uniqueNounCheck = 0
        
        
        // We only want an array of 3 elements.
        while (randomNouns.length < 3) {
            // stores a randomly generated value in variable called tempNoun
            let tempNoun = nouns[Math.floor(Math.random() * nounLength)]
            

            // A check to see if this is the first generated random value.
            // if it is it can be added to the selectNoun array without camparing against elements in that same array.

            if (randomNouns.length === 0) {
                randomNouns.push(tempNoun)
                
            } else {
                // A check against each element in the array for uniqueness.
                randomNouns.forEach(item => {

                    if (item !== tempNoun) {
                        uniqueNounCheck += 1
                    }
                })

                // If the tempNoun is unique the uniqueNounCheck and the length of the array would be equal.
                if(uniqueNounCheck === randomNouns.length) {
                    randomNouns.push(tempNoun)
                }
                // reset the variable for the next check.
                uniqueNounCheck = 0

            }
        } 

    }
    selectNoun();
    console.log(randomNouns)
}

dearDiary();

//const diaryMessage = `Yesterday, my ${adjective} ${personNoun} came to my ${placeNoun} to ${adverb} ${verb}. I appreciated it ${adverb}.\n\nToday the ${noun} told me to ${verb} ten times. I don't know why?\n\nTomorrow, I plan to ${adverb} ${verb} in the morning. It's on my list of things to do.`




