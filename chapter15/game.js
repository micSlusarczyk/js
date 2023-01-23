class GameState {
    //Metoda fabryczna tworząca nowy obiekt stanu
    static newGame() {
        let s = new GameState();
        s.secret = s.randomInt(0, 100); //Liczba całkowita 0 < n < 100
        s.low = 0; //Odgadywana liczba musi być większa niż ta
        s.high = 100; //Odgadywana liczba music być mniejsza niż ta
        s.numGuesses = 0; //Liczba prób odgadnięcia
        s.guess = null; //Ostatnio podana liczba
        return s;
    }

    //Obiekt zapisany za pomocą metody history.pushState() jest zwykłym obiektem, a nie instancją klasy GameState
    static fromStateObject(stateObject) {
        let s = new GameState();
        for (let key of Object.keys(stateObject)) {
            s[key] = stateObject[key];
        }
        return s;
    }

    //Aby użytkownik mógł tworzyć zakładki, trzeba stan gry kodować w  adresie URL
    toURL() {
        let url = new URL(window.location);
        url.searchParams.set("l", this.low);
        url.searchParams.set("h", this.high);
        url.searchParams.set("n", this.numGuesses);
        url.searchParams.set("g", this.guess);
        return url.href;
    }

    //Metoda fabryczna tworząca obiekt GameState i inicjująca go za pomocą zadanego adresu URL
    //Jeżeli adres ten nie zawiera oczekiwanych parametrów lub są one błędne, funkcja zwraca wartość null
    static fromURL(url) {
        let s = new GameState();
        let params = new URL(url).searchParams;
        s.low = parseInt(params.get("l"));
        s.high = parseInt(params.get("h"));
        s.numGuesses = parseInt(params.get("n"));
        s.guess = parseInt(params.get("g"));

        //Jeżeli adres URL nie zawiera wszystkich potrzebych parametrów
        //lub nie są one  liczbami całkowitymi, funkcja zwróci wartość null
        if (
            isNaN(s.low) ||
            isNaN(s.high) ||
            isNaN(s.numGuesses) ||
            isNaN(s.guess)
        ) {
            return null;
        }
        //Za każdym jebanym razem gdy gra jest wznawiana za pomocą adresu URL
        //wybierana jest nowa trajna liczba z odpowiedniego przedziału
        s.secret = s.randomInt(s.low, s.high);
        return s;
    }

    //Metoda zwracająca liczbę całkowitą z przedziału od min do max
    randomInt(min, max) {
        return min + Math.ceil(Math.random() * (max - min - 1));
    }

    //Metoda modyfikująca dokument odpowiednio do bieżącego stanu gry
    render() {
        let heading = document.querySelector(".heading");
        let range = document.querySelector(".range");
        let input = document.querySelector(".input");
        let playagain = document.querySelector(".playagain");

        //Zmiana tytułu i nagłówka dokumentu
        heading.textContent = document.title = `Mam na myśli liczbę z przedziału od ${this.low} do ${this.high}.`;

        //Zmiana wizualizacji przedziału liczb
        range.style.marginLeft = `${this.low}%`;
        range.style.width = `${this.high - this.low}%`;

        //Wyczyszczenie pola i ustawienie fokusu
        input.value = "";
        input.focus();

        //Wyświetlenie odpowiedzi na liczbę wpisaną przez użytkownika
        //Podpowiedź będzie widoczna ponieważ pole zostało wcześniej wyczyszczone
        if (this.guess === null) {
            input.placeholder = "Wpisz liczbę i naciśnij ENTER";
        } else if (this.guess < this.secret) {
            input.placeholder = `Liczba ${this.guess} jest za mała. Spróbuj jeszcze raz.`;
        } else if (this.guess > this.secret) {
            input.placeholder = `Liczba ${this.guess} jest za duża. Spróbuj jeszcze raz.`;
        } else {
            input.placeholder = document.title = `Bingo!`;
            heading.textContent = `Zgdałeś za ${this.numGuesses} razem!`;
            playagain.hidden = false;
        }
    }

    //Metoda zmieniająca stan gry w zależności od liczby wpisanej przez uzytkownika
    updateForGuess(guess) {
        //Jeżeli jest to liczba z poprawnego przedziału
        if (guess > this.low && guess < this.high) {
            //zmieniamy odpowiednio obiekt stanu
            if (guess < this.secret) this.low = guess;
            else if (guess > this.secret) this.high = guess;
            this.guess = guess;
            this.numGuesses++;
            return true;
        } else {
            //Błędne dane
            alert(
                `Wpisz liczbę większą niż ${this.low} i mniejszą niż ${this.high}`
            );
            return false;
        }
    }
}

//Po zdefiniowanu klasy prowadzenie gry jest kewstią zainicjowania a następnie modyfikowania
let gamestate = GameState.fromURL(window.location) || GameState.newGame();

//Zapisanie początkowego stanu gry w historii przeglądarki
//W początkowej fazie wykorzystywana jest metoda replaceState() a nie pushState()
history.replaceState(gamestate, "", gamestate.toURL());

//Wyświetlenie początkowego stanu
gamestate.render();

//Gdy użytkownik wpisze liczbę stan jest odpowiednio zmieniany i zapisywany w historii przeglądarki
document.querySelector(".input").onchange = (event) => {
    if (gamestate.updateForGuess(parseInt(event.target.value))) {
        history.pushState(gamestate, "", gamestate.toURL());
    }
    gamestate.render();
};

window.onpopstate = (event) =>{
    gamestate = GameState.fromStateObject(event.state);
    gamestate.render();
}
