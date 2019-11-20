function NumberCardTest(value: string) {
    let cardNumber = value;
    const valueChanged = value.replace(/\D/g, "");

    if (/^3[47]\d{0,13}$/.test(valueChanged)) {
        cardNumber = valueChanged
            .replace(/(\d{4})/, "$1 ")
            .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(valueChanged)) {
        // diner's club, 14 digits
        cardNumber = valueChanged
            .replace(/(\d{4})/, "$1 ")
            .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
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