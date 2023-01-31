let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
    "JavaScript",
];
secretMessage.pop(); //Remove last element
secretMessage.push("to", "Program"); // add two elemenet
secretMessage[7] = "right"; // change element with idex[7]
secretMessage.shift(); //Remove first element
secretMessage.unshift("Programming"); // Add element to beginning
secretMessage.splice(6, 5, "know"); //remove some string and replace it
console.log(secretMessage.join(" "));
