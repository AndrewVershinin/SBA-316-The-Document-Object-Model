// // I'm creating a three-step game. 
// The first stage is to name the correct answer. 
// The second stage is to guess the correct option out of three. 
// The third stage is to flip a coin.


// elements for the square guessing game
// select all squares
const squares = document.querySelectorAll('.square');
const result = document.getElementById('result');
// random for correct choose
const correctSquare = Math.floor(Math.random() * squares.length);
const squareGame = document.getElementById('square-game');

// elements for the planet guessing game
const correctAnswer = "Mercury";
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');


submitBtn.addEventListener('click', () => {
    // get the user's answer
    const userAnswer = userInput.value.trim();

    // check if the answer is correct
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = `Correct! The first planet is ${correctAnswer}.`;
        feedback.style.color = "green";
        // hide the planet guessing game after correct answer and show square game
        document.getElementById('planet-game').style.display = 'none';
        squareGame.style.display = 'block';
    } else {
        feedback.textContent = "Incorrect! Never give up!";
        feedback.style.color = "red";
        // clear the input field
        userInput.value = "";
        // focus on the input field for the next attempt
        userInput.focus();
    }
});


// add click to each square
squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        // if user guessed correctly
        if (index === correctSquare) {
            square.classList.add('correct');
            result.textContent = "Correct! You gueesed the right square!";
        // if user guessed incorrectly
        } else {
            square.classList.add('incorrect');
            result.textContent = "Incorrect! Never give up!"
        }
        // disable all squares after guessing
        squares.forEach(sq =>
            sq.removeEventListener('click', () => {

            })
        );
    });
});



