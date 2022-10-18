""; //Pusty ciąg
"test";
"3.14";
"Dwa \nwiersze"; //Ciąg reprezentujący dwa wiersze zapisane w jednym wierszu
//Sekwencje ucieczki

// \0 //Znak NULL
// \b //Usunięcie znaku
// \t //Tabulator poziomy
// \n // nowy wiersz
// \f // wysunięcie arkusza
// \r // powrót karetki
// \"" // cudzysłów
// \'' //apostrof
// \\ // lewy ukośnik
// \xnn // Znak Unicode zapisany za pomocą dwóch cyfr szesnatkowych nn
// \unnn // Znak Unicode zapisany za pomocą czterech cyfr szesnastkowych nn
// \u{n} // Znak Unicode zapisany za pomocą od jednej do sześciu cyfr szesnastkowych nn

//Operacje na ciągach znaków
let msg = "Witaj, " + "świecie!"; // Tworzy ciąg "Witaj, świecie!".
let greeting = "Witaj na moim blogu, " + " " + "name";
let s = "Witaj, świecie!";
//Wyodrębnienie fragmentów ciągu
console.log(s.substring(1, 4)); // "ita"
console.log(s.slice(1, 4)); // "ita"
console.log(s.slice(-3)); // "ie!" trzy ostatnie znaki
//Przeszukiwanie ciągu
console.log(s.indexOf("i")); // 1 ==> pozycja pierwzsej litery "i"
console.log(s.indexOf("i", 3)); // 9 ==> pozycja pierwszej litery "i" większa niż 3
console.log(s.indexOf("zz")); // -1 ==> ciąg nie zawiera ciągu "zz"
console.log(s.lastIndexOf("i")); // 12 ==> pozycja ostatniej litery "i"
//Logiczne metody przeszukujące
console.log(s.startsWith("Wit")); // ==> true ciąg zaczyna się od zadanego ciągu
console.log(s.endsWith(".")); // ==> false ciąg nie kończy się zadanym ciągiem
console.log(s.includes("aj")); // ==> true ciąg zwiera ciąg "aj"
//Tworzenie zmienionej wersji zadanego ciągu
console.log(s.replace("j", "my")); // ==> Witramy świecie
console.log(s.toLowerCase()); // ==> Witamy świecie
console.log(s.toUpperCase()); // ==> WITAMY, ŚWIECIE
// Odczytywanie pojedynczych znaków ciągu
console.log(s.charAt(0)); // ==> W
console.log(s.charAt(s.length - 1)); // ! ostatni znak ciągu

//Traktowanie ciągu jako tablicy znaków
console.log(s[0]); // ==> W
console.log(s[s.length - 1]); // ==> !
