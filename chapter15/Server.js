const http = require("http");
const fs = require("fs");
const url = require("url");

//Kliencki kod HTML czatu
const clientHTML = fs.readFileSync("chapter15\\chatClient.html");

//Tablica obiektów ServerResponse wykorzystywanych do zgłaszania zdarzeń
let clients = [];

//Rozpoczęcie nasłuchu na porcie 8080
let server = new http.Server();
server.listen(8080);

//Serwer po odebraniu zapytania wywołuje poniższą funkcje
server.on("request", (request, response) => {
    //Analiza adresu URL zapytania
    let pathname = url.parse(request.url).pathname;

    //Jeżeli zapytanie zawiera adres główny  wysyłany jest kod klineck ichatu
    if (pathname === "/") {
        response
            .writeHead(200, { "Content-Type": "text/html" })
            .end(clientHTML);
    }

    //Jeżeli adres jest inny niż /chat albo metoda jest inna niż GET lub POST
    //wysyłana jest odpowiedź z kodem 404
    else if (
        pathname !== "/chat" ||
        (request.method !== "GET" && request.method !== "POST")
    ) {
        response.writeHead(404).end();
    }
    //Zapytanie GET wysłane na adres /chat oznacza, ze klient się podłącza
    else if (request.method === "GET") {
        acceptNewClient(request, response);
    }
    //W przeciwnym razie jest to zapytanie POST zawierające nowy komunikat
    else {
        broadcatNewMessage(request, response);
    }
});

function acceptNewClient(request, response) {
    //Zapamiętanie obiektu odpowiedzi aby można go było wykorzystać do wysyłania przyszłych komuniktaów
    clients.push(response);

    //Jeżeli klient zakończy połączenie odpowiadający mu obiekt jest usuwany z tablicy
    request.connection.on("end", () => {
        clients.splice(clients.indexOf(response), 1);
        response.end();
    });

    //Ustawienie nagłówków i wysyłanie początkowego zdarzenia jednemu klientowi
    response.writeHead(200, {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
        "Cache-Control": "no-cache",
    });
    response.write("event: chat\ndata: Connected\n\n");
}

//Funkcja wywoływana po odebraniu zapytania POST
async function broadcatNewMessage(request, response) {
    //Najpierw odczytujemy treść zapytania i uzyskujemy komunikat
    request.setEncoding("utf8");
    let body = "";
    for await (let chunk of request) {
        body += chunk;
    }
    //Po odczytanie treści wysyłamy pustą odpowiedź i zamykamy połączenie
    response.writeHead(200).end();

    //Zapisanie komunikatu w formacie text/event-stream i poprzedzenie każdego wiersza prefiksem "data:"
    let message = "data: " + body.replace("\n", "\ndata: ");

    //Dodanie do komunikatu prefiksu definiującego zdarzenie chat
    let event = `event: chat\n${message}\n\n`;

    //Wysłanie zdarzenia do wszystkich podłączonych klientów
    clients.forEach((client) => client.write(event));
}
