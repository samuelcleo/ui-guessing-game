const phrases = [
    "Live and let die",
    "Still waters run deep",
    "Alone in the crowd",
    "Dig deep",
    "Cross that bridge when I come to it"
];
let missed = 0;

const getRandomPhrase = (array) => {
    let randomIndex = Math.floor(Math.random() * (array.length + 1))
    return [...array[randomIndex]]
};

const start = document.getElementsByClassName('btn__reset')[0];
const keyboard = document.getElementById('qwerty');
const displayUl = document.getElementById('phrase');
let phrase = getRandomPhrase(phrases);

start.addEventListener('click', () => {
    document.querySelector('.overlay');
    overlay.style.display = "none";
});

for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== " ") {
        let letter = phrase[i];
        let li = document.createElement('li');
            li.textContent = letter;
            li.className = "letter"
        displayUl.appendChild(li);
    }
}

