let m = new Map(); //utworzenie nowej pustej mapy
let n = new Map([
    //Nowa mapa zainicjowana za pomocą ciągów znaków powiązanych z liczbami
    ["jeden", 1],
    ["dwa", 2],
]);

let copy = new Map(n); // nowa mapa zaierająca takie same klucze i wartości jak mapa n
let o = { x: 1, y: 2 }; //Obiekt zawierający dwie właściwości
let p = new Map(Object.entries(o)); //Instrukcja równoważna new map([["x", 1], ["y",2]])

m.size; // =>0
m.set("jeden", 1); //Przypisanie kluczowi "jeden" wartości 1
m.set("dwa", 2); //Dodanie klucza "dwa" z warością 2
m.size; // => 2
m.get("dwa"); // => 2: zwrócenie wartości przypisanej kluczowi "dwa"
m.get("trzy"); // undefined: tego klucza nie ma w mapie
m.set("one", true); // Zmiana wartości przypisanej istniejąemu kluczowi
m.size; // => 2:wielkość mapy się nie zmieniła
m.has("jeden"); // true
m.has(true); //faalse
m.delete("jeden"); //true
m.size; // =>1
m.delete("trzy"); // => false: brak klucza
m.clear(); // Usunięcie z mapy wszystkich kluczy i wartości

let m1 = new Map().set("jeden", 1).set("dwa", 2).set("trzy", 3);
m1.size; // =>3
m1.get("dwa"); // =>2

let m2 = new Map(); //Początkowa pusta mapa
m2.set({}, 1); //Powiązanie pustego obiektu z liczbą 1
m2.set({}, 2); //Powiązanie innego pustego obiektu z liczbą 2
m2.size; // => 2
m2.get({}); //undefined:ten pusty obiekt nie jest kluczem
m2.set(m2, undefined); //Powiązanie smaej metody z wartością undefined
m2.has(m2); // => true: m jest kluczem w mapie
m2.get(m2); // => undefined: wynik byłby taki sam, gdyby mapa nie zawerała klucza m

let m3 = new Map([
    ["x", 1],
    ["y", 2],
]);
[...m]; // => [["x",1], ["y",2]]
for (let [key, value] of m3) {
    //W pierszej iteracji kluczem jest ciąg "x" a wartością liczba 1
    //W drugiej iteracji kluczem jest ciąg "y" a wartością liczba 2
}

[...m.keys()]; // => ["x", "y"]: tylko klucze
[...m.values()]; // =>[1,2]: tylko wartosci
[...m.entries()]; // => [["x", 1], ["y",2]]: to samo co [...m]

m.forEach((value, key) => {
    // Uwaga na kolejność: "wartość, klucz" a nie "klucz, wartość"
    //W pierwszej iteracji wartością jest liczba 1 a kluczem ciąg "jeden"
    //W drugiej iteracji wartością jest liczba 2 a kluczem ciąg "dwa"
});
