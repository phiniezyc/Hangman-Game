//Game Mechanics:

/*
3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

    5. Press any key to get started!

    6. Wins: (# of times user guessed the word correctly).

* If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

* As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it. */


//Onkey triggers game to start: letter comes up w/ ____ etc
// Onkey checks to see if letter guessed
// If correct then reveals that letter
// If incorrect then puts it in array to be displayed as incorrect


/* We take our Names put in Array */
var atlantaSportsNames = ["Jones", "Nixon", "Freeman", "Vick", "Bream", "Wilkins", "Tuggle", "Glavine", "Smoltz", "Lopez"];

/*var possibleGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];*/
/* We take our Array and set it to index position Math.floor/random to get random number--this will give us a random position within the array. We then set it to a variable to use later.*/
var nameToGuess = atlantaSportsNames[Math.floor(Math.random() * atlantaSportsNames.length)];

console.log(nameToGuess);



var numberOfCharacters = "";

for (i = 0; i < nameToGuess.length; i++) {
    numberOfCharacters += " _ "
}

document.getElementById("WhereGamePutsClue").innerHTML = numberOfCharacters;



/*Takes user keys entered and adds them to userKeysPressed array */
var userKeysPressed = [];
document.onkeydown = function(event) {
   var keyPress;

   if (typeof event !== "undefined") {
        keyPress = event.keyCode;
   } else if (event) {
       keyPress = event.which;
   }
   userKeysPressed.push(String.fromCharCode(keyPress));
   return false; //Prevents the default action
}
console.log(userKeysPressed);




//Splits and puts indivual name letters in Array to compare
var lettersToCheck = nameToGuess;
var wordLettersArray = [];
function checkAnswer() {
    for (var i = 0; i < lettersToCheck.length; i++) {
        wordLettersArray.push(lettersToCheck.charAt(i));

    }

}
checkAnswer();
console.log(wordLettersArray);



function compareUserInputToAnswer() {
    for (var i = 0; wordLettersArray.length; i++) {
        if wordLettersArray[i] === 

    }

}


