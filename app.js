const phrases = [
    "Live and let die",
    "Easy does it",
    "Alone in the crowd",
    "Dig deep",
    "Hang in there"
];
/* ================================= 
  High Level Operant Functions
==================================== */
let missed;
const displayUl = document.getElementById('phrase').children[0];
function setGame() {
    // Populate the hearts
    for (let i = 0; i < 5; i++) {
        hearts[i].firstElementChild.src="images/liveHeart.png";
    }
    // Set the score to 0
    missed = 0;
    // Ensure all keys are enabled
    const disabledKeys = document.getElementsByClassName('li');
    for (let i = 0; i < disabledKeys.length; i++) {
        disabledKeys[i].disabled = false;
        disabledKeys[i].removeAttribute('class');
    }
}


// Populating the phrase display
function getRandomPhrase(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let phrase = [ ...array[randomIndex] ]
    return phrase;
};
function displayPhrase() {
    // Get a phrase
    const phrase = getRandomPhrase(phrases);
    // Clear the display first
    displayUl.innerHTML = "";
    // Populate the phrase
    for (let i = 0; i < phrase.length; i++) {
        let letter = phrase[i];
        let li = document.createElement('li');
        if (letter !== " ") {
                li.textContent = letter;
                li.className = "letter"
            displayUl.appendChild(li);
        } else {
                li.textContent = letter;
                li.className = 'space';
            displayUl.appendChild(li);
        }
    }
}

// Checking for win or lose conditions
function checkWin() {
    let correctLetters = document.getElementsByClassName('show');
    
    if (missed >= 5) {
        overlay.removeAttribute('style');
        overlay.className = "lose";
        overlay.firstElementChild.textContent = "You Lose!";
    } else if ( correctLetters.length === letters.length ) {
        overlay.removeAttribute('style');
        overlay.className = "win";
        overlay.firstElementChild.textContent = "You Win!";
    }
}
/* ================================= 
  Game System
==================================== */
const overlay = document.getElementById('overlay');
const start = document.getElementsByClassName('btn__reset')[0];
// Reveal and start the game
start.addEventListener('click', () => {
    overlay.style.display = "none";
    displayPhrase();
    setGame();
});

const letters = document.getElementsByClassName('letter'); 
const hearts = document.getElementsByClassName('tries');
// Check every hidden letter, show the matching ones, update the score, and take a heart away <3
// Check if you've won
const checkLetter = (check) => {
    let isCorrect = false;
    // check every letter and show matching ones
    for (let letter of letters) {
        let eachLetter = letter.textContent.toLowerCase();
        if (eachLetter === check) {
            letter.className = "letter show";
            isCorrect = true;
        }
    }
    // update the score
    if (!isCorrect) {
        missed++;
        //and take a heart away
        hearts[missed - 1].firstElementChild.src="images/lostHeart.png";
        
        return null
    } else {
        return check;
    }
}

const keyboard = document.getElementById('qwerty');
// keyboard clicks run the checkLetter function
keyboard.addEventListener('click', (event) => {
    if ( event.target.tagName === "BUTTON") {
        let key = event.target;
            key.className = "chosen";
            key.disabled = true;
        checkLetter(key.textContent);
        checkWin()
    }
});
