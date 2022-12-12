const phrases = [
    "Live and let die",
    "Easy does it",
    "Alone in the crowd",
    "Dig deep",
    "Hang in there"
];

function getRandomPhrase(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let phrase = [ ...array[randomIndex] ]
    return phrase
};

let phrase = getRandomPhrase(phrases);
const overlay = document.getElementById('overlay'); 
const start = document.getElementsByClassName('btn__reset')[0];
// First hide the overlay
start.addEventListener('click', () => {
    overlay.style.display = "none";
});

const displayUl = document.getElementById('phrase');
// Display all the letters of the phrase
function displayPhrase() {
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== " ") {
            let letter = phrase[i];
            let li = document.createElement('li');
                li.textContent = letter;
                li.className = "letter"
            displayUl.appendChild(li);
        }
    }
}
displayPhrase();

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

// Check every hidden letter, show the matching ones, update the score, and take a heart away <3
// Check if you've won
const letters = document.getElementsByClassName('letter'); 
const hearts = document.getElementsByClassName('tries');
let missed = 0;
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
        let letter = event.target.textContent;
        checkLetter(letter);
        checkWin()
    }
});
