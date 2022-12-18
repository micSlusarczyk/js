let now = new Date(); //Bieżąca data i czas
let epoch = new Date(0); //Północ, 1 stycznia 1970r., czas GMT

let century = new Date(
    2100, //Rok 2100
    0, //styczeń
    1, //pierwszy dzień miesiąca
    2,
    3,
    4,
    5
); //godzina 02:03:04.005 lokalnego czasu

//Północ w Wielkiej Brytanii, 1 stycznia 2100r.
let century1 = new Date(Date.UTC(2100, 0, 1));
let century2 = new Date("2100-01-01T00:00:00Z"); // Data w formacie ISO

let d = new Date(); //Początkowa bieżąca data
d.setFullYear(d.getFullYear() + 1); //Zwiększenie roku

d.setTime(d.getTime() + 3000); //Dodanie 30 sekund do bieżącego czasu

//Jak długo działa fragment kodu
let startTime = Date.now();
reticulateSplines(); //Czasochłonne operacje
let endTime = Date.now();
console.log(`Wyliczenie krzywej trwało ${endTime - startTime} ms.`);

//Do bieżącej daty dodanie trzy dni i dwa tygodnie
let d1 = new Date();
d1.setMonth(d1.getMonth() + 3, d1.getDate() + 14);

//Formatowanie dat
let d2 = new Date(2020, 0, 1, 17, 10, 30); //Nowy Rok, 17:10:30
d2.toString(); // => "Wed Jan 01 2020 17:10:30 GMT+0100"
d2.toUTCString(); // => "Wed, 01 Jan 2020 16:10:30 GMT"
d2.toLocaleDateString(); // =>"1.01.2020: polskie ustawienia regionalne"
d2.toLocaleTimeString(); // => "17:10:30 polskie ustawienia regionalne"
d2.toISOString(); // => "2020-01-01T16:10:30.000Z"
