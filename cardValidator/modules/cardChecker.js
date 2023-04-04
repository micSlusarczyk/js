export const cardName = (cardNumber) => {
    const masterCardLength = 16;
    const visaLength = [13, 16];
    const americanExpressLength = 15;
    const masterCardStart = /^5[1-5]/;
    const visaStart = /^4/;
    const americanExpressStart = /^3[47]/;

    if (
        cardNumber.length === masterCardLength &&
        cardNumber.match(masterCardStart)
    ) {
        return "MasterCard";
    } else if (
        visaLength.includes(cardNumber.length) &&
        cardNumber.match(visaStart)
    ) {
        return "Visa";
    } else if (
        cardNumber.length === americanExpressLength &&
        cardNumber.match(americanExpressStart)
    ) {
        return "AmericaExpress";
    } else {
        return false;
    }
};
