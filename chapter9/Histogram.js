// Delegacja
class Histogram {
    // Aby zainicjować obiekt wystarczy oddelegować go do utworzonej instancji klasy Map
    constructor() {
        this.map = new Map();
    }
    // Metoda count() zwraca liczbę przypisaną zadanemu kluczowi w obiekcie Map lub wartość 0 jeżeli nie ma klucza
    count(key) {
        return this.map.get(key) || 0;
    }
    // Metoda has() tak jak w klasie Set zwraca wartość true jeżeli metoda count() zwraca wynik rózny od 0
    has(key) {
        return this.count(key) > 0;
    }
    // Metoda size() zwraca liczbe elementów w obiekcie Map
    get size() {
        return this.map.size;
    }
    // Aby dodać klucz wystarczy zwiększyć liczbę jego wystąpień w obiekcie Map
    add(key) {
        this.map.set(key, this.count(key) + 1);
    }
    // Usunięcie klucza jeżeli liczba jego wystąpień zmniejszy się do zera
    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }
    // Iterator zwraca klucze zapisane w obiekcie Histogram
    [Symbol.iterator]() {
        return this.map.keys();
    }
    // Inne iteratory są po prostu oddelegowane do obiektu Map
    keys() {
        return this.map.keys();
    }
    values() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }
}
