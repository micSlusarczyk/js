let sum = 0;
for (let i of [1, 2, 3]) {
    //Odczyt każdej wartości z pętli
    sum += i;
}
sum; // =>6

let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
let data = [1, 2, 3, 4, 5];
Math.max(...data); // =>5

let m = new Map([["jeden, 1"], ["dwa", 2]]);
for (let [k, v] of m) console.log(k, v); //Wyświetlenie 'jeden 1' i 'dwa 2'

//Iterowanie kluczy lub wartości
[...m]; // => [["jeden",1], ["dwa", 2]]: domyślna iteracja
[...m.entries()]; // => [["jeden", 1], ["dwa", 2]]: ten sam efekt daje metoda entries()
[...m.keys()]; // => ["jeden", "dwa"]: metoda keys() iteruje tylko klucze mapy
[...m.values()]; // => [1,2]: metoda values() iteruje tylko wartości mapy

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value); // result.value == 99
}

let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // head == 1
let tail = [...iter]; // tail ==[2,3,4,5]

// Klasa Range
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    //Utworzenie klasy Range funkcjonującej jak zbiór liczb
    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }

    //Metoda zwracająca tekstową reprezentację zakresu w notacji właściwej dla zbioru
    toString() {
        return `{x | ${this.from} x ${this.to}}`;
    }
    //Aby klasa Range była ietrowalna musi zwracać obiekt iteratora
    [Symbol.iterator]() {
        //Każda instancja iteratora musi funkcjonować niezależnie od innych.
        //Dlatego potrzebna jest zmienna, w której będzie zapisywana pozycja iteracji.
        //Początkową wartością jest pierwsza liczba większa lub równa właściwości from
        let next = Math.ceil(this.from); //Następna zwracana wartość
        let last = this.to; //Wartość większa niż this.to nie jest zwracana
        return {
            //Obiekt iteratora
            //Metoda next() sprawia,że this jest obiektem iteratora i zwraca wynik iteracji
            next() {
                return next <= last //Jeżeli ostatnia wartość nie została jeszcze zwrócona...
                    ? { value: next++ } //...zwracamy następną i zwiększamy pozycje.
                    : { done: true }; //W przeciwnym razie informuje że to koniec iteracji
            },
            //Dla wygody można utworzyć iterator który jest iterowalny
            [Symbol.iterator]() {
                return this;
            },
        };
    }
}
for (let x of new Range(1, 10)) console.log(x); //Wyświetlenie liczb od 1 do 10
[...new Range(-2, 2)]; // => [-2,-1,0,1,2]

//funkcja zwracająca obiekt iterujący wyniki i wywołujący dla każdej wartości źródłowej funkcje f()
function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        //Ten obiekt jest iterowalnym iteratorem
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return { value: f(v.value) };
            }
        },
    };
}

//Utworzenie mapy liczb całkowitych i ich kwadratów a następnie przekształcenie jej w tablicę
[...map(new Range(1, 4), (x) => x * x)]; // => [1,4,9,16]

//funkcja zwracająca obiekt iterowalny filtrujący zadaną wartość.Iteruje tylko te elementy dla których predykat przyjmuje wartość true
function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return {
        //Ten obiekt jest iterowalnym iteratorem
        [Symbol.iterator]() {
            return this;
        },
        next() {
            for (;;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v;
                }
            }
        },
    };
}

//Przefiltrowanie zakresu i pozostaiwnie w nim tylko liczb parzytych
[...filter(new Range(1, 10), (x) => x % 2 === 0)]; // =>[2,4,6,8,10]
