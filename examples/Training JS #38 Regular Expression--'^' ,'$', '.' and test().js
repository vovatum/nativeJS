function findSimilarity(sentence, word) {
    let regStr = word[0] + Array(word.length - 1).join(".") + word.slice(-1)
    let reg = new RegExp("^" + regStr + "$");
    return sentence.split(/ /).filter(w => w.match(reg)).join(' ')
}


console.log(findSimilarity("bag dog dig dot doog dogs", "dog"))
// should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dig"))
// should return "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dot"))
// should return "dot")
console.log(findSimilarity("bag dog dig dot doog dogs", "god"))
// should return ""