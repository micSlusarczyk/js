import { cardName } from "./modules/cardChecker.js";
import { input, button, result } from "./modules/inputs.js";
import { clear } from "./modules/clear.js";

button.addEventListener("click", () => {
    let cardNumber = input.value;
    const name = cardName(cardNumber);
    if (name === false) {
        result.textContent = `Card Number: ${cardNumber} Card Name: undefined`;
        clear();
    } else {
        result.textContent = `Card Number: ${cardNumber} Card Name: ${name}`;
        clear();
    }
});
