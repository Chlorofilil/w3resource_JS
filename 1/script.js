const toDay = new Date();
    let day = toDay.getDay();
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    console.log(`Today is : ${dayList[day]}.`)

let hour = toDay.getHours();
let minutes = toDay.getMinutes();
let second = toDay.getSeconds();
let timeset;
if(hour >=12) {
    timeset = "PM";
}else {
    timeset = "AM";
}

console.log(`Time is ${hour} ${timeset} : ${minutes} : ${second}`)