// Funkcja generatora zwracająca zbiór jednocyfrowych liczb pierwszych
function* oneDigitPrimes() {
    //Wywołanie tej funkcji nie powoduje wykonania jej kodu
    yield 2; //tylko zwrócenie obiektu generatora. Wywołanie metody
    yield 3; //next() generatora powoduje wykonanie kodu do
    yield 5; //momentu, aż instrukcja yield zwróci wynikowy obiekt,
    yield 7; // który ma zwrócić metoda next()
}

//Wywołując funkcję generatora, uzyskujemy obiekt generatora
let primes = oneDigitPrimes();

// Generator jest obiektem iterującym dostarczane wartości
primes.next().value; // =>2
primes.next().value; // =>3
primes.next().value; // =>5
primes.next().value; // =>7
primes.next().done; // => true

//Generator zawiera metodę Symbol.iterator, dzięki której jest iterowalny
primes[Symbol.iterator](); // =>primes

//Z generatora można korzystać tak samo jak z każdego iterowalnego obiektu
[...oneDigitPrimes()]; // => [2,3,5,7]
let sum = 0;
for (let prime of oneDigitPrimes()) sum += prime;
sum; // =>17

//Generator można zdefiniować jako wyrażenie
const seq = function* (from, to) {
    for (let i = from; i < to; i++) yield i;
};
[...seq(3, 5)]; // => [3,4,5]

let o = {
    x: 1,
    y: 2,
    z: 3,
    //Genrator zwracający klucze zawarte w bieżącym obiekcie
    *g() {
        for (let key of Object.keys(this)) {
            yield key;
        }
    },
};
[...o.g()]; // =>["x", "y", "z", "g"]

//Generator zwracający ciąg Fibonacciego
function* fibonacciSequence() {
    let x = 0;
    y = 1;
    for (;;) {
        yield y;
        [x, y] = [y, x + y]; //Przypisanie destrukturyzujące
    }
}

//Funkcja zwracająca wyraz ciągu Fibonacciego
function fibonacci(n) {
    for (let f of fibonacciSequence()) {
        if (n-- <= 0) return f;
    }
}
fibonacci(20); // => 10946

//Funkcja zwracająca n elementów zawartych w zadanym iterowalnym obiekcie
function* take(n, iterable) {
    let it = iterable[Symbol.iterator](); //Utworzenie generatora dla itereowalnego obiektu
    while (n-- > 0) {
        //Pętla wykonująca n obiegów
        let next = it.next(); //Pobranie następnego obiektu z iteratora
        if (next.done) return;
        //Wcześniejszy powrót jeżeli nie ma więcej wartości
        else yield next.value; //W przeciwnym razie zwrócenie wartości
    }
}

//Tablica zawierająca pięć wyrazów ciągu Fibonaciego
[...take(5, fibonacciSequence())]; // [1,1,2,3,5]

//Funkcja zwracająca ułożone naprzemiennie elementy iterowalnych obiektów zawartych w zadanej tablicy
// funcion* zip(...iterables){
//     //Utworzenie iteratora dla każdego iterowalnego obiektu
//     let iterators = iterables.map(i=> i[Symbol.iterator]());
//     let index = 0;
//     while(iterators.length() > 0){ //Pętla wykonywana dopóki są jakieś iteratory
//         if(index >= iterators.length){ //Jeżeli został osiągnięty ostatni iterator ...
//             index = 0; //...następuje powrót do pierwszego
//         }
//         let item = iterators[index].next(); //Odczytanie następnego elementu z następnego iteratora
//         if(item.done){
//             iterators.splice(index,1); //...usuwamy go z tablicy
//         }
//         else{
//             yield item.value; // zwracamy odczytaną wartość
//             index++; //i przechodzimy do następnegfo iteratora
//         }
//     }
// }
//Ułożenie na przemian elementów zawartych w trzech obiektach
[...zip(oneDigitPrimes(), "ab", [0])]; // =>[2, "a", 0,3,"b",5,7]

//Zwracanie kilku elementów sekwencyjnie
function* sequence(...iterables) {
    for (let iterable of iterables) {
        for (item of iterable) {
            yield item;
        }
    }
}

[...sequence("abc", oneDigitPrimes())]; // => ["a", "b", "c", 2,3,5,7]

function* smallNumbers() {
    console.log("Metoda next() wywołana pierwszy raz. Argument pominięty.");
    let y1 = yield 1; //y1 == "b"
    console.log("Metoda next() wywołana drugi raz z argumentem", y1);
    let y2 = yield 2; //y2 == "c"
    console.log("Metoda next() wywołana trzeci raz z argumentem", y2);
    let y3 = yield 3; //y3 == "d"
    console.log("Metoda next() wywołana czwawrty raz z argumentem", y3);
    return 4;
}

let g = smallNumbers();
console.log("Utworzony generator, kod jeszcze nie wykonany");
let n1 = g.next("a"); // n1.value == 1
console.log("Generator zwrócił wartość", n1.value);
let n2 = g.next("b"); // n2.value == 2
console.log("Generator zwrócił wartość", n2.value);
let n3 = g.next("c"); // n3.value == 3
console.log("Generator zwrócił wartość", n3.value);
let n4 = g.next("d"); // n4 == {value:4, done:true}
console.log("Generator zwrócił wartość", n4.value);
