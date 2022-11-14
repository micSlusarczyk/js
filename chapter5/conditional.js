/*/if condition*/
if (wyrażenie) instrukcja;

if (username == null)
    // jeśli zmienna username ma wartość null lub undefined
    username = "Jan Nowak"; //zdefiniuj ją

//Jeżeli zmienna username ma wartość null, undefined, false, 0, "", lub NaN, nadaj jej nową wartość
if (!username) username = "Jan Nowak";

if (!address) {
    address = "";
    message = "Podaj adres pocztowy";
}

// if-else condition
if (condition) {
    instrukcja1;
} else {
    instrukcja2;
}
if (n === 1) {
    console.log("Masz jedną nową wiadomość");
} else {
    console.log(`Masz ${n} nowych wiadomości.`);
}

i = j = 1;
k = 2;
if (i === j) {
    if (j === k) {
        console.log("i jest równe k");
    }
} else {
    console.log("i nie jest równe j");
}

// else-if condition

if (n === 1) {
    // Wykonaj blok kodu nr 1
} else if (n === 2) {
    // Wykonaj blok kodu nr 2
} else if (n === 3) {
    // Wykonaj blok kodu nr 3
} else {
    // Jeżeli żaden warunek nie jest spełniony, wykonaj blok kodu nr 4
}

// switch condition

switch (n) {
    case 1: //Zacznij tutaj, jeżeli n ===1
        // Wykonaj blok kodu nr 1
        break; //Zakończ tutaj
    case 2: //Zacznij tutaj, jeżeli n===2
        // Wykonaj blok kodu nr 2
        break; //Zakończ tutaj
    case 3: //Zacznij tutaj, jeżeli n===3
        // Wykonaj blok kodu nr 3
        break; //Zakończ tutaj
    default:
        //Jeżeli żaden warunek nie jest spełniony
        // Wykonaj blok kodu nr 4
        break;
}

// Przykład switch do przekształcenia zadanej wartości odpowiednio do jej typu

function convert(x) {
    switch (typeof x) {
        case "number": //Przekształcenie liczby dziesiętnej w szesnastkową
            return x.toString(16);
        case "string": //Zwrócenie ciągu znaków ujętego w cudzysłowy
            return '"' + x + '"';
        default:
            //Przekształcenie wartości innego typu w zwykły sposób
            return String(x);
    }
}
