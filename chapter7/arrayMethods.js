// Metody tablicowe

// Metoda forEach()
let data = [1, 2, 3, 4, 5],
    sum = 0;
//Wyliczenie sumy elementów tablicy
data.forEach((value) => {
    sum += value;
}); //sum ==15
// Zwiększenie wartości każdego elementu tablicy
data.forEach(function (value1, index1, array1) {
    array1[index1] = value1 + 1;
}); //data ==[2,3,4,5,6], Metoda forEach() ma trzy argumenty: wartość elementu (value1), jego index(index1), oraz tablicę (array1)

// Metoda map() ==> zwraca tablicę złożoną z wyników zwróconych przez funkcję
let a = [1, 2, 3];
a.map((x) => x * x); // ==> [1,4,9]

// Metoda filter() ==> zwraca tablicę składającą się z wybranych elementów oryginalnej tablicy
let aa = [5, 4, 3, 2, 1];
aa.filter((x) => x < 3); // ==>[2,1] wybieranie wartości mniejszych niż 3
aa.filter((x, i) => i % 2 === 0); // ==> [5,3,1] wybieranie co drugiej wartości
let dense = sparse.filter(() => true); // ==> usunięcie luk w tablicy rozrzedzonej
aa = aa.filter((x) => x !== undefined && x !== null); // ==> usunięcie luk oraz wartości null i undefined

// Metoda find() i findIndex()
let b = [1, 2, 3, 4, 5];
b.findIndex((x) => x === 3); // ==> 2; wartość 3 ma element o indeksie 2
b.findIndex((x) => x < 0); // ==> -1; żodyn element nie zawiera liczby ujemnej
b.find((x) => x % 5 === 0); // ==> 5; wielokrotność liczby 5
b.find((x) => x % 7 === 0); // ==> undefined; żodyn element nie jest wielokrotnością libczy 7

// Metody some() i every()
let c = [1, 2, 3, 4, 5];
c.every((x) => x < 10); // true; wszystkie wartości są mniejsze od 10
c.every((x) => x % 2 === 0); // false; nie wszystkie wartości są parzyste
c.some((x) => x % 2 === 0); // true; tablica ma parzyste elementy
c.some(isNaN); //false; tablica nie zawiera elementów innych niż liczby

// Metoda reduce() i reduceRight()
let d = [1, 2, 3, 4, 5];
d.reduce((x, y) => x + y, 0); // 15; suma wartości
d.reduce((x, y) => x * y, 1); //120; iloczyn wartości
a.reduce((x, y) => (x > y ? x : y)); //5; największa wartość

let d1 = [2, 3, 4];
a.reduceRight((acc, val) => Math.pow(val, acc)); //Wyliczenie wyrażenia 2^(3^4)

// Metoda contact()
let e = [1, 2, 3];
e.concat(4, 5); //[1,2,3,4,5]
e.concat([4, 5], [6, 7]); // [1,2,3,4,5,6,7] spłaszczone tablice
e; // [1,2,3]; oryginalna tablica nie jest modyfikowana

// Stosy i kolejki
let stack = []; // stack ==[]
stack.push(1, 2); //stack==[1,2]
stack.pop(); //stack==[1]
stack.push(3); //stack==[1,3]
stack.pop(); //stack==[1]
stack.push([4, 5]); //stack==[1,[4,5]]
stack.pop(); // stack==[1]
stack.pop(); //stack==[]

let f = []; //f==[]
f.push(1, 2); // f==[1,2]
f.shift(); //f==[2]
f.push(3); //f==[2,3]
f.shift(); //f==[3]
f.shift(); //f==[]

f.unshift(1); // f==[1]
f.unshift(2); // f==[2,1]
f = []; //f==[]
f.unshift(1, 2); // f==[1,2]

// Metody przeszukujące i sortujące tablice
// Metody indexOf() i lastIndexOf()
let g = [0, 1, 2, 1, 0];
g.indexOf(1); //1; element g[1] ma wartość 1
g.lastIndexOf(1); // 3; element g[3] zawiera wartość 1
g.indexOf(3); // -1; żodyn nie zawiera wartości 3

// Wyszukanie wszystkich wystąpień wartości x i zwrócenie indeksów elementów, które ją zawierają
function finall(h, x) {
    let result = [], //Zwracana tablica z indeksami
        len = h.length, //Długość przeszukiwanej tablicy
        pos = 0; //Indeks, od którego zaczyna się przeszukiwanie
    while (pos < len) {
        //Dopóki zostały elementy
        pos = h.indexOf(x, pos); //przeszukaj je
        if (pos === -1) break; //Zakończ, jeśli wartość nie została znaleziona
        result.push(pos); //W przeciwnym razie zapisz indeks w tablicy
        pos = pos + 1; //i kontynuj przeszukiwanie od następnego indeksu
    }
    return result; // Zwrócenie tablicy indeksów
}

// Metoda sort()
let k = ["banany", "wiśnie", "jabłka"];
k.sort(); // a==["banany", "jabłka", "wiśnie"]

// Metoda reverse()
let l = [1, 2, 3];
l.reverse(); // l==[3,2,1]

// Konwersja tablicy na ciąg znaków
let m = [1, 2, 3];
m.join(); // ==> "1,2,3"
m.join(" "); // ==> "1 2 3"
m.join(""); // ==> "123"
let n = new Array(10); // Tablica o długości 10, bez elementów
n.join("-"); // "---------" ciąg 9-ciu myślników

// Metoda toString()
[1, 2, 3].toString(); // ==> "1,2,3"
[("a", "b", "c")].toString(); // ==> "a,b,c"
[(1, [2, "c"])].toString(); // ==> "1,2,c"
