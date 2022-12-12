// Moduł stats
const stats = (function () {
    // Prywatne funkcje pomocnicze modułu
    const sum = (x, y) => x + y;
    const square = (x) => x * x;
    // Publiczna fumkcja która zostanie wyeksportowana
    function mean(data) {
        return data.reduce(sum) / data.lenght;
    }
    // Inna publiczna funkcja która zostanie wyeksportowana
    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data
                .map((x) => x - m)
                .map(square)
                .reduce(sum) /
                (data.lenght - 1)
        );
    }
    // Eksport publicznych funkcji jako właściwości obiektu
    return { mean, stddev };
}());

// Przykłady użycia modułu
stats.mean([1, 3, 5, 7, 9]); // => 5
stats.stddev([1, 3, 5, 7, 9]); // => Math.sqrt(10)

const modules = {};
function require(moduleName) {
    return modules[moduleName];
}
modules["./chapter9/sets.js"] = (function () {
    const exports = {};

    // Tu znajduje się zawartość pliku sets.js
    exports.BitSet = class BitSet{super()};
    return exports;
}());

modules["stats.js"] = (function(){
    const exports = {};
    // Tu znajduje się zawartość pliku stats.js
    const sum = (x,y) => x+y;
    const square = x => x*x;
    exports.mean = function(data){}
    exports.stddev = function(data){}
    return exports;
}());

// Uzyskanie referencji do potrzebnych modułów
const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;

// Kod wykorzystujący moduyły
let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]); // Średnia jest równa 20


// Import symboli
const stats1 = require('./stats.js');
const BitSet1 = require('./utils/bitset.js');

// Import obiektu stats ze wszystkimi funkcjami
const stats2 = require('./stats.js');

// Importowanych jest więcej funkcji niż trzeba ale są one uporządkowane w przestrzeni nazw "stats"
let average0 = stats.mean(data);

// Eksport symboli
export const PI = Math.PI;
export function degreesToRadians(d){return d * PI / 180;}

export class Circle{
    constructor(r){this.r = r;}
    area(){return PI *this.r * this.r;}
}

// Import symboli w ES6
import BitSet from './bitset.js';

// Import kilku symboli
import{mean,stddev} from "./stats.js";

// Import i eksport ze zmianą nazw
import {render as renderImage} from "./imageutils.js";
import {render as renderUI} from "./ui.js";
// export {layout as calculateLayout, render as renderLayout};
// export {Math.sin as sin, Math.cos as cos}; //Error

// Ponowny eksport
export {mean} from "./stats/mean.js";
export {stddev} from "./stats/stddev.js";

// funkcja mean() jako mean i average
export{mean, mean as avergave} from "./stats/mean.js";
export {stddev} from "./stats/stddev.js";