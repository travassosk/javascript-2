let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join(" ")
console.log(phraseWithUnderscore)

let phrase2 = "Eu quero viver!"
console.log(phrase2.includes("amor")) // tem amor? false

let myArray2 = new Array("a", "b", "c")
console.log(myArray2)

console.log(["a", "b", "c"].length)

let word = "manipulação"
console.log(Array.from(word))
