function getRandomInt(max) {
    const addNumber = Number(window.prompt("Type a number betwwn 1 and 10", ""));

    let randomNumber = Math.floor(Math.random() * max);

    addNumber === randomNumber ? console.log("You ges right number!") : console.log("Sorry. try again.")
    console.log("the right number was " + randomNumber + ".")
  }

console.log(getRandomInt(10))

