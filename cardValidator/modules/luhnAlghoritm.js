const luhnAlghoritm = (cardNumber) => {
    newArr = input.toString().split("").map(Number);
    reverseArr = newArr.reverse();
    sum = 0;

    for (let i = 0; i < reverseArr.length; i++) {
        let digit = reverseArr[i];
        if (i % 2 !== 0) {
            digit *= 2;
        }
        if (digit > 9) {
            digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 === 0;
};

export default luhnAlghoritm;
