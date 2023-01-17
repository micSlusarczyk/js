customElements.define(
    "inline-circle",
    class InlineCirlce extends HTMLElement {
        //Przeglądarka będzie wywoływała te metodę w chwili wstawienia elementu <inline-circle>
        connectedCallback() {
            //Zdefiniowanie stylów potrzebnych do utworzenia kółek
            this.style.display = "inline-block";
            this.style.borderRadius = "50%";
            this.style.border = "1px solid black";
            this.style.transform = "translateY(10%)";
            //Jeżeli wielkość nie jest jeszcze zdefiniowana ustawiamy domyślną wartość zależną
            // od bieżącej wielkości czcionki
            if (!this.style.width) {
                this.style.width = ".8em";
                this.style.height = ".8em";
            }
        }
        //Statyczna właściwość observedAttributes określa atrybuty o których zmianach będziemy powiadamiani
        static get observedAttributes() {
            return ["diameter", "color"];
        }

        //Ta funkcja zwrotna będzie wywoływana w momencie zmiany wartości
        //któregoś z wymienionych wyżej atrybutów podczas analizowania elementu
        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case "diameter":
                    //W przypadku zmiany atrybutu diameter zmieniamy styl określający wielkość kółka
                    this.style.width = newValue;
                    this.style.height = newValue;
                    break;
                case "color":
                    //W przypadku zmiany atrybutu color zmieniamy styl określający kolor kółka
                    this.style.backgroundColor = newValue;
                    break;
            }
        }
        //Definicje właściwości obiektu odpowiadające atrybutom elementu
        get diameter() {
            return this.getAttribute("diameter");
        }
        set diameter(diameter) {
            this.setAttribute("diameter", diameter);
        }
        get color() {
            return this.getAttribute("color");
        }
        set color(color) {
            this.setAttribute("color", color);
        }
    }
);
