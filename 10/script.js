let multiplicationButton = document.querySelector(".multiplicationValues")
let divisionButton = document.querySelector(".divisionValues")

multiplicationButton.addEventListener("click", function(e){
    e.preventDefault()

    let number1 = document.querySelector(".n1").value;
    let number2 = document.querySelector(".n2").value;
    
    multiplication = number1 * number2;
    document.querySelector(".ResultNumber").innerHTML = multiplication
})

divisionButton.addEventListener("click", function(e){
    

    let number1 = document.querySelector(".n1").value;
    let number2 = document.querySelector(".n2").value;
    
    multiplication = number1 / number2;
    document.querySelector(".ResultNumber").innerHTML = multiplication

    
})