function checkNumOrientacion (num){
    if (Math.sign(num) === 1){
        console.log("Yeas number is positive.")
    } else if (Math.sign(num) === -1){
        console.log("Yeas number is negative.")
    } else if (Math.sign(num) === 0){
        console.log("Number is =0.")
    }
}

console.log(checkNumOrientacion(5))
console.log(checkNumOrientacion(-5))
console.log(checkNumOrientacion(0))
