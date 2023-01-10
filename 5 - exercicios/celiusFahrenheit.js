// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 

//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    if(celsiusExists) {
        let updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        let formula = celsius => celsius * 9/5 + 32
        let degreeSign = "F"
    }


    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree("50C"))
    transformDegree("50F")
} catch (error) {
    console.log(error)
}


