// DEPENDENCIES =========================================
// start button
var startButton = document.querySelector("#start");
// blanks container
// reset button
var resetButton = document.querySelector("#reset")
// wins element
var winsElement = document.querySelector("#wins")
// losses element
var lossesElement = document.querySelector("#losses")

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
  startTimer()
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
  // start the timer running every second
  // if there's time left
  // counting down on the timer
  // render the updated time on th page
  // checking for a win? true or false
  // if it's a win
  // you stop the timer
  // you win
  // otherwise (there's no time left)
  // stop the timer
  // you lose
}

function checkWin() {
  console.log("checking for a win");
  // return: does the guessed word match the current word ? true or false
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
  console.log("Picking Random Word")
  // keep the wordbank here
  var wordBank = [
    "javascript",
    "jquery",
    "boolean"
  ]
  // get a random index
  var randomIndex = Math.floor(Math.random() * wordBank.length);
  // get the word at that index from the wordbank
  var randomWord = wordBank[randomIndex];

  return randomWord;
}

function generateGuessedWord(word) {

  // turn the word into blanks return it
  for (var i = 0; i < word.length; i++) {
    guessedWord +=
  }
  // render the guessed word
  
  return "____"
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
