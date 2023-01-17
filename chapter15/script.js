//Definicja funkcji wyświetlający bieżący czas
function displayTime() {
    let clock = document.querySelector(".clock"); //Uzyskanie referencji do elementu .clock
    let now = new Date(); //Odczytanie bieżącego czasu
    clock.textContent = now.toLocaleTimeString(); //Wyświltenie czasu
}
displayTime(); //Wyświetlenie czasu
setInterval(displayTime, 1000); //a następnie aktualizowanie go co sekundę

//Obsługa buttona
let b = document.querySelector(".mybutton");
b.onclick = function () {
    console.log("Dzięki za kliknięcie!");
};
b.addEventListener("click", () => {
    console.log("Dzięki jeszcze raz!");
});