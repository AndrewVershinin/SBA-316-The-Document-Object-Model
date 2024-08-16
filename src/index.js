// // I'm creating a three-step game. 
// The first stage is to name the correct answer. 
// The second stage is to guess the correct option out of three. 
// The third stage is to flip a coin.

// select all squares
const squares = document.querySelectorAll('.square')
const result = document.getElementById('result')

// random for correct choose
const correctSquare = Math.floor(Math.random() * squares.length)

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
        // 
    });
});