function threeInOne(arr) {
    let sum = 0
    let temp = []
    let resArr = []
    for (let i = 0; i < arr.length; i += 3) {
        temp = arr.slice(i, i + 3)
        for (let k = 0; k < temp.length; k++) {
            sum += temp[k]
        }
        resArr.push(sum)
        sum = 0
    }
    return resArr
}

console.log(threeInOne( [1,2,3,4,5,6,7,8,9]))

function alienLanguage(str) {
    let words = str.toUpperCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        // words[i] = words[i].replace(words[i][words[i].length - 1], words[i][words[i].length - 1].toLowerCase());
        // не работает, так как это регулярное выражение строка. Находит и заменяет первое нахождение симовола.
        words[i] = words[i].slice(0, words[i].length - 1) + words[i].slice(-1).toLowerCase();
    }
    return words.join(" ");
}

console.log(alienLanguage("this is an example"));