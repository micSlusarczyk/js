// Funkcja dołączająca do tablicy a nazwy wyliczalnych właściwości obiektu o i zwracająca tę tablicę. Jeżeli tablica nie zostanie określona funkcja  utworzy nowa
function getPropertyNames(o, a) {
    if (a === undefined) a = []; //Utworzenie nowej tablicy
    for (let property in o) a.push(property);
    return a;
}

// Funkcję getPropertyNames() można wywoływać z jednym lub dwoma argumentami
let o = { x: 1 },
    p = { y: 2, z: 3 }; //Dwa testowe obiekty
let a = getPropertyNames(o); // a==["x"]; umieszczenie właściwości obiektu o w nowej tablicy
getPropertyNames(p, a); // a==["x", "y", "z"]; dołączenie właściwości obiektu p do podanej tablicy

// Parametry resztkowe
function max(first = -Infinity, ...rest) {
    let maxValue = first; //Założenie, że największy jest pierwszy argument
    //Analiza pozostałych argumentów
    for (let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    //Zwrócenie największego argumentu
    return maxValue;
}
console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6)); // ==>1000

// Obiekt Arguments
function max(x) {
    let maxValue = -Infinity;
    //Analizowanie argumentów, wyszukiwanie i zapamiętywanie największego
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    //Zwrócenie największego argumentu
    return maxValue;
}
console.log(max(1, 10, 100, 2, 3, 1001, 4, 5, 6)); // ==>1001

// Destrukturyzacja argumentów funkcji do jej parametrów
function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1, 2], [3, 4]); // ==>[4,6]

function vectorAdd([x1, y1], [x1, y2]) {
    //Rozpakowanie dwóch argumentów na cztery paramtry
    return [x1 + x2, y1 + y2];
}
vectorAdd([1, 2], [3, 4]); // ==> [4,6]

// Mnożenie wektora {x,y} lub {x,y,z} przez wartość skalarną
function vertorMultiply({ x, y, z = 0 }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar };
}
vertorMultiply({ x: 1, y: 2 }, 2); // ==> {x:2, y:4, z:0}

// Mnożenie wektora {x,y} lub {x,y,z} przez wartość skalarną z zachowaniem pozostałych właściwości
function vertorMultiply({ x, y, z = 0, ...props }, scalar) {
    return { x: x * scalar, y: y * scalar, z: z * scalar, ...props };
}
vertorMultiply({ x: 1, y: 2, w: -1 }, 2); // ==> {x:2, y:4, z:0, w: -1}

// Funkcja zwracająca sume właściwości iterowalnego obiektu a, wszytskie właściwości muszą być liczbami

function sum(a) {
    let total = 0;
    for (let element of a) {
        //Zgłoszenie wyjątku, jeżeli argument a nie jest iterowalny
        if (typeof element !== "number") {
            throw new TypeError("sum(): Właściowści muszą być liczbami ");
        }
        total += element;
    }
    return total;
}

sum([1, 2, 3]); // ==> 6
sum(1, 2, 3); // ==> TypeError: liczba 1 nie jest iterowalna
sum([1, 2, "3"]); // ==>TypeError: element o indeksie 2 nie jest liczbą

function counter(n) {
    // Argument n jest zmienną lokalną
    return {
        //Getter zwraca wartość lokalnej zmiennej licznikowej i powiększa ją
        get count() {
            return n++;
        },
        //Setter uniemożliwia pomniejszenie wartości zmiennej n
        set count(m) {
            if (m > n) n = m;
            else
                throw Error(
                    "przypisywana wartość musi być większa od bieżącej"
                );
        },
    };
}

let c = counter(1000);
c.count; // ==>1000
c.count; // ==> 1001
c.count = 2000;
c.count; // ==>2000
c.count = 2000; // ==> Error: przypisywana wartość musi być większa od bieżącej

// Funkcja dodaje do obiektu metody odczytujące i zapisujące
function addPrivateProperty(o, name, predicate) {
    let value; // To jest wartość właściwości

    // Getter po prostu zwraca wartość właściwości
    o[`get${name}`] = function () {
        return value;
    };

    // Setter zapisuje wartość lub zgłasza wyjątek jeżeli funkcja predykatu odrzuci wartość
    o[`set${name}`] = function (v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: nieprawidłowa wartość - ${v}`);
        } else {
            value = v;
        }
    };
}

// Poniższy kod demonstruje użycie funkcji addPrivateProperty()
let o1 = {}; //Pusty obiekt
// Dodanie metod dostępowych getName() i setName()
// Dopuszczalne są tylko ciągi znaków
addPrivateProperty(o1, "Name", (x) => typeof x === "string");
o1.setName("Jan"); //Przypisanie wartości zmiennej
o1.getName(); // => "Jan"
o1.setName(0); // ==> TypeError: setName: niepoprawna wartość - 0
