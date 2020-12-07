const regex = /^-9.*0{4}$|^9.*0{4}$/

console.log(regex.test("90000")) //should return true
console.log(regex.test("-90000")) //should return true
console.log(regex.test("900000000")) //should return true
console.log(regex.test("91230000")) //should return true
console.log(regex.test("-91230000")) //should return true

console.log(regex.test("90001")) //should return false
console.log(regex.test("9000")) //should return false
console.log(regex.test("91230")) //should return false
console.log(regex.test("1-90000"))//should return false
console.log(regex.test("-90000123")) //should return false