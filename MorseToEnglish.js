
// create an object to map Morse code to English letters
const morseToEnglish = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z"
};

// function to translate a single string of Morse code into English
function morseToEnglishString(morseString) {
    // split the string into individual characters (dots and dashes)
    const morseChars = morseString.split(" ");
    // translate each character using the object, and join them back together
    return morseChars.map(char => morseToEnglish[char]).join("");
}

// function to translate a full sentence of Morse code into English
function morseToEnglishSentence(morseSentence) {
    // split the sentence into individual words (separated by spaces)
    const morseWords = morseSentence.split(" / ");
    // translate each word using the previous function, and join them back together with spaces
    return morseWords.map(word => morseToEnglishString(word)).join(" ");
}

// example usage:
const input = "... --- ... / --.- ..- .. -.-. -.- / ---..";
const output = morseToEnglishSentence(input);
const out=morseToEnglishSentence("-- .- -.-- ..- .-. ..");
console.log(out);
console.log(output); // should output "sos quick 8"