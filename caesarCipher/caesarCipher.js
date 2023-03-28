const encrypt = (phrase) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newPhrase = phrase.toLowerCase();
    let encryptedText = "";

    for (let i = 0; i < newPhrase.length; i++) {
        let currentLetter = newPhrase[i];
        if (currentLetter === " ") {
            encryptedText += currentLetter;
            continue;
        }
        let index = alphabet.indexOf(currentLetter);
        let newIndex = index + 13;
        if (newIndex > 25) newIndex -= 26;
        if (newIndex < 0) newIndex += 26;
        if (phrase[i] === phrase[i].toUpperCase()) {
            encryptedText += alphabet[newIndex].toUpperCase();
        } else {
            encryptedText += alphabet[newIndex];
        }
    }
    return encryptedText;
};
const handleClick = () => {
    const input = document.getElementById("input-phrase").value;
    const output = encrypt(input);
    document.getElementById("output-phrase").textContent = output;
};

document
    .getElementById("encrypt-button")
    .addEventListener("click", handleClick);
