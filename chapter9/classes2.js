// Słowo kluczowe class
class Range {
    constructor(from, to) {
        // Zapisanie początku i końca zakresu nowego obiektu
        this.from = from;
        this.to = to;
    }

    // Metoda zwracająca wartość true, jeżeli x zawiera się w zakresie lub false w przeciwnym razie
    includes(x) {
        return this.from <= x && x <= this.to;
    }
    // Funkcja generatora
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    //Metody statyczne
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+\))$/);
        if (!matches) {
            throw new Error(
                `Nie można zinterpretować ciągu "${s}" jako obiektu Range`
            );
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }
    // Metoda zwracająca ciąg znaków reprezentujących zakres
    toString() {
        return `(${this.from} ...${this.to})`;
    }
}

// Przykład uzycia klasy Range
let r = Range(1, 3); //Utworzenie obiektu
r.includes(2); //true
r.toString(); // "(1..3)"
[...r]; // [1,2,3]

// Wywołanie za pomocą konstruktora nie instancji
let r1 = Range.parse("(1...10)"); //Zwrócenie nowego obiektu Range
r1.parse("(1...10)"); //TypeError; r.parse nie jest funkcją

// Podklasa klasy Range
function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}
// Prototyp klasy Span musi dziedziczyć cechy prototypu klasy Range
Span.prototype = Object.create(Range.prototype);

// Konstruktor Range.prototype.constructor ma nie być dziedziczony dlatego definiujemy własną właściwość Konstruktor
Span.prototype.constructor = Span;

// Własna metoda toString() klasy Span nadpisuje metodę toString() klasy Range
Span.prototype.toString = function () {
    return `(${this.from}...+${this.to - this.from})`;
};

// Tworzenie podklas za pomocą słów extends i super
// Podklasa klasy Array
class EZArray extends Array {
    get first() {
        return this[0];
    }
    get last() {
        return this[this.length - 1];
    }
}

let a = new EZArray();
a instanceof EZArray; // true: a jest instancją nadklasy
a instanceof Array; // true
a.push(1,2,3,4); //a.length ==4
a.pop(); // 4
a.first(); //1
a.last(); //3
a[1]; //2
Array.isArray(a); //true
EZArray.isArray(a); //true podklasa dziedziczy również metody statyczne
