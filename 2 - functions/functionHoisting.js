// sofre o hoisting

sayMyName();

function sayMyName() {
    console.log("Mayk")
}

// não sofre o hoisting


sayMyName();

const sayMyName = function() {
    console.log("Mayk")
}