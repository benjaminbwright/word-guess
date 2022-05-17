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

// STATE =========================================
// the current word
// guessed word (may contain blanks)
// wins
var wins = 0;
// losses
var losses = 0;

// FUNCTIONS =========================================
// start game
function startGame() {
  console.log("startGame triggered");
  // start the timer
  // pick random word as the current word
  // genarate an unguessed word (blanks)
}

function startTimer() {
  console.log("starting the timer");
  // set the starting time
  var timeLeft = 10;
  // start the timer running every second
  var timer = setInterval(function () {
    // if there's time left
    if (timeLeft > 0) {
      // counting down on the timer
      timeLeft--;
      // render the updated time on th page

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
  // keep the wordbank here
  // get a random index
  // get the word at that index from the wordbank
}
function generateGuessedWord() {
  // turn the word into blanks return it
  // render the guessed word
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
  console.log("start button clicked");
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
