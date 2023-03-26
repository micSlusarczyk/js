const encrypt = (phrase, num) => {
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
        let newIndex = index + num;
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
console.log(encrypt("TEST", 13));
