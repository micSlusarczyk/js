// Klasa reprezentująca liczby zespolone
class Complex {
    // Konstruktor definiuje pola instancji r oraz i w każdej tworzonej instancji
    constructor(real, imaginary) {
        this.r = real; //To pole zawiera część rzeczywistą liczby
        this.i = imaginary; //To pole zawiera część urojoną liczby
    }
    // Poniższe metody dodają i mnożą liczby zespolone
    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(
            this.r * that.r - this.i * that.i,
            this.r * that.i + this.i * that.r
        );
    }
    // Statyczne metody wykonujące działania arytmetyczne
    static sum(c, d) {
        return c.plus(d);
    }
    static product(c, d) {
        return c.times(d);
    }
    // Metody instancji zdefiniowane jako gettery
    get real() {
        return this.r;
    }
    get imaginary() {
        return this.i;
    }
    get magnitude() {
        return Math.hypot(this.r, this.i);
    }

    toString() {
        return `{${this.r},${this.i}}`;
    }
    // Sprawdzenie czy dwie instacje danej klasy reprezentują tę samą wartość
    equals(that) {
        return (
            that instanceof Complex && this.r === that.r && this.i === that.i
        );
    }
    // Gdy w ciele klasy będzie można stosować statyczne pola przydatną stałą Complex.ZERO będzie można zdefiniować w następujący sposób
    //static ZERO = new Complex(0,0);
}

// Poniżej zdefiniowanych jest kilka pól klasy zawierających przydatne, predefiniowane liczby zespolone
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

// Użycie konstruktora, pól instancji, metod instancji, pól klasy i metod klasy
let c = new Complex(2, 3); //Utworzenie nowego obiektu
let d = new Complex(c.r, c.i); // Użycie pól instacji c
c.plus(d).toString(); // "{5,5}"; użycie metod instacji
c.magnitude; // Math.hypot(2,3); użycie gettera
Complex.product(c, d); // new Complex (0,13)
Complex.ZERO.toString(); //"{0,0}"
