class Media {
    constructor(title) {
        this._title = title;
        this._isCheckout = false;
        this._ratings = [];
    }
    get isCheckout() {
        return this._isCheckout;
    }
    get ratings() {
        return this._ratings;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
    set isCheckout(newIsCheckout) {
        return (this._isCheckout = newIsCheckout);
    }
    toggleCheckOutStatus(isCheckout) {
        if (this._isCheckout === true) {
            return (this._isCheckout = false);
        } else if (this._isCheckout === false) {
            return (this._isCheckout = true);
        } else {
            return 0;
        }
    }
    getAverageRating() {
        let ratingSum = this._ratings.reduce(
            (currentSum, rating) => currentSum + rating
        );
        return ratingSum / this._ratings.length;
    }
    addRating(value) {
        this._ratings.push(value);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get pages() {
        return this._pages;
    }
    get author() {
        return this._author;
    }
}
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckout);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckout);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
