function diference(inputNumber){
    if(inputNumber >= 13){
        return  (inputNumber - 13) * 2;
    } else {
        return 13 - inputNumber;
    }
}

console.log(diference(20))
console.log(diference(10))