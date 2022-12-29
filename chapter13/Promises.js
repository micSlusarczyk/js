const { reject } = require("async");

// Załóżmy że mamy następującą funkcję wyświetlającą profil użytkownika
function displayUserProfile(profile) {
    /*Implementacja pominięta*/
}
// Funkccję tę można wykorzystać z promesą w poniższy sposób
getJSON("/api/user/profile").then(displayUserProfile);

// Łańcuch promes
fetch(documentURL) //Wysłanie zapytania HTTP
    .then((response) => response.json()) //Pytanie o treść odpowiedzi zapisanej w formacie JSON
    .then((document) => {
        //Po odebraniu przeanalizowanwej treści JSON
        return render(document); //następuje wyświetlenie jej w interfejsie użytkownika
    })
    .then((rendered) => {
        //Po uzyskaniu gotowego dokumentu
        cacheInDatabase(rendered); //następuje umieszczenie go w lokalnej bazie danych
    })
    .catch((error) => handle(error)); //Obłsuga błedów, które mogą się pojawić

fetch("/api/user/profile").then((response) => {
    //Gdy promesa jest zdeterminowana dostępny jest status i nagłówki odpowiedzi
    if (
        response.ok &&
        response.headers.get("Content-Type") === "application/json"
    ) {
        //Co tutaj można robić ? Treść odpowiedzi nie jest jeszcze dostępna
    }
});

//Uzyskanie treści odpowiedzi HTTP
fetch("/api/user/profile")
    .then((response) => {
        return response.json();
    })
    .then((profile) => {
        displayUserProfile(profile);
    });

//Obsługa błędów  w poprzednim porzykładzie
fetch("/api/user/profile") //Wysłanie zapytania HTTP
    .then((response) => {
        //Wywołanie funkcji w chwili gdy będą dostępne status i nagłówki
        if (!response.ok) {
            //Jeżeli pojawi się status 404 lub inny błąd
            return null; //zwracana jest wartość null
        }
        //Zbadanie nagłówków i sprawdzenie czy seerwer wysłał odpowiedź w formacie JSON
        //Jeżeli nie oznacza to poważny problem, że serwer działa źle
        let type = response.headers.get("content-type");
        if (type !== "application/json") {
            throw new TypeError(`Oczekiwany format JSON, otzymany ${type}`);
        }
        // W tym miejscu status ma kod 2xx a treść jest zapisana w formacie JSON
        //Można więc bezpiecznie zwrócić promesę i obiekt JSON
        return response.json();
    })
    .then((profile) => {
        //Funkcja wywoływana z przeanalizowana treścią odpowiedzi lub wartością null w argumencie
        if (profile) {
            displayUserProfile(profile);
        } else {
            //W tym miejscu status ma kod 404 lub zwróconą wartością jest null
            displayLoggedOutProfilePage();
        }
    })
    .catch((e) => {
        if (e instanceof NetworkError) {
            //Metoda fetch() może ulec awarii jeżeli połączenie sieciowe jest niedostępne
            displayErrorMessage("Sprawdź połączenie z Internetem");
        } else if (e instanceof TypeError) {
            //W tym miejscu został zgłoszony wyjatek typeError
            displayErrorMessage("Z serwerem dzieje się coś niedobrego!");
        } else {
            //W tym miejscu pojawił się jakiś inny błąd
            console.error(e);
        }
    });

//Promesy równoległe
// Utworzenie tablicy adresów URl
const urls = [
    /*Zero lub kilka adresów*/
];
// Przekształcenie tablicy adresów w tablicę promes
promises = urls.map((url) => fetch(url).then((r) => r.text()));
// Równoległa realizacja wszystkich promes i uzyskanie jednej promesy wynikowej
Promise.all(promises)
    .then((bodies) => {
        /*Operacje wykonywane na tablicy ciągu znaków*/
    })
    .catch((e) => console.error(e));

function wait(duration) {
    //Utworzenie i zwrócenie nowej promesy
    return new Promise((resolve, reject) => {
        //Argumenty kontrolujące promesę
        // Jeżeli argument jest błędny promesa jest odrzucana
        if (duration < 0) {
            reject(new Error("Podróże w czasie są na razie niemożliwe"));
        }
        //W przeciwnym wypadku czekamy asynchronicznie a następnie determinujemy promesę
        setTimeout(resolve, duration);
    });
}

//Asynchroniczna wersja funkcji getJSON()
const http = require("http");
const { url } = require("inspector");
const { resolve } = require("path");
function getJSON(url) {
    //Utworzenie i zwrócenie nowej promesy
    return new Promise((resolve, reject) => {
        //Wysłanie zapytania HTTP GET na zadany adres URL
        request = http.get(url, (response) => {
            //Funkcja wywoływana z chwilą nadejscia odpowiedzi
            //Odrzucenie promesy, jeżeli stan HTTP jest niewłaściwy
            if (response.statusCode !== 200) {
                reject(new Error(`HTTP staus ${response.statusCode}`));
                response.resume(); //Zapobieżeneie wyciekowi pamięci
            }
            //Odrzucenie promesy jeżeli nagłówek odpowiedzi jest niewłaściwy
            else if (response.headers["content-type"] !== "application/json") {
                reject(new Error("Niewłaściwy nagłówek content-type"));
                response.resume();
            } else {
                //Jeżeli  wszystko jest dobrze rejestrujemy zdarzenie inicjujące treści odpowiedzi
                let body = "";
                response.setEncoding("utf-8");
                response.on("data", (chunk) => {
                    body += chunk;
                });
                response.on("end", () => {
                    //Po odebraniu całej odpowiedzi analizujemy ją
                    try {
                        let parsed = JSON.parse(body);
                        //Po pomyślym przeanalizowaniu odpowiedzi spełniamy promesę
                        resolve(parsed);
                    } catch (e) {
                        //W przeciwnym razie odrzucamy ją
                        reject(e);
                    }
                });
            }
        });
        //Odrzucamy promese również wtedy gdy nie uda się wysłać zapytania
        request.on("error", (error) => {
            reject(error);
        });
    });
}

function fetchSequentially(urls) {
    //Odbierane odpowiedzi będą zapisane w tej zmiennej
    const bodies = [];
    //Funckja pobierająca treść jednej strony i zwracająca promesę
    function fetchOne(url) {
        return fetch(url)
            .then((response) => response.text())
            .then((body) => {
                //Zapisujemy odpowiedź w tablicy i świadomie pomijamy instrukcję return
                //(funkcja zwróci wartość undefined)
                bodies.push(body);
            });
    }
    //Uruchomienie promesy, która zostanie natychmiast spełniona z wartością indefined
    let p = Promise.resolve(undefined);

    //Przetworzenie w pętli adresów URL i utworzenie łańcucha promes o odpowiedniej długości
    //Każda promesa obsługuje jedno zapytanie
    for (url of urls) {
        p = p.then(() => fetchOne(url));
    }
    return p.then(() => bodies);
}
