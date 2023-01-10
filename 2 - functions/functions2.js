//function expression
//function anonymous
const sum = function(a, b) {
    let total = a + b
    return total
}

console.log(sum(2, 3)) //arguments
console.log(sum(4, 5))

let number11 = 34
let number22 = 25
console.log(sum(number11, number22))

console.log(`O número 1 é ${number11}`)
console.log(`O número 2 é ${number22}`)
console.log(`A soma é ${sum(number11, number22)}`)
