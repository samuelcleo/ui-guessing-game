const phrases = [
    "Live and let die",
    "Easy does it",
    "Alone in the crowd",
    "Dig deep",
    "Hang in there"
];

const getRandomPhrase = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    let phrase = [ ...array[randomIndex] ]
    return phrase
};
let phrase = getRandomPhrase(phrases);

const start = document.getElementsByClassName('btn__reset')[0];
start.addEventListener('click', () => {
    document.querySelector('.overlay');
    overlay.style.display = "none";
});

const keyboard = document.getElementById('qwerty');
const displayUl = document.getElementById('phrase');

for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== " ") {
        let letter = phrase[i];
        let li = document.createElement('li');
            li.textContent = letter;
            li.className = "letter"
        displayUl.appendChild(li);
    }
}

let missed = 0;
function checkLetter (check) {
    const letters = document.getElementsByClassName('letter');
    for (let letter of letters) {
        let eachLetter = letter.textContent.toLowerCase();
        if (eachLetter === check) {
            letter.className = "letter show";
        }
    }
}
keyboard.addEventListener('click', (event) => {
    if ( event.target.tagName === "BUTTON") {
        let letter = event.target.textContent;
        checkLetter(letter);
    }
});