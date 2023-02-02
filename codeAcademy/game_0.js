const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "paper" ||
        userInput === "rock" ||
        userInput === "scissros"
    ) {
        return userInput;
    } else {
        console.log("Error!");
    }
};

const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie!";
    } else {
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                return "Computer won!";
            } else {
                return "You win!";
            }
        }
        if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                return "Computer won!";
            } else {
                return "You win!";
            }
        }
        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "Computer won!";
            } else {
                return "You win!";
            }
        }
    }
};

const playGame = () => {
    const userChoice = getUserChoice("rock");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();
