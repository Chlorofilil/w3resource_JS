let celsiusInput = document.querySelector(".Celsius");
let fahrenheitInput = document.querySelector(".Fahrenheit");
let timeoutId = null;

celsiusInput.addEventListener("input", function(e){
    let input = e.target.value;

    if(timeoutId){
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(function() {
        let temperatuResult = (input * 9 / 5) + 32;
        let paragraph = document.createElement("p")
        paragraph.textContent = `${input}°C is ${temperatuResult} °F.`

        document.querySelector(".fahrenheitResult").innerHTML = "";
        document.querySelector(".fahrenheitResult").appendChild(paragraph)
    }, 1000);
    
});

fahrenheitInput.addEventListener("input", function(e){
    let input = e.target.value

    if(timeoutId){
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(function() {
        let celsiumResult = (input - 32) * 5/9;
        let paragraph = document.createElement("p")
        paragraph.textContent = `${input}°F is ${celsiumResult} °C.`

        document.querySelector(".celsiusResult").innerHTML = "";
        document.querySelector(".celsiusResult").appendChild(paragraph)
    }, 1000);
});