let randomNumber = parseInt(Math.floor(Math.random() * 100) + 1)

const userInput = document.getElementById('guessField');  //userinput
const submitGuess = document.getElementById('subt');

const previousGuesses = document.querySelector('.guesses');  //guessSlot
const remainingAttempts = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prev_guesses = [];
let attempts = 1;  //numguess
let playGame = true;

if(playGame) {
    submitGuess.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(userInput) {
    if (userInput === '' || isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return false;
    }
    else{
        if(attempts === 10){
            DisplayMessage(`Game Over! The number was ${randomNumber}`);
            endgame();
            DisplayGuess(userInput);
        } else{
            prev_guesses.push(userInput);
            checkGuess(userInput);
            DisplayGuess(userInput);
        }
    }
}

function checkGuess(userInput) {
    if(userInput === randomNumber){
        DisplayMessage(`Congratulations! You guessed the number ${randomNumber} correctly!`);
        endgame();
    }
    else if(userInput < randomNumber){
        DisplayMessage(`Your guess is too low!`);
    }
    else if(userInput > randomNumber){
        DisplayMessage(`Your guess is too high!`);
    }
}

function DisplayGuess(){
    userInput.value = ''; //clear input field because user already guessed
    previousGuesses.innerHTML = `${prev_guesses.join(', ')}`;
    remainingAttempts.innerHTML = `Remaining Attempts: ${10 - attempts}`;
    attempts++;
}

function DisplayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.getElementById('newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.floor(Math.random() * 100) + 1);
        prev_guesses = [];
        attempts = 1;
        previousGuesses.innerHTML = '';
        remainingAttempts.innerHTML = `Remaining Attempts: ${11 - attempts}`;
        lowOrHigh.innerHTML = '';
        startOver.removeChild(p);
        userInput.removeAttribute('disabled');
        submitGuess.removeAttribute('disabled');
        playGame = true;
    });
}

