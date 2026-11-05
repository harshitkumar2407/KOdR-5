// Question: Determine whether a sentence contains every English alphabet letter at least once.

    let sentence = "The quick brown fox jumps over the lazy dog"
    let set = new Set()
    for(let i = 0 ; i < sentence.length ; i++){
        set.add(sentence[i])
    }
    return set.size == 26