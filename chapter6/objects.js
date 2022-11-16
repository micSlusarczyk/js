// Literały obiektowe

let empty = {}; //Obiekt bez właściwości
let point = { x: 0, y: 0 }; //Dwie właściwości liczbowe
let p2 = { x: point.x, y: point.y + 1 }; //Bardziej złożone wartości
let book = {
    "main title": "JavaScript", //Nazwy właściwości zawierają spację
    "sub-title": "Kompletny przewodnik", // i myślnik, więc muszą być literałami tekstowymi
    for: "dla każdego", //For jest zarezerwowanym słowem, nie można go umieszczać w cudzysłowach

    author: {
        //Wartość tej właściwości jest obiektem
        firstName: "David",
        surname: "Flanagan",
    },
};

// Tworzenie obiektów za pomocą operatora new
let o = new Object(); //Utworzenie pustego obiektu. To samo co {}
let a = new Array(); //Utworzenie pustej tablicy. To samo co[]
let d = new Date(); //Utworzenie obiektu typu Date reprezentującego aktualny czas.
let r = new Map(); //Utworzenie obiektu typu Map dla par klucz-wartość

// Funkcja Object.create()

let o1 = Object.create({ x: 1, y: 2 }); //Obiekt o1 dziedziczy właściwości x i y
o1.x + o1.y; // ==> 3

// Odczytywanie i ustawianie właściwości
let author = book.author; //Odczytanie wartości właściwości "author" obiektu book
let name = author.surname; //Odczytanie wartości właściwości "surname" obiektu author
let title = book["main title"]; //Odczytanie wartości właściwości "main title" obiektu book

book.edition = 7; //Utworzenie właściwości "edition" obiektu book
book["main title"] = "ECMAScript"; //Zmiana wartości właściwości "main title"

// Dziedziczenie
let o2 = {}; //Obiekt o2 dziedziczy metody po obiekcie Object.prototype
o2.x = 1; //Od teraz ma również własną właściwość x
let p3 = Object.create(o2); //Obiekt p3 dziedziczy właściwości po obiektach o i Object.prototype
p3.y = 2; //Od teraz ma również własną właściwość y
let q = Object.create(p3); //Obiekt q dziedziczy właściwości po obiektach p3, o2 ...
q.z = 3; //Ma również własną właściwość z
let f = q.toString(); //Metoda toString() jest dziedziczona po obiekcie Object.prototype
q.x + q.y; // ==> 3 właściwości x i y są dziedziczone po obiektach o i p

let unitcircle = { r: 1 }; //Obiekt po którym dziedziczone są właściwości
let c = Object.create(unitcircle); //Obiekt c dziedziczy właściwość r
c.x = 1;
c.y = 1; //W obiekcie c są definiowane dwie własne właściwości
c.r = 2; //W obiekcie c jest nadpisywana odziedziczona właściwość
unitcircle.r; // ==> 1 prototyp nie jest modyfikowany
