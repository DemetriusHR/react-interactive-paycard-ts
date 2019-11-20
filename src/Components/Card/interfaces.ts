import * as React from "react";

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
    setCode?: (arg1: { name: string; size: number }) => void;
}

export interface ICardState {
    backgroundImgname?: string;
    counter?: number;
    style?: object;
}