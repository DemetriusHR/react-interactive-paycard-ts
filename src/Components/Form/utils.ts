function NumberCardTest(value: string, cardConfig: { type: string }) {
    let cardNumber = value;
    const valueChanged = value.replace(/\D/g, "");

    if (cardConfig.type === "american-express") {
        cardNumber = valueChanged.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (cardConfig.type === "diners-club") {
        // diner's club, 14 digits
        cardNumber = valueChanged.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^\d{0,16}$/.test(valueChanged)) {
        // regular cc number, 16 digits
        cardNumber = valueChanged
            .replace(/(\d{4})/, "$1 ")
            .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
            .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
    }

    return cardNumber;
}

export default NumberCardTest;
