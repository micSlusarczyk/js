// while
let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

// do while
function printArray(a) {
    let len = a.lenght,
        i = 0;
    if (len === 0) {
        console.log("Pusta tablica");
    } else {
        do {
            console.log(a[i]);
        } while (++i < len);
    }
}

// for

for (let count = 0; count < 10; count++) {
    console.log(count);
}

let i,
    j,
    sum = 0;
for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}
console.log(sum); //165

// for of

let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    sum1 = 0;
for (let element of data) {
    sum1 += element;
}

console.log(sum1); //45

// for of with objects

/*let o = { x: 1, y: 2, z: 3 };
for (let element1 of o) {
    console.log(element1); //Zgłoszenie wyjątku TypeError, ponieważ obiekt o nie jest interowalny
}*/

//wersja z metodą Object.keys

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let k of Object.keys(o)) {
    keys += k;
}
console.log(keys); //xyz

// iterowanie wartości
let sum2 = 0;
for (let v of Object.values(o)) {
    sum2 += v;
}
console.log(sum2); //6

// przetwarzanie nazw i wartości

let pairs = "";
for (let [k, l] of Object.entries(o)) {
    pairs += k + l;
}

console.log(pairs); //x1y2z3

// for of z ciągami znaków

let frequency = {};
for (let letter of "missisipi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency); // m:1 i:4 s:4 p:2

// throw

function factorial(x) {
    // Zgłoszenie wyjątku, gdy argument jest niewłaściwy
    if (x < 0) throw new Error("x nie może być liczbą ujemną");
    let f;
    for (f = 1; x > 1; f *= x, x--);
    return f;
}

console.log(factorial(4)); //24
// console.log(factorial(-4)); //Error

// try catch
try {
    //Prośba o podanie liczby
    let n = Number(prompt("Podaj dodatnią liczbę całkowitą", ""));
    // Wyliczenie silni przy założeniu, że podana wartość jest poprawna
    let f1 = factorial(n);
    //Wyświetlenie wyniku
    alert(n + "! = " + f1);
} catch (ex) {
    // Jeżeli podamy niepoprawną wartość zostanie wykonany ten blok kodu
    alert(ex); //Wyświetlenie informacji o błędzie
}

// Deklaracje
const TAU = 2 * Math.PI;
let radius = 3;
var circumference = TAU * radius;

// Deklaracje funkcje
function area(radius) {
    return Math.PI * radius * radius;
}

// Deklaracja Class

class Circle {
    constructor(radius) {
        this.r = radius;
    }
    area() {
        return Math.PI * radius * radius;
    }
    circumference() {
        return 2 * Math.PI * this.r;
    }
}
