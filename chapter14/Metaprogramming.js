let o = {}; //Początkowy obiekt bez właściwości
//Dodanie wyliczalnej właściwości "x" o wartości 1
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true,
});
//Sprawdzenie że właściwość istnieje ale jest niewyliczalna
o.x; // =>1
Object.keys(o); // =>[]
//Modyfikcja właściwości "x" tak, aby można ją było wyłącznie odczytywać
Object.defineProperty(o, "x", { writable: false });
//Próba zmiany wartości właściwości
o.x = 2; //Nieudana operacja bez komunikatu lub zgłoszenie wyjątku TypeError w trybie ścisłym
o.x; // =>1
//Właściwość jest jednak konfigurowalna, więc można jej zmienić wartość
Object.defineProperty(o, "x", { value: 2 });
o.x; // =>2
//Przekształcenie właściwości danych we właściwość dostępową
Object.defineProperty(o, "x", {
    get: function () {
        return 0;
    },
});
o.x; // =>0

let p = Object.defineProperties(
    {},
    {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
        y: { value: 1, writable: true, enumerable: true, configurable: true },
        r: {
            get() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true,
        },
    }
);
console.log(p.r); // => Math.SQRT2

//Kopiowanie wartości iatrybutów właściwości pomiędzy obiektami
Object.defineProperty(Object, "assignDescriptors", {
    //Ustawienie takich samych atrybutów jak w funkcji Object.assign()
    writable: true,
    enumerable: false,
    configurable: true,
    //Funkcja będąca wartością właściwości assignDescriptions
    value: function (target, ...sources) {
        for (let source of sources) {
            for (let name of Object.getOwnPropertyNames(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, name);
                Object.defineProperty(target, name, desc);
            }
            for (let symbol of Object.getOwnPropertySymbols(source)) {
                let desc = Object.getOwnPropertyDescriptor(source, symbol);
                Object.defineProperty(target, symbol, desc);
            }
        }
        return target;
    },
});

let o1 = {
    c: 1,
    get count() {
        return this.c++;
    },
}; //Zdefiniowanie obiektu getterem
let p1 = Object.assign({}, o); //Skopiowanie wartości właściwości
let q1 = Object.assignDescriptors({}, o); //Skopiowanie deskryptorów właściwości
p1.count; // =>1: Jest to właściwość danych, więc
p1.count; // =>1: właściwość count nie zmienia się
q1.count; // =>2: Zmienia się ona przy pierwszym kopiowaniu obiektu
q1.count; // =>3: jak również przy kopiowaniu getterów i setterów

//Sprawdzenie czy obiket jest prototypem innego obiektu
let p2 = { x: 1 }; //Zdefiniowanie prototypu
let o2 = Object.create(p); //Utworzenie obiektu na podstawie prototypu
p.isPrototypeOf(o); //true
Object.prototype.isPrototypeOf(p); // =>true
Object.prototype.isPrototypeOf(o); // =>true

let o3 = { x: 1 };
let p3 = { y: 2 };
Object.setPrototypeOf(o, p); //Ustawienie prototypu p obiektu o
o.y; // => 2:teraz obiekt o dziedziczy właściwość y
let a = [1, 2, 3];
Object.setPrototypeOf(a, p); //Ustawienie prototypu p tablicy a
a.join; //undefined: tablica a nie ma już metody join()

//Znaczniki szablonowe
function html(strings, ...values) {
    //Konwersja wartości na ciągi znaków i zamiana znaków specjalnych na znaczniki HTML
    let escaped = values.map((v) =>
        String(v)
            .replace("&", "&amp;")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace('"', "&quot;")
            .replace("'", "&#39;")
    );
    //Zwrócenie połączonych ciągów znaków i znaczników
    let result = strings[0];
    for (let i = 0; i < escaped.length; i++) {
        result += escaped[i] + strings[i + 1];
    }
    return result;
}

let operator = "<";
html`<b>x ${operator} y</b>`; // => "<b>x &lt; y</b>"

let kind = "game",
    name = "D&D";
html`<div class="${kind}">${name}</div>`; // => '<div class="game">D&amp;D</div>'
