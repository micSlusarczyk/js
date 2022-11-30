// Deklaracje funkcji
// Funkcja wyświetlająca nazwy i wartości wszystkich wartości obiektu o. Zwraca wartość undefined
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}
// Funkcja wyliczająca odległość pomiędzy dwoma punktami (x1,y1) i (x2,y2) w kartezjańskim układzie współrzędnych
function distance(x1, y1, x2, y2) {
    let dx = x2 - x2;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Funkcja rekurencyjna wyliczająca silnię
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
console.log(factorial(5)); // ==> 5! == 120

// Wyrażenia funkcyjne
// Wyrażenie wyliczające kwadrat argumentu
const square = function (x) {
    return x * x;
};

// Wyrażenie funkcyjne może zawierać nazwę przydatną w rekurencji
const f = function fact(x) {
    if (x <= 1) return 1;
    else return x * fact(x - 1);
};
console.log(f(5)); // ==> 120

// Wyrażenie funkcyjne można umieszczać w argumencie innej funkcji
[3, 2, 1].sort(function (a, b) {
    return a - b;
});

// Wyrażenie funkcyjne można wywoływać natychmiast po zdefiniowaniu
let tensquared = (function (x) {
    return x * x;
})(10);
console.log(tensquared); // ==> 100

// Funckcje strzałkowe
const sum = (x, y) => {
    return x + y;
};
console.log(sum(5, 4)); // ==> 9

const sum1 = (x, y) => x + y;
const polymonial = (x) => x * x + 2 * x + 3; //Prettier dodaje nawias (przykład z jednym parametrem, nawias niepotrzebny)
const constantFunc = () => 42;
const f1 = (x) => {
    return { value: x }; // OK:funkcja f1() zwraca obiekt
};
const g1 = (x) => ({ value: x }); // OK:funkcaj g1() zwraca obiekt
const h1 = x => {value: x}; //Źle: funkcja h1() niczego nie zwraca
const i1 = x => {v:x, w: x}; // Błąd skłądniowy