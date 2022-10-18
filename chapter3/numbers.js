console.log("Potęgowanie => Math.pow(2,53); ==>", Math.pow(2, 53));
console.log(
    "Zaokrąglenie do najbliższej liczby całkowitej => Math.round(.6); ==>",
    Math.round(0.6)
);
console.log("Zaokrąglenie w góre => Math.ceil(.6); ==>", Math.ceil(0.6));
console.log("Zaokrąglenie w dół => Math.floor(.6); ==>", Math.floor(0.6));
console.log("Wartość bezwzględna => Math.abs(-5) ==>", Math.abs(-5));
console.log(
    "Wybranie największej wartości => Math.max(5,10,15) ==>",
    Math.max(5, 10, 15)
);
console.log(
    "Wybieranie najmniejszej wartości => Math.min(5,10,15) ==>",
    Math.min(5, 10, 15)
);
console.log(
    "Liczba pseudolosowa z zakresu 0 <= x < 1 => Math.random() ==>",
    Math.random()
);
console.log(
    "Liczba pseudolosowa z zakresu 0 <= x < 1 => Math.random().toFixed(2) z ilością miejsc po przecinku ==>",
    Math.random().toFixed(2)
);
console.log(
    "Liczba PI => Math.PI.toFixed(22) zaokrąglona do dwóch miejsc po przecinku ==>",
    Math.PI.toFixed(22)
);
console.log("e: podstawa logarytmu naturalnego => Math.E ==>", Math.E);
console.log("pierwiastek kwadratowy => Math.sqrt(3) ==>", Math.sqrt(3));
console.log(
    "Pierwiastek sześcienny => Math.pow(3, 1/3) ==>",
    Math.pow(3, 1 / 3)
);
console.log("Funkcja trygonometryczna sinus => Math.sin(10) ==>", Math.sin(10));
console.log("Logarytm naturalny z 10 => Math.log(10) ==>", Math.log(10));
console.log(
    "Logarytm liczby 100 przy podstawie 10 => Math.log(100)/Math.LN10 ==>",
    Math.log(100) / Math.LN10
);
console.log(
    "Logarytm liczby 512 przy podstawie 2 => Math.log(512)/Math.LN2 ==>",
    Math.log(512) / Math.LN2
);
console.log("Sześcian stałej e => Math.exp(3) ==>", Math.exp(3));
console.log(
    "Odpowiednik globalnej funkcji parseInt() => Number.parseInt() ==>",
    Number.parseInt(2.0004)
);
console.log(
    "Odpowiednik globalnej funkcji parseFloat() => Number.parseFloat() ==>",
    Number.parseFloat(2)
);
console.log("Czy x ma wartość NaN? => Number.isNaN(2) ==>", Number.isNaN(2));
console.log(
    "Czy x jest liczbą skończoną? => Number.isFinite(2) ==>",
    Number.isFinite(2)
);
console.log(
    "Czy x jest liczbą całkowitą? => Number.isInteger(2) ==>",
    Number.isInteger(2)
);
console.log(
    "Czy x jest liczbą całkowitą? => Number.isInteger(2.1) ==>",
    Number.isInteger(2.1)
);
console.log(
    "Czy x jest liczbą całkowitą z zakresu -(2^53) < x < 2^53? => Number.isSafeInteger(2111232642626246) ==>",
    Number.isSafeInteger(2111232642626246)
);
console.log(
    "Minimalna liczba całkowita => -(2^53-1) ==>",
    Number.MIN_SAFE_INTEGER
);
console.log(
    "Maksymalna liczba całkowita => 2^53-1 ==>",
    Number.MAX_SAFE_INTEGER
);
console.log("Najmniejsza różnica między liczbami => 2^-52 ==>", Number.EPSILON);
console.log(Date());