//Logs
//Use the console.log code in the editor to log your age to the console.
console.log(27);
//On the next line, write another console.log to print out a different number representing the number of weeks you’ve been programming.
console.log(15);

//DataTypes
console.log("JavaScript");
console.log(2011);
console.log("Woohoo! I love to code! #codecademy");
console.log(20.49);

//Arithemitcs
console.log(27 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

//String Concatenation
console.log("Hello" + "World");
console.log("Hello" + " " + "World");

//Built-in Objects
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

//Kelvin weather
//Kelvin degree
const kelvin = 0;
//Celsius degree
const celsius = kelvin - 273;
//Fahrenheit degree
let fahrenheit = celsius * (9 / 5) + 32;
//Round Fahrenheit degree
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33 / 100);
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${kelvin} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);

//Dog Yaers
//My age
const myAge = 3;
const myName = "Michal";

//Early years
let earlyYears = 2;
earlyYears *= 10.5;

//later mYears
let laterYears = myAge - 2;

//Multiply laterYears
laterYears *= 4;

//My years in dog's years
let myAgeInDogYears = earlyYears + laterYears;

console.log(
    `My name is ${myName.toLowerCase()}. I am ${myAge} years which is ${myAgeInDogYears} years old in dog years.`
);

//8 ball
let userName = "";
let userQuestion = "What's weather today?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");
switch (randomNumber) {
    case 1:
        eightBall = "It is certain";
        break;
    case 2:
        eightBall = "It is decidedly so";
        break;
    case 3:
        eightBall = "Reply hazy try again";
        break;
    case 2:
        eightBall = "It is decidedly so";
        break;
    case 4:
        eightBall = "Cannot predict now";
        break;
    case 5:
        eightBall = "Do not count on it";
        break;
    case 6:
        eightBall = "My sources say no";
        break;
    case 7:
        eightBall = "Outlook not so good";
        break;
    case 8:
        eightBall = "Outlook not so good";
        break;
    default:
        eightBall = "I don't know";
        break;
}

console.log(userQuestion);
console.log(randomNumber);
console.log(eightBall);

//Race Day
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 16;

if (runnerAge >= 18 && earlyRegister) {
    raceNumber += 1000;
    console.log(`The race start at 9:30 am. Yor number is ${raceNumber}`);
} else if (runnerAge >= 18 && !earlyRegister) {
    console.log(`The race start at 11:00 am. Yor number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`The race start at 12:30 pm. Yor number is ${raceNumber}`);
}

//Nested loops
// Write your code below
const bobsFollowers = ["John", "James", "David", "Robert"];
const tinasFollowers = ["John", "James", "Cindy"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}
console.log(mutualFollowers);

//Right Iterator
const cities = [
    "Orlando",
    "Dubai",
    "Edinburgh",
    "Chennai",
    "Accra",
    "Denver",
    "Eskisehir",
    "Medellin",
    "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log("Have you visited " + city + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
