// Klasa AbstractSet definiuje pojedyncza metode abstrakcyjna has()
class AbstractSet {
    // Zgłoszenie wyjątku ponieważ podklasa musi definiować własną wersje tej metody
    has(x) {
        throw new Error("Metoda abstrkcyjna");
    }
}
// Klasa NotSet jest klasą pochodną od AbstractSet. Reprezentuje zbioróe elementów które nie należa do innego zbioru
class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }
    // Implementacja odziedziczonej metody abstrakcyjnej
    has(x) {
        return !this.set.has(x);
    }
    // Tutaj nadpisywana jest metoda obiektu Object
    toString() {
        return `{x | x ∉ ${this.set.toString()}}`;
    }
}

// Klasa Range jest pochodną od AbstractSet. Reprezentuje zbiór wartości z przedziału określonego
class Range extends AbstractSet {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }
    has(x) {
        return x >= this.from && x <= this.to;
    }
    toString() {
        return `{x| ${this.from} x ${this.to}}`;
    }
}

// AbstractEnumerableSet jest klasą pochodną od AbstractSet. Definuje abstrakcyjny getter zwracający wielkość zbioru iraz abstrakyjny NodeIterator.
class AbstractEnumerableSet extends AbstractSet {
    get size() {
        throw new Error("Metoda Abstrakcyjna");
    }
    [Symbol.iterator]() {
        throw new Error("Metoda abstrkcyjna");
    }

    isEmpty() {
        return this.size === 0;
    }
    toString() {
        return `{${Array.from(this).join(", ")}}`;
    }
    equals(set) {
        // Jeżeli inny zbiór nie jest typu Enumerable to oznacza że nie jest zgodny z biezącym zbiorem
        if (!(set instanceof AbstractEnumerableSet)) return false;
        // Jeżeli zbiory mają różne wielkości to oznacza że nie są sobie równe
        if (this.size !== set.size) return false;

        // Przetwarzanie elementów zbioru
        for (let element of this) {
            // Jeżeli element nie należy do innego zbioru to oznacza że zbiory nie są równe
            if (!set.has(element)) return false;
        }
        // Elementy są zgodne więc zbiory są równe
        return true;
    }
}

// SingletonSet jest klasą pochodną od AbstractEnumerableSet. Reprezentuje zbiór przeznaczony tylko do odczytywania i zawierający tylko jeden element
class SingletonSet extends AbstractEnumerableSet {
    constructor(member) {
        super();
        this.member = member;
    }
    has(x) {
        return x === this.member;
    }
    get size() {
        return 1;
    }
    *[Symbol.iterator]() {
        yield this.member;
    }
}

// AbstractWritableSet definiuje abstrakcyjne metody insert() i remove() służace do dodawania i usuawnia elementów zbioru
class AbstractWritableSet extends AbstractEnumerableSet {
    insert(x) {
        throw new Error("Metoda abstrakcyjna");
    }
    remove(x) {
        throw new Error("Metoda abstrakcyjna");
    }

    add(set) {
        for (let element of set) {
            this.insert(element);
        }
    }
    substract(set) {
        for (let element of set) {
            this.remove(element);
        }
    }
    intersect(set) {
        for (let element of this) {
            if (!set.has(element)) {
                this.remove(element);
            }
        }
    }
}
