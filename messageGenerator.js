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


    // creating an empty list to store the value of the "selectNoun" function.

    const randomNouns = [];

    // This function selects a random noun and pushes it to the "randomNouns" array IF the value is UNIQUE.
    // it does this 3 times.

    const selectNoun = () => {
        let count = 0

        do {
            randomNouns.forEach(item => {
                // selects a random noun from the array.
                let tempNoun = nouns[Math.floor(Math.random() * nounLength)]

                //The if statement checks if this noun is NOT in the array. 
                if (item !== randomNouns) {
                    randomNouns.push(tempNoun)
                    count += 1
                }
            })
            // We only need 3 nouns and then we can stop.

        } while (count < 4)

    }
    selectNoun();
    console.log(randomNouns)
}

dearDiary();

//const diaryMessage = `Yesterday, my ${adjective} ${personNoun} came to my ${placeNoun} to ${adverb} ${verb}. I appreciated it ${adverb}.\n\nToday the ${noun} told me to ${verb} ten times. I don't know why?\n\nTomorrow, I plan to ${adverb} ${verb} in the morning. It's on my list of things to do.`

// adding a new branch.


