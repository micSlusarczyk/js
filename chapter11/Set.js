let s = new Set(); //Nowy pusty zbiór
let t = new Set([1, s]); //Nowy zbiór z dwoma elementami

let t1 = new Set(s); // Nowy zbiór zawierający kopie elementów obiektu s
let unique = new Set("Mississippi"); //Cztery elementy "M", "i", "s", "p"

unique.size; //4 => liczba elementów

s.size; // => 0
s.add(1); // Dodanie liczby
s.size; // => 1 element
s.add(1); // Dodanie tej samej liczby
s.size; // => 1 wilekość zbioru się nie zmieniła
s.add(true); // DOdanie innej wartości. Typy można mieszać
s.size; // =>2
s.add([1, 2, 3]); //Dodanie tablicy
s.size; // => 3 do zbioru została dodana cała tablica a nie jej osobne elementy
s.delete(1); // usunięcie elementu o wartości 1
s.size; // =>2
s.delete("test"); // false; zbiór nie zawera ciągu "test"
s.delete(true); // true
s.delete([1, 2, 3]); //false tablica w zbiorze jest innym obiektem
s.size; //1
s.clear(); //Usunięcie ze zbioru wszystkich elementów
s.size; // =>0

let oneDigitPrimes = new Set([2, 3, 5, 7]);
oneDigitPrimes.has(2); //true
oneDigitPrimes.has(3); //true
oneDigitPrimes.has(4); //false
oneDigitPrimes.has(5); //true

//Klasa Set jest iterowalna co oznacza że elementy zbioru można wyliczać za pomocą pętli for/of

let sum = 0;
for (let p of oneDigitPrimes) {
    //Pętla iterująca jednocyfrowe liczby pierwsze
    sum += p; //Sumowanie elementów
}
sum; // => 17: 2+3+5+7

//Zamiana w tablice przy pomocy operatora rozciągania
[...oneDigitPrimes]; // => [2,3,5,7]
Math.max(...oneDigitPrimes); // 7

// Metoda forEach()
let product = 1;
oneDigitPrimes.forEach((n) => {
    product *= n;
});
product; // => 210: 2 * 3 * 5 * 7
