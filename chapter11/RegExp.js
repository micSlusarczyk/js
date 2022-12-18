// Metoda search() zwraca pozycję pierwszego dopasowania lub -1 jeżeli dopasowanie nie zostało znalezione
"JavaScript".search(/script/iu); // => 4
"Python".search(/script/iu); // => -1

// Metoda replace() wyszukuje i zastępuje tekst
//Fragment ciągu, nizależnie od wielkości tworzących go liter, jest zamieniany na poprawne słowo
text.replace(/javascript/gi, "JavaScript");

//Zmienna zawiera cudzysłów, następujące po nim znaki inne niż cudzysłowy (przechwytywane przez wyrażenie) oraaz drugi cudzysłów
let quote = /"([^"]*)"/g;
//Zastąpienie cudzysłowów prostych ostrokątnymi
'Powiedział: "stój!"'.replace(quote, "<<$1>>"); // => 'Powiedział <<stój!>>'

//Metoda match()
"7 plus 8 równa się 15".match(/\d+/g); // => ["7", "8", "15"]

let vowel = /[aeiouy]/y; // "Lepkie" dopasowanie samogłosek
"test".match(vowel); // => null: "test" nie zaczyna się od samogłoski
vowel.lastIndex = 1; // Określenie innej pozycji wyszukiwania
"test".match(vowel)[0]; // e: samogłoska została znaleziona na pozycji 1
vowel.lastIndex; // =>2: właściwość lastIndex jest automatycznie aktualizowana
"test".match(vowel); // => null: na pozycji 2 nie ma samogłoski
vowel.lastIndex; // => 0: właściwość lastIndex jest resetowana po nieudanym dopasowaniu

//Metoda matchAll()
//Jeden lub kilka znaków Unicode umieszczonych pomiędzy granicami słowa
const words = /\b\p{Alphabetic}+\b/gu;
const text = "To jest prymitywny test metody matchAll()";
for (let word of text.matchAll(words)) {
    console.log(`Znalezione słowo '${word[0]}' na pozycji ${word.index}`);
}

//Metoda split()
"123,456,789".split(","); // => ["123", "456", "789"]
const htmlTag = /<([^>]+)>/; // Znak <, po nim dowolna liczba innych znaków i na końcu znak >.
"Testing<br/>1,2,3".split(htmlTag); // =>["testing", "br/", "1,2,3"]

//Wyszukiwanie wszystkich pięciocyfrowych liczb.
let zipcode = new RegExp("\\d{5}", "g");
let exactMatch = /JavaScript/;
let caseInsensitive = new RegExp(exactMatch, "i");

//Metoda exec()
let pattern = /Java/g;
let text1 = "JavaScitpt > Java";
let match;
while ((match = pattern.exec(text1)) !== null) {
    console.log(`Matched ${match[0]} at $ {match.index}`);
    console.log(`Next search begins at ${pattern.lastIndex}`);
}
