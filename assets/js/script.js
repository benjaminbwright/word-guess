// DEPENDENCIES =========================================
// start button
var startButton = document.querySelector("#start");
// blanks container
// reset button
var resetButton = document.querySelector("#reset");
// wins element
var winsElement = document.querySelector("#wins");
// losses element
var lossesElement = document.querySelector("#losses");
// time left element
var timeLeftElement = document.querySelector("#time-left");

// STATE =========================================
// the current word
var currentWord = "";
// guessed word (may contain blanks)
var guessedWord = "";
// wins
var wins = 0;
// losses
var losses = 0;

// FUNCTIONS =========================================
// start game
function startGame() {
  // start the timer
  startTimer();
  // pick random word as the current word
  currentWord = pickRandomWord();
  console.log("currentWord: ", currentWord);
  // genarate an guessed word (blanks)
  guessedWord = generateGuessedWord(currentWord);
  console.log("guessedWord: ", guessedWord);
}

function startTimer() {
  console.log("starting the timer");
  // set the starting time
  var timeLeft = 10;
  // render starting time
  renderTimeLeft(timeLeft);
  // start the timer running every second
  var timer = setInterval(function () {
    // if there's time left
    if (timeLeft > 0) {
      // counting down on the timer
      timeLeft--;
      // render the updated time on th page
      renderTimeLeft(timeLeft);
      // checking for a win? true or false
      if (checkWin()) {
        // if it's a win
        // you stop the timer
        clearInterval(timer);
        // you win
        youWin();
      }
    } else {
      // otherwise (there's no time left)
      // stop the timer
      clearInterval(timer);
      // you lose
      youLose();
    }
  }, 1000);
}

function checkWin() {
  console.log("checking for a win");
  // return: does the guessed word match the current word ? true or false
  return currentWord === guessedWord;
}

function youLose() {
  // record the loss
  // display a "you lose"
}

function youWin() {
  // record the w
  // display a "you lose"
}

function pickRandomWord() {
  console.log("Picking Random Word");
  // keep the wordbank here
  var wordBank = ["javascript", "jquery", "boolean"];
  // get a random index
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  // get the word at that index from the wordbank
  var randomWord = wordBank[randomIndex];

  return randomWord;
}

function generateGuessedWord(word) {
  // turn the word into blanks return it
  for (var i = 0; i < word.length; i++) {
    guessedWord += "_";
  }
  // render the guessed word

  return "____";
}

function renderGuessedWord() {
  // put the guessed word on the page with blanks
}

function guessLetter(key) {
  console.log(`${key} key received`);
  // check if the key is in the current word
  // yes? go through the guessed word and replace the blanks with that letter where appropriate
}

function resetScores() {
  console.log("clicked reset button");
  wins = 0;
  losses = 0;
  winsElement.textContent = wins;
  lossesElement.textContent = wins;
}

function renderTimeLeft(time) {
  timeLeftElement.textContent = `Time left ${time}`;
}

// USER INTERACTIONS =========================================
// a user clicks the start button
startButton.addEventListener("click", function () {
  // start game
  startGame();
});

// a user presses a key
document.addEventListener("keydown", function (e) {
  console.log(`keydown event: ${e.key}`);
  // guess letter (someLetter)
  guessLetter(e.key);
});
//

// a user presses reset scores
resetButton.addEventListener("click", resetScores);

// INITIALIZATION =========================================
