// DEPENDENCIES =========================================
// start button
var startButton = document.querySelector("#start");
// blanks container
// reset button
// wins element
// losses element

// STATE =========================================
// the current word 
// guessed word (may contain blanks)

// FUNCTIONS =========================================
// start game 
function startGame() {
  // start the timer
  // pick random word as the current word
  // genarate an unguessed word (blanks)
  
}


function startTimer() {
  console.log("starting the timer")
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
  console.log("checking for a win")
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
  // check if the key is in the current word
    // yes? go through the guessed word and replace the blanks with that letter where appropriate
}

// USER INTERACTIONS =========================================
// a user clicks the start button
  // start game

// a user presses a key
  // guess letter (someLetter)
  // 

// a user presses reset scores

// INITIALIZATION =========================================