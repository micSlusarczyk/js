// Czasomierze
setTimeout(checkForUpdates, 60000);

//Wywoływanie funkcji checkForUpdates co minutę
let updateIntervalId = setInterval(checkForUpdates, 60000);

// //Funkcja setInterval() zwraca wartość, którą można wykorzystać do przerwania ciągu wywołań funkcji zwrotnej.
// W tym celu należy wywołać funkcję clearInterval(). Podabną wartość zwraca funkcja setTimeout()
function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}

//Zdarzenia
//Zapytanie przeglądarki o obiket reprezentujący element <button> zgodny z zadanym selektorem CSS
let okay = document.querySelector("#confirmUpdateDialog button.ok");

//Zarejestrowanie funkcji zwrotnej, która będzie wyuwoływana gdy użytkownik kliknie przycisk
okay.addEventListener("click", applyUpdate);

//Zdarzenia sieciowe
function getCurrentVersionNumber(versionCallback) {
    //Wysłanie do interfesji API zapytania HTTP o numer wersji
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.example.com/api/version");
    request.send();

    //Zarejestrwanie funckcji zwrotnej, która zostanie wywołana po odebraniu odpowiedzi
    request.onload = function () {
        if (request.status === 200) {
            //Jeżeli status HTTP zapytania jest poprawny, odczytujemy nr wersji i wywołujemy funkcję zwrotną
            let currentVersion = parseFloat(request.responseText);
            versionCallback(null, currentVersion);
        } else {
            //W przeciwnym razie zgłaszamy problem za pomocą funckji zwrotnej
            versionCallback(response.statusText, null);
        }
    };
    //Zarejestrowanie innej funkcji zwrotnej wywoływanej po wystąpieniu błędu sieciowego
    request.onerror = request.ontimeout = function (e) {
        versionCallback(e.type, null);
    };
}

//Funkcje zwrotne i zdarzenia w środowisku Node
const fs = require("fs"); //Moduł fs zawiera interfesjy API obsługujące system plików
const { request } = require("http");
let options = {
    //Obiekt zawierający opcje programu
    //Tu zdefiniowane są domyślne opcje
};
//Odczytanie zawartości pliku konfuguracyjnego a następnie wywołanie funkcji zwrotnej
fs.readFile("config.json", "utf-8", (err, text) => {
    if (err) {
        //Jeżeli wystąpił błąd funkcja wyświetla komunikat i kontynuuje działanie
        console.warn("Błąd odczytu pliku konfuguracyjnego:", err);
    } else {
        //W przeciwnym razie analizuje zawartość pliku i przekazuje ją obiektowi options
        Object.assign(options, JSON.parse(text));
    }
    //Niezależnie od przypadku uruchamiany jest program
    startProgram(options);
});

const https = require("https");

//Funkcja odczytująca zawartość strony o zadanym adresie URL i przekazująca ją funckji zwrotnej
function getText(url, callback) {
    //Wysłanie zapytanie HTTP GET na zadany addres URL
    request = https.get(url);

    //Zarejestrowanie funkcji obsługującej zdarzenie odpowiedzi
    request.on("response", (response) => {
        //Zgłoszenie zdarzenia oznacza że został odebrany nagłówek odpowiedzi
        let httpStatus = response.statusCode;

        //Treść odpowiedzi jeszcze nie została odebrana
        // dlatego tzrba zarejetrować dodatkowe funkcje zwrotne
        // które zostaną wywołane gdy nadejdzie odpowiedź
        response.setEncoding("utf-8"); //Spodziewany jest tekst zakodowany w standardzie Unicode
        let body = ""; //Zostanie on umieszczony w tej zmiennej

        //Ta funkcja będzie wywoływana gdy kolejny fragment odpowiedzi będzie gotowy do odczytu
        response.on("data", (chunk) => {
            body += chunk;
        });
        //Ta funkcja zostanie wykonana po odebraniu całej odpowiedzi
        response.on("end", () => {
            if (httpStatus === 200) {
                //Jeżeli zapytanie HTTP zostało obsłużone poprawnie
                callback(null, body); //treść odpiowiedzi umieszczana jest w funkcji zwrotnej
            } else {
                callback(httpStatus, null); //W przeciwnym razie w argumencie jest umieszczany komunikat o błędzie
            }
        });
    });
    //Rejestrowana jest również procedura obsługi niskopoziomowych błędów transmisji sieciowej
    request.on("error", (err) => {
        callback(err, null);
    });
}
