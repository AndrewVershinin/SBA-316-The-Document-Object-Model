// // I'm creating a three-step game. 
// The first stage is to name the correct answer. 
// The second stage is to guess the correct option out of three. 
// The third stage is to flip a coin.


// elements for the square guessing game
// select all squares
const squares = document.querySelectorAll('.square');
const result = document.getElementById('result');
// random for correct choose
let correctSquare = Math.floor(Math.random() * squares.length);
const squareGame = document.getElementById('square-game');

// elements for the planet guessing game
const correctAnswer = "Mercury";
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');

// elements for the coin toss game
const coinTossGame = document.getElementById('toss-coin');
const coinInput = document.getElementById('coin-input');
const coinTossBtn = document.getElementById('toss-coin-btn');
const coinFeedback = document.getElementById('coin-feedback');

// elements for registration
const registration = document.getElementById('registration');
const fullName = document.getElementById('fullname');
const email = document.getElementById('email');

// EventListener for the planet game
submitBtn.addEventListener('click', () => {
    // get the user's answer
    const userAnswer = userInput.value.trim();

    // check if the answer is correct
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = `Correct! The first planet is ${correctAnswer}.`;
        feedback.style.color = "green";
        submitBtn.remove()
        // hide the planet guessing game after correct answer and show square game
        // document.getElementById('planet-game').style.display = 'none';
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

// reset the square game function
function resetSquareGame() {
    correctSquare = Math.floor(Math.random() * squares.length);
    squares.forEach(square => {
        square.classList.remove('correct', 'incorrect');
    });
        
}

// add click to each square for the square game
squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        // if user guessed correctly
        if (index === correctSquare) {
            square.classList.add('correct');
            result.textContent = "Correct! You gueesed the right square!";
            square.innerHTML = `<img src="./humster.png" alt="correct!">`;
            // hide the square game and show the coin toss game
            // squareGame.style.display = 'none';
            coinTossGame.style.display = 'block';
        // if user guessed incorrectly
        } else {
            square.classList.add('incorrect');
            result.textContent = "Incorrect! Never give up! Try again!"
            // reset the square game with a new random
            
            setTimeout( () => {
                resetSquareGame()
            }, 1500);
        }
    });
});


// function to generate the toss a coin game
function resetCoinTossGame() {
    coinInput.value = "";
    coinInput.focus() 
    return coinResult = Math.random() < 0.5 ? 'heads' : 'tails';
}

// eventListener for the coin toss game 
coinTossBtn.addEventListener('click', () => {
    // get the user's guess
    const userGuess = coinInput.value.trim().toLowerCase();

    // generate a random result (heads or tails)
    const coinResult = Math.random() < 0.5 ? 'heads' : 'tails';

    
    const oldH1 = document.querySelector('h1');
    const newH1 = document.createElement('h1');

    // create the share with your friend button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with your friend';
    shareButton.className = 'share-button';
  



    // check if the user's guess is correct
    if (userGuess === coinResult) {
        coinFeedback.textContent = `Correct! It was ${coinResult}`;
        coinFeedback.style.color = 'green';
        coinTossBtn.remove();
        setTimeout( () => {
            document.getElementById('planet-game').style.display = 'none';
            squareGame.style.display = 'none';
            coinTossGame.style.display = 'none';
            oldH1.remove();
            newH1.textContent = 'Please provide your information below to get a super price';
            document.body.appendChild(newH1);
            document.body.insertBefore(newH1, document.body.firstChild);
            document.body.appendChild(shareButton);
            registration.style.display = 'block';
        }, 2000);
    } else {
        coinFeedback.textContent = `Incorrect! It was ${coinResult}. Never give up! Try again!`
        coinFeedback.style.color = 'red';
        // clear the input field
        resetCoinTossGame()
    }
});

// function playerNameValidation (playerName) {
//     if (playerName)
// }



