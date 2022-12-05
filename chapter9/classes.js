// Funkcja fabryczna zwracająca nowy obiekt reprezentujący zakres wartości
function range(from, to) {
    // Za pomocą Object.create() jest tworzony obiekt pochodny
    let r = Object.create(range.methods);
    // Zapisanie początku i końca zakresu (stanu) nowego obiektu
    r.from = from;
    r.to = to;

    // Na koniec zwracany jest nowy obiekt
    return r;
}

// Prototyp definiuje metody dziedziczone przez wszystkie obiekty
range.methods = {
    // Metoda zwracająca wartość true jeśli x zawiera się w zakresie, lub false w przeciwnym razie
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    // Funkcja generatora, dzięki której instancje można iterować
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    // Metoda zwracająca ciąg znaków reprezentujący zkares
    toString() {
        return "(" + this.from + "..." + this.to + ")";
    },
};

// Przykład uzycia obiektu range
let r = range(1, 3); //Utworzenie obiektu
r.includes(2); // => true; liczba 2 zawiera się w zakresie
r.toString(); // => "(1...3)"
[...r]; // => [1,2,3] przekształcenie obiektu w tablicę za pomocą iteratora

// Klasa Range wykorzystująca konstruktor
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    },
};

// Przykład użycia nowej klasy Range
let r1 = new Range(1, 3); // Utworzenie obiektu Range
r.includes(2); //true
r.toString(); // "(1...3)"
[...r]; // [1,2,3]
