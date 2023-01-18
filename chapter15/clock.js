//Funkcja modyfikująca kod SVG zegara tak, abypokazywał bieżący czas
(function updateClock() {
    let now = new Date(); //bieżący czas
    let sec = now.getSeconds();
    let min = now.getMinutes() + sec / 60;
    let hour = (now.getHours() % 12) + min / 60;
    let minangle = min * 6;
    let hourangle = hour * 30;

    //Wyszukanie elementów SVG reprezentujących wskazówki
    let minhand = document.querySelector(".clock .minutehand");
    let hourhand = document.querySelector(".clock .hourhand");

    //Ustawienie atrybutu SVG w celu obrócenia wksazówek wokół środka tarczy
    minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
    hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

    //Ponowne wywołanie funkcji po upływie 60 sekund
    setTimeout(updateClock, 60000);
})();
