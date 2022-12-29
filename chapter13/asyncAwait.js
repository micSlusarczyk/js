//Pętla for/await
const fs = require("fs");
const { resolve } = require("path");
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, { encoding: "utf-8" });
    for await (let chunk of stream) {
        parseChunk(chunk); //Przyjęte jest założenie że funkcja parseChunk() jest zdefiniowana
    }
}

//Oparta na promesie funkcja opakowująca funkcję setTimeout(). Można ją stosować ze słowem await
//Funkcja zwraca promesę, która jest spełniana po upływie zadanej liczby milisekund
function elapsedTime(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

//Asynchroniczny generator zwiększający licznik i zwracający go
//zadaną liczbę razy w zadanych odtępach czasu
async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        //Zwykła pętla for
        await elapsedTime(interval); //Oczekiwanie przez zadany czas
        yield count; //Zwrócenie licznika
    }
}

//Funkcja testowa, wykorzystująca generator asynchronniczny i pętlę for/await
async function test() {
    //Funkcja asynchroniczna
    for await (let tick of clock(300, 100)) {
        //Pętla powtarzana 100 co 300ms
        console.log(tick);
    }
}

//Implementacja iteratora asynchronicznego
function clock(interval, max = Infinity) {
    //Oparta na promesie odmiana funkcja setTimeout()
    function until(time) {
        return new Promise((resolve) => setTimeout(resolve, time - Date.now()));
    }
    //Zwrócenie asynchronicznie iterowalnego obiektu
    return {
        startTime: Date.now(), //Zapamiętanie czasu uruchomienia
        count: 1, //Zapamiętanie numeru iteracji
        async next() {
            //metoda next() tworzy iterator
            if (this.count > max) {
                //Koniec ???
                return { done: true }; //Wynik oznaczający zakończenie iteracji
            }
            //Określenie momentu rozpoczęcia następnej iteracji
            let targetTime = this.startTime + this.count * interval;
            //Oczekiwanie aż ten moment nastąpi
            await until(targetTime);
            //Zwrócenie w wynikowym obiekcie iteracji wartosci zmiennej count
            return { value: this.count++ };
        },
        //Poniższa metoda sprawia, że obiekt iteratora jest iterowalny
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}
