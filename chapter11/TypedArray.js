let bytes = new Uint8Array(1024); //1024 bajty
let matrix = new Float64Array(9); //Tablica 3x3
let point = new Int16Array(3); //Punkt w przestrzeni trójwymiarowej
let rgba = new Uint8ClampedArray(4); // 4-bajtowy kolor RGBA piksela
let sudoku = new Int8Array(81); //Plansza sudoku 9x9
let white = new Uint8ClampedArray.of(255, 255, 255, 0); //Nieprzezroczysty biały kolor RGBA

// Liczby zmiennoprzecinkowe przycięte do całkowitych oraz dłuższe liczby przycięte do 8 bitów
Uint8Array.of(1.23, 2.99, 45000); // => new UintArray([1,2,200])

let buffer = new ArrayBuffer(1024 * 1024);
buffer.byteLength; // => 1024 * 1024: jeden maegabajt

let asbytes = new Uint8Array(buffer); //Obszar jako ciąg bajtów
let asints = new Int32Array(buffer); //Obszar jako ciąg 32-bitowych liczb całkowitych ze znakiem
let lastK = new Uint8Array(buffer, 1023 * 1024); //Ostatni kilobajt obszaru jako ciąg bajtów
let int2 = new Int32Array(buffer, 1024, 256); //Drugi kilobajt obszaru jako ciąg 256 liczb całkowitych

// Funkcja wyszkująca za pomocą sita Eratostenesa największą liczbę pierwszą mniejszą od n
function sieve(n) {
    let a = new Uint8Array(n + 1); //Element a[x] ma wartość 1, jeżeli x jest liczbą złożoną
    let max = Math.floor(Math.sqrt(n)); //Liczba większa niż ta nie będzie przetwarszana
    let p = 2; //2 jest najmniejszą liczbą pierwszą
    while (p <= max) {
        //Dla liczby p mniejszej niż max...
        for (let i = 2 * p; i <= n; i += p) {
            //...wielokrotność p jest oznaczana jako liczba złożona
            a[i] = 1;
            while (a[++p]); //Kolejny nieoznaczony indeks jest liczbą pierwszą
        }
        while (a[n]) n--; //Odwrócona petla wyszukująca największą liczbę piwerszą
        return n;
    }
}

let bytes1 = new Uint8Array(1024); //Bufor o wilekości 1 kB
let pattern = new Uint8Array([0, 1, 2, 3]); //Tablica zawierająca 4 bajty
bytes1.set(pattern); //Skopiowanie tablicy na początek innej tablicy bajtowej
bytes1.set(pattern, 4); //Ponowne skopiowanie tablicy w inne miejsce
bytes1.set([0, 1, 2, 3], 8); //Skopiowanie wartosci bezpośrednio ze zwykłej tablicy
bytes1.slice(0, 12); // => new UintArray8([0,1,2,3,0,1,2,3,0,1,2,3])

let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]); //10 krótkich liczb całkowutych
let last3 = ints.subarray(ints.length - 3, ints.length); //ostatnie 3 elementy
last3[0]; // => 7: to samo co ints[7]
ints[9] = -1; //Zmiana wartości elementu oryginalnej tablicy
last3[2]; // => -1: ...przekłada się na zmianę elementu podtablicy

last3.buffer; //Obiekt ArrayBuffer wykorzystywany przez typowaną tablicę
last3.buffer === ints.buffer; // true: oba obiekty są widokami tego samego bufora
last3.byteOffset; //14:ten widok rozpoczyna się od 14 bajtu bufora
last3.byteLength; //6:ten widok ma wielkość 6 bajtów (3 liczby całkowite 16-bitowe)
last3.buffer.byteLength; // 20

let bytes2 = new Uint8Array(8);
bytes2[0] = 1; //ustawienie pierwszego bajtu na 1
bytes2.buffer[0]; //undefined:bufor nie ma indeksu 0
bytes2.buffer[1] = 255; //Błędna próba ustawienia bufora
bytes2.buffer[1]; // => 255: wartość jest przypisywana zwykłej właściwości obiektu
bytes[1]; //0: powyższy wiersz nie ustawia bajtu
