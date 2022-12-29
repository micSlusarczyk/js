const { resolve } = require("path");

//Asynchronicznie iterowalna klasa implementująca kolejkę
class AsyncQueue {
    constructor() {
        //W tej zmiennej są zapisywane elementy umieszczone w kolejce
        this.values = [];
        //W tej tablicy są umieszczane wartości determinujące promesy, które zostaną usunięte z kolejki przed dodaniem odpowiadających im wartości
        this.resolvers = [];
        //Po zamknięciu kolejki nie można umieszczać w niej nowych elementów
        this.closed = false;
    }
    enqueue(value) {
        if (this.closed) {
            throw new Error("Kolejka AsyncQueue jest zamknięta");
        }
        if (this.resolvers.length > 0) {
            //Jeżeli wartość została obiecana, determinujemy promesę
            const resolve = this.resolvers.shift();
            resolve(value);
        } else {
            //W przeciwnym razie umieszczamy ją w kolejce
            this.values.push(value);
        }
    }
    dequeue() {
        if (this.values.length > 0) {
            //Jeżeli w kolejce znajduje się wartość zwracamy zdeterminowaną promesę
            const value = this.values.shift();
            return Promise.resolve(value);
        } else if (this.closed) {
            //Jeżeli kolejka nie zawiera wartości i jest zamknięta, zwracamy
            //promesę zdeterminowaną znacznikiem końca strumienia
            return Promise.resolve(AsyncQueue.EOS);
        } else {
            //W przeciwnym razie zwracamy niezdeterminowaną promesę
            return new Promise((resolve) => {
                this.resolvers.push(resolve);
            });
        }
    }
    close() {
        //Po zamknięciu kolejki nie można w niej umieszczać elementów
        //Zaległe promesy determinujemy znacznikami końca strumienia
        while (this.resolvers.length > 0) {
            this.resolvers.shift()(AsyncQueue.EOS);
        }
        this.closed = true;
    }
    //Definicja metody sprawiającej, że klasa jest asynchronicznie iterowalna
    [Symbol.asyncIterator]() {
        return this;
    }
    //Definicja metody sprawiajacej, że klasa jest asynchronicznym iteratorem
    next() {
        return this.dequeue().then((value) =>
            value === AsyncQueue.EOS
                ? { value: undefined, done: true }
                : { value: value, done: false }
        );
    }
}

//Wartosć kontrolna zwracana przez metodę dequeue(), oznaczająca koniec strumienia, gdy kolejka zostanie zamknięta
AsyncQueue.EOS = Symbol("end-of-stream");
