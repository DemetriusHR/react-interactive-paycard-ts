function cardBackgroundName() {
    const random = Math.floor(Math.random() * 25 + 1);
    return require(`./imgs/card-background/${random}.jpeg`);
}

const NonNumeric = /\D/g;

const mapToNumeric = (value: string) => value.replace(NonNumeric, "");

const defineClassActive = (value: boolean | HTMLElement) => value ? "-active" : "";

const cardTypeImg = (cardType: string) => require(`./imgs/card-type/${cardType}.png`);

export { cardBackgroundName, cardTypeImg, mapToNumeric, defineClassActive }