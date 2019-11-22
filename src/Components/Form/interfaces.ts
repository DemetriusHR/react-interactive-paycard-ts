import * as React from "react";

export interface IFormState {
    cardMonth?: string;
    cardNumber?: string;
    cardYear?: string;
    monthsArr?: Array<number | string>;
    yearsArr?: number[];
}

export interface IFormProps {
    onUpdateStateValue: (obj: object) => void;
    cardNumberRef?: React.MutableRefObject<HTMLInputElement>;
    cardHolderRef?: React.MutableRefObject<HTMLInputElement>;
    cardDateRef?: React.MutableRefObject<HTMLSelectElement>;
    cardCvvRef?: React.MutableRefObject<HTMLInputElement>;
    onCardInputFocus?: (arg1: any, arg2: any) => void;
    onCardInputBlur?: () => void;
    cardConfig: { name: string; size: number; type: string; maxLength: number };
}
