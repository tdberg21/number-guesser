
// var min = 1
// var max = 100

var userMin = document.querySelector('.userMin');
var userMax = document.querySelector('.userMax');
var newRange = document.querySelector('.newRange');
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");
var guessButton = document.querySelector('.guessButton');
var clearButton = document.querySelector('.clearButton');
var resetButton = document.querySelector('.resetButton');
var rangeSet = document.querySelector('.rangeSet')

guessButton.addEventListener('click', changeGuess);
guessButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearField);
resetButton.addEventListener('click', resetGame);
newRange.addEventListener ('click', generateRandomNumber);
guesses.addEventListener('keyup', buttonControl);
userMin.addEventListener('keyup', enableSetRangeButton)

userMin.focus();

function enableSetRangeButton () {
  newRange.disabled = false;
}

function buttonControl () {
  var userInput = guesses.value;
    if (userInput === '') {
      guessButton.disabled = true;
      clearButton.disabled = true;
      resetButton.disabled = true;
    } else if (userInput !== '') {
      guessButton.disabled = false;
      clearButton.disabled = false;
      resetButton.disabled = false;
    }
}

function generateRandomNumber () {
  min = parseInt(userMin.value);
  max = parseInt(userMax.value);
  newRandom = Math.floor(Math.random() * (max - min) + min);
  console.log(newRandom);
  rangeSet.innerText = 'Now guess a number!';
  newRange.disabled = true;
  event.preventDefault();
}

function clearField() {
    guesses.value = '';
    event.preventDefault();
    guesses.focus();
    clearButton.disabled = true;
    guessButton.disabled = true;
  }


function checkGuess() {
    var userInput = parseInt(guesses.value)
    min = parseInt(userMin.value);
    max = parseInt(userMax.value);
    if (userInput === newRandom) {
      lowOrHi.innerText = 'And BOOM goes the dynamite!!!';
      // min = min - 10;
      // max = max + 10;
      // alert('Woohoo!!! The new min is ' + min + '. ' + 'The new maximum is ' + max + '.');
    // newRandom = Math.floor(Math.random() * (max - min) + min);
    // console.log(newRandom)
    } else if (userInput > newRandom) {
      lowOrHi.innerText = 'You are high!';
    } else {
      lowOrHi.innerText = 'That is too low!';
    }
    guesses.focus()
  }


function changeGuess() {
    var userInput = guesses.value
    min = parseInt(userMin.value);
    max = parseInt(userMax.value);
     if (isNaN(userInput)) {
      alert('Please enter a number.')
     }
      else if (userInput > max) {
      alert('Please enter a number that is less than ' + max)
    } else if (userInput < min) {
      alert('Please enter a number that is greater than ' + min)
    } else {
    lastResult.innerText = parseInt(userInput)
  } 
    event.preventDefault();
  }

function resetGame() {
    guesses.value = '';
    // min = parseInt(userMin.value);
    // max = parseInt(userMax.value);
    newRandom = Math.floor(Math.random() * (max - min) + min);
    console.log(newRandom);
    lastResult.innerText = '#';
    lowOrHi.innerText = '';
    clearButton.disabled = true;
    newRange.disabled = false;
    guesses.focus()
    event.preventDefault();
  }



