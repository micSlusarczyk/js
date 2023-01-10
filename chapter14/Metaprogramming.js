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

//Klasa Proxy

let t = { x: 1, y: 2 };
let pp = new Proxy(t, {});
pp.x; // =>1
delete pp.y; // => true: usunięcie właściwości y obiektu Proxy
t.y; // => udefined: właściwość została usunięta również z obiektu docelowego
pp.z = 3; // => Zdefiniowanie nowej właściwości obiektu Proxy
t.z; // => 3: właściwość została zdefiniowana w wobiekcie docelowym

function accessTheDatabase() {
    /*Implementacja pominięta*/ return 42;
}
let { proxy, revoke } = Proxy.revocable(accessTheDatabase, {});
proxy(); // =>42: obiekt pośredniczący daje dostęp do funkcji obiektu docelowego
revoke(); // Dostęp może byc jednak zablokowany w dowolnym momencie
proxy(); // TypeError: nie można już wywołać powyższej funkcji

//Za pomocą klasy Proxy tworzymy obiekt pozornie posiadający dowolne właściwości
// których wartości są takie same jak ich nazwy
let identity = new Proxy(
    {},
    {
        //Każda właściwość ma swoją nazwę i wartość
        get(o, name, target) {
            return name;
        },
        //Każda nazwa właściwości jest zdefiniowana
        has(o, name) {
            return true;
        },
        //Właściwosci jest zbyt dużo, aby je wyliczyć więc zgłaszamy wyjątek
        ownKeys(o) {
            throw new RangeError("Właściwości jest nieskończenie wiele");
        },
        //Zadna z właściwości nie jest zapisywalna, konfigurowalna ani wyliczalna
        getOwnPropertyDescriptor(o, name) {
            return {
                value: name,
                enumerable: false,
                writable: false,
                configurable: false,
            };
        },
        //Wszystkie właściwości są przeznaczone tylko do odczytu więc nie można im przypisywać wartości
        set(o, name, value, target) {
            return false;
        },
        //Wszystkie własciwosci są niekonfigurowalne, więc nie można ich usuwać
        deleteProperty(o, name) {
            return false;
        },
        //Obiekt ma wszystkie możliwe właściwości, więc nie można definiować nowych
        defineProperty(o, name, desc) {
            return false;
        },
        //Oznacza to,że obiekt jest nierozszerzalny
        isExtensible(o) {
            return false;
        },
        //Obiekt ma wszystkie możliwe właściwości więc nie może
        //dziedziczyć nowych, nawet jeżeli ma swój prototyp
        getPrototypeOf(o) {
            return null;
        },
        //Obiekt jest nierozszerzalny, więc nie można zmieniać jego prototypu
        setPrototypeOf(o, proto) {
            return false;
        },
    }
);

identity.x; // => "x"
identity.toString; // => "toString"
identity[0]; // => "0"
identity.x = 1; // Przypisanie wartości właściwości nie daje żadnego efektu
identity.x; // => "x"
delete identity.x; // false: nie można usunąć właściwości
identity.x; // => "x"
Object.keys(identity); //!RangeError: nie można uzyskać listy wszytskich kluczy
for (let p of identity); // !RangeError

//Funkcja zwracająca obiekt Proxy opakowujący obiekt o, rejestrujący i kierujący do inego wszystkie operacje
function loggingProxy(o, objname) {
    //Definicje metod Proxy rejestrujacego operacje.
    //Każda metoda wyświetla komunnikat i kieruje operacje do obiektu docelowego
    const handlers = {
        //Ta metoda jest specjalna, ponieważ w przypadku właściwości, której wartością jest obiekt lub funkcja
        //zwraca obiekt Proxy a nie wartość tej właściwości
        get(target, property, reciever) {
            //Zarejestrowanie operacji
            console.log(`Metoda get(${objname},${property.toString()})`);

            //Odczytanie wartosci właściwości  za pomocą interfejsu API obiektu Reflect
            let value = Reflect.get(target, property, reciever);

            //Jezeli jest własna właściwośc obiektu docelowego a jej wartością jest obiekt lub funkcja,
            //to zwracanym wynikiem jest obiekt Proxy.
            if (
                Reflect.ownKeys(target).includes(property) &&
                (typeof value === "object" || typeof value === "function")
            ) {
                return loggingProxy(value, `${objname}.${property.toString()}`);
            }
            //W przeciwnym razie zwracana jest wartość właściwości
            return value;
        },
        //Poniźsze trzy metody niczym sie nie wyróżniają. Rejestrują operacje i kierują je do obiektu docelowego
        //Zostały zdefiniowane po to, aby unikną nieskończonej rekurencji
        set(target, prop, value, reciever) {
            console.log(`Metoda set(${objname}, ${prop.toString()},${value})`);
            return Reflect.set(target, prop, value, reciever);
        },
        apply(target, reciever, args) {
            console.log(`Metoda ${objname}(${args})`);
            return Reflect.apply(target, reciever, args);
        },
        construct(target, args, reciever) {
            console.log(`Metoda ${objname}(${args})`);
            return Reflect.construct(target, args, reciever);
        },
    };
    //Pozostałe metody są generowane automatycznie
    Reflect.ownKeys(Reflect).forEach((handlerName) => {
        if (!(handlerName in handlers)) {
            handlers[handlerName] = function (target, ...args) {
                //Zarejestrowanie operacji
                console.log(`Metoda ${handlerName}(${objectName}, ${args})`);
                //Przekierowanie operacji
                return Reflect[handlerName](target, ...args);
            };
        }
    });
    //Zwrócenie obiektu Proxy wykorzystujacego metody rejestrujące
    return new Proxy(o, handlers);
}

//Zdefiniowanie tablicy danych i obiketu zawierającego właściwość funkcyjną
let data = [10, 20];
let methods = { square: x * x };

//Utworzenie obiektów rejestrujących operacje wykonywane na tablicy i zadanym obiekcie
let proxyData = loggingProxy(data, "dane");
let proxyMethods = loggingProxy(methods, "metody");

//Załóżmy, że chcemy dowiedzieć się jak działa metoda Array.map()
data.map(methods.square); // => [100,400]

//Najpierw wypróbujmy ją z tablicą obiektów Proxy
proxyData.map(methods.square); // => [100,400]
//Wynik jest następujący:
//Metoda get(dane, map)
//Metoda get(dane,lenght)
//Metoda get(dane,constructor)
//Metoda has(dane,0)
//Metoda get(dane,0)
//Metoda has(dane,1)
//Metoda get(dane,1)
