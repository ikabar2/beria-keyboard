const inputText = document.getElementById('inputText');
const keyboard = document.getElementById('keyboard');
const toggleCaseButton = document.getElementById('toggleCase');
const copyButton = document.getElementById('copyButton');
const saveButton = document.getElementById('saveButton');
const spaceButton = document.getElementById('spaceButton');
const enterButton = document.getElementById('enterButton');
const backButton = document.getElementById('backButton');
const output = document.getElementById('output');

// the lowercase Zaghawa alphabet characters 
const zaghawaCharactersLower = [
    "ⴰ", "ⴱ", "ⴲ", "ⴳ", "ⴴ", "ⴵ", "ⴶ", "ⴷ", "ⴸ", "ⴹ",
    "ⴺ", "ⴻ", "ⴼ", "ⵊ", "ⵋ", "ⵌ",
    "ⴼ", "ⴽ", "ⴾ", "ⴿ",
    "ⵀ", "ⵁ", "ⵂ", "ⵃ",
    "ⵄ", "ⵅ", "ⵆ", "ⵇ", "ⵈ", "ⵉ"

];


// Function to load the lowercase Zaghawa alphabet characters
function loadCharacters() {
    createKeyboardButtons(zaghawaCharactersLower);
}

function createKeyboardButtons(characters) {
    keyboard.innerHTML = '';
    characters.forEach(char => {
        const button = document.createElement('button');
        button.textContent = char;
        button.addEventListener('click', () => insertCharacter(char));
        keyboard.appendChild(button);
    });
}

function insertCharacter(char) {
    inputText.value += char;
}

function copyText() {
    inputText.select();
    document.execCommand('copy');
}

function saveText() {
    // to save the text to a file or server.

    alert('Text saved ().');
}

function removeLastCharacter() {
    inputText.value = inputText.value.slice(0, -1);
}

//loadCharacters); 
copyButton.addEventListener('click', copyText);
saveButton.addEventListener('click', saveText);
spaceButton.addEventListener('click', insertCharacter.bind(null, ' '));
enterButton.addEventListener('click', insertCharacter.bind(null, '\n'));
backButton.addEventListener('click', removeLastCharacter);

inputText.addEventListener('input', () => {
    output.textContent = inputText.value;
});

// Load characters 
loadCharacters();