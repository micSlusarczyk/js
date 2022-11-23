// Literały tablicowe

let empty = []; //Tablica bez elementów
let primes = [2, 3, 5, 7, 11]; //Tablica złożona z pięciu elementów liczbowych
let misc = [1.1, true, "a"]; //Trzy elementy różnych typów i końcowy przecinek

// Tablica rozrzedzona

let count = [1, , 3]; //Istnieją elementy o indeksach 0 i 2. Nie ma elementu o indeksie 1
let undefs = [, ,]; //Tablica bez elementów, ale o długości 2

// Operator rozciągania
let a = [1, 2, 3];
let b = [0, ...a, 4]; //b==[0,1,2,3,4]

let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; //Modyfikacja kopii tablicy nie wpływa na oryginał
original[0]; // ==> 1

// Konstruktor Array()
let a1 = new Array(); // bez argumentów
let a2 = new Array(10); //Z jednym argumentem liczbowym opisującym długość tablicy
let a3 = new Array(5, 4, 3, 2, 1, "testy, testy"); //Jawne umieszczenie w argumentach dwa lub więcej elementów

// Array.of()
Array.of(); // ==> []; funkcja bez argumentów zwracająca pustą tablicę
Array.of(10); // ==> [10]; utworzenie tablicy z jednym liczbowym elementem
Array.of(1, 2, 3); // ==> [1,2,3]

// Odczytywanie i zapisywanie elementów tablicy
let a4 = ["Świecie!"]; //Na początku tablica zawiera jeden element
let value = a[0]; //Odczytanie elementu o indeksie 0
a4[1] = 3.14; //Zapisanie elementu o indeksie 0
let i = 2;
a4[i] = 3; //Zapisanie elementu o indeksie 2
a4[i + 1] = "Witaj, "; //Zapisanie elementu o indeksie 3
a4[a4[i]] = a4[0]; //Odczytanie elementów o indeksach 0 i 2, zapisanie elementu o indeksie 3

// Długość tablicy
[].length[("a", "b", "c")].length; // ==> 0; ta tablica nie ma elementów // ==> 3; największy indeks jest równy 2, długość jest równa 3

let a5 = [1, 2, 3, 4, 5]; //Początkowa tablica złożona z pięciu elementów
a5.length = 3; //Teraz tablica ma postać [1,2,3]
a5.length = 0; //Usunięcie wszystkich elementów. Tablica ma postać []
a5.length = 5; // Długość jest równa 5 ale tablica nie ma elementów, tak jak utworzona za pomocą new Array(5)

// Dodawanie i usuwanie elementów tablicy
let a6 = []; //Początkowa, pusta tablica
a6[0] = "zero"; //Dodanie elementu
a6[1] = "jeden";

// Aby dodać element na końcu tablicy, można użyć metody push()
let a7 = [];
a7.push("zero"); // ==> a = ["zero"]
a7.push("jeden", "dwa"); // ==> a = ["zero", "jeden", "dwa"]

let a8 = [1, 2, 3];
delete a8[2]; //Teraz tablica nie ma elementu o indeksie 2
2 in a8; // ==> false; element o indeksie 2 nie jest zdefiniowany
a8.length; // ==> 3; usunięcie elementu nie wpływa na długość tablicy

// Iterowanie tablic

let letters = [..."Witaj, śmiecie!"]; //Tablica znaków
let string = "";
for (let letter of letters) {
    string += letter;
}
string; // ==> "Witaj świecie"

let everyother = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter; //Litery o parzystych indeksach
}
everyother; // "Wtj wei!"

let uppercase = "";
letters.forEach((letter) => {
    //Strzałkowa składnia
    uppercase += letter.toUpperCase();
});
uppercase; // "WITAJ ŚWIECIE"

let vowels = "";
for (let i = 0; i < letters.length; i++) {
    //Dla każdego elementu tablicy
    let letter = letters[i]; //Uzyskaj jego indeks
    if (/[aeiou]/.test(letter)) {
        vowels += letter; //Jeśli samogłoska zapamiętaj ja
    }
}
vowels; // ==> "iaieie"

// Tablice wielowymiarowe
// Utworzenie dwuwymiarowej tablicy
let table = new Array(10); //Dziesięć wierszy tablicy
for (let i = 0; i < table.length; i++) {
    table[i] = new Array(10); //Każdy wiersz składa się z 10 kolumn
}

// Zainicjowanie tablicy
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}

//Przykład użycia dwuwymiarowej tablicy do wyliczenia 5*7
table[5][7] // ==> 35
