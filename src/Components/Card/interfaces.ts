export interface ICardProps {
    cardHolder?: string;
    cardNumber?: string;
    cardMonth?: string;
    cardYear?: string;
    cardCvv?: string;
    isCardFlipped?: boolean;
    currentFocusedElm?: HTMLElement;
    onCardElementClick?: (x: any) => void;
    cardNumberRef?: (node: any) => any;
    cardHolderRef?: (node: any) => any;
    cardDateRef?: (node: any) => any;
    setCardConfig?: (arg1: { name: string; size: number; type: string; maxLength: number }) => void;
}

export interface ICardState {
    backgroundImgname?: string;
    counter?: number;
    style?: object;
}
