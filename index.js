//  Variables
let firstCard = 10;
let secondCard = 1;
let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackjack = false;

let message = "Default Message";

//  Elements
const startEl = document.getElementById("bj__start-btn");
const drawEl = document.getElementById("bj__draw-btn");
const messageEl = document.getElementById("bj__message");
const cardsFigureEl = document.getElementById("cards-figure");
const sumFigureEl = document.getElementById("sum-figure");

//  Default
messageEl.textContent = message;
cardsFigureEl.textContent = "None";
sumFigureEl.textContent = 0;

//  Game Function
function primarySystem() {

    // Main Functionality
    if (sum <= 20 ) {
        message = "Would you like another card?";

    } else if (sum === 21) {
        message = "Woah! You've got Blackjack 🎉";
        hasBlackjack = true;
        drawEl.classList.remove("display-ib");

    } else {
        message = "You're no longer in the game! 👎";
        isAlive = false;
        drawEl.classList.remove("display-ib");

    }

    // Displaying the Message
    if (!messageEl.classList.contains("display")) {
        messageEl.classList.add("display");
    }
    messageEl.textContent = message;

}


// Main 
drawEl.addEventListener("click", function() {

    // Initializing the Additional Card
    let addCard = 10;
    sum += addCard;

    // Changing the Figures
    cardsFigureEl.textContent += " - " + addCard;
    sumFigureEl.textContent = sum;

    // Running the Game Function
    primarySystem();

});

startEl.addEventListener("click", function() {

    // Displaying the Figures
    cardsFigureEl.classList.add("fade-in");
    cardsFigureEl.textContent = firstCard + " - " + secondCard;

    sumFigureEl.classList.add("fade-in");
    sumFigureEl.textContent = sum;

    // Displaying the Additional Button
    drawEl.classList.add("display-ib");

    // Renaming the Primary Button
    startEl.textContent = "Restart"

    // Running the Game Function
    primarySystem();
    
});