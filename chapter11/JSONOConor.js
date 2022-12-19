let o = { s: "", n: 0, a: [true, false, null] };
let s = JSON.stringify(o); // s=='{"s":"","n":0,"a":[true,false,null]}'
let copy = JSON.parse(s); // copy =={s: "", n: 0, a: [true,false,null]}

//Utworzenie kopii serializowanego obiektu lub tablicy
function deecopy(o) {
    return JSON.parse(JSON.stringify(o));
}

let o1 = { s: "test", n: 0 };
JSON.stringify(o1, null, 2); // => '{\n "s": "test",\n "n": 0\n}'

let data = JSON.parse(text, function (key, value) {
    //Usunięcie wszystkich wartości, których nazwy właściwości rozpoczynają się od znaku podkreślenia
    if (key[0] === "_") return undefined;
    //Jeżeli wartość jest ciągiem znaków zawierającym datę zapisaną w formacie ISO 8601, jest przekształcona w obiekt Date
    if (
        typeof value === string &&
        /^d\d\d\d-\d\d-\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
    ) {
        return new Date(value);
    }
    //W przeciwnym razie zwracana jest niezmieniona wartość
    return value;
});

//Określenie pól przeznaczonych do serializacji i ich kolejności
let text = JSON.stringify(address, ["city", "state", "country"]);

//Funkcja zamiennika pomijająca właściwości będące wyrażeniami regularnymi
c(o, (k, v) => (v instanceof RegExp ? undefined : v));

let euros = Intl.NumberFormat("pl", { style: "currency", currency: "PLN" });
euros.format(10); // => "10,00zł": dziesięć złotych, format polski
let pounds = Intl.NumberFormat("en", { style: "currency", currency: "GBP" });
pounds.format(1000); // =>"£1,000.00": tysiąc funtów, format brytyjski

let data1 = [0.05, 0.75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
}).format;
data1.map(formatData); // => ["5.0%", "75.0%", "100.0%"]: amerykańskie ustawienia regionalne

//Formatowanie daty i czasu
let d = new Date("2020-01-02T13:14:15Z"); // 2 stycznia 2020r., 13:14:15 UTC

//Klasa użyta bez opcji zwraca datę w podstawowym formacie liczbowym
Intl.DateTimeFormat("pl-PL").format(d); // =>"2.01.2020"
Intl.DateTimeFormat("fr-FR").format(d); // => "02/01/2020"

//Nazwy dni tygodnia i miesięcy
let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
Intl.DateTimeFormat("pl-PL", opts).format(d); // => "czwartek, 2 stycznia 2020"
Intl.DateTimeFormat("es-ES", opts).format(d); // => "jueves, 2 de enero de 2020"

//Czas nowojorski dla Kanadyjczyka francuskojęzycznego
opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
Intl.DateTimeFormat("fr-CA", opts).format(d); // => "8h 14"

//Porównywanie ciągów znaków
//Podstawowy obiekt porównujący ciągi zgodnie z lokalnymi ustawieniami regionalnymi
//Należy go stosować, aby sortować ciągi w kolejności naturalnej dla człowieka
const collator = new Intl.Collator().compare;
["a", "z", "A", "Z"].sort(collator); // => ["a", "A", "z", "Z"]

//Nazwy plików często zawierają liczby, więc należy je sortować w specjalny sposób
const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
["strona10", "strona9"].sort(filenameOrder); // => ["strona9", "strona10"]

//Wyszukanie wszystkich ciągów luźno dopasowanych do zadanego
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true,
}).compare;
let string = ["gazeta", "gazela", "gameta"];
string.findIndex((s) => fuzzyMatcher(s, "gaz Ela") === 0); // =>1

//W Hiszpanii przed 1994r. dwuznaki CH i LL były traktowane jako osobne litery
const modernSpanish = Intl.Collator("es-ES").compare;
const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
let parablas = ["luz", "llama", "como", "chico"];
parablas.sort(modernSpanish); // => ["chico", "como", "llama", "luz"]
parablas.sort(traditionalSpanish); // => ["como", "chico", "luz", "llama"]
