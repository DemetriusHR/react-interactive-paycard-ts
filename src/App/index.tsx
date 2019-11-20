import * as React from "react";

import Card from "../Components/Card";
import Form from "../Components/Form";
import AppWrapper from "./style";

const defaultCardNo = "#### #### #### ####";
const defaultCardHolderName = "FULL NAME";
const defaultCardMonth = "";
const defaultCardYear = "";
const defaultCardCvv = "";

const initialState = {
  cardCvv: defaultCardCvv,
  cardHolder: defaultCardHolderName,
  cardMonth: defaultCardMonth,
  cardNumber: defaultCardNo,
  cardYear: defaultCardYear,
  code: {
    name: "CVC",
    size: 3
  },
  currentFocusedElm: null,
  isCardFlipped: false
};

// This are the references for the Card DIV elements
const cardElementsRef = {
  cardDate: null,
  cardHolder: null,
  cardNumber: null
};

const MainScreen = () => {
  const [state, setState] = React.useState(initialState);

  // References for the Form Inputs
  const formFieldsRefObj = {
    cardCvv: React.useRef(),
    cardDate: React.useRef(),
    cardHolder: React.useRef(),
    cardNumber: React.useRef()
  };

  const updateStateValue = React.useCallback(({ name, value }) => {
    setState(prevState => ({
      ...prevState,
      [name]: value || initialState[name]
    }));
  }, []);

  const focusFormFieldByKey = React.useCallback(
    (key: string) => {
      formFieldsRefObj[key].current.focus();
    },
    [formFieldsRefObj]
  );

  const onCardFormInputFocus = React.useCallback(
    (_: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
      setState(prevState => ({
        ...prevState,
        currentFocusedElm: cardElementsRef[inputName]
      }));
    },
    []
  );

  const onCardInputBlur = React.useCallback(() => {
    setState(prevState => ({
      ...prevState,
      currentFocusedElm: null
    }));
  }, []);

  const onSetCode = React.useCallback((code: { name: ""; size: 0 }) => {
    setState(prevState => ({
      ...prevState,
      code
    }));
  }, []);

  const cardNumberRef = React.useCallback((node: any) => {
    return (cardElementsRef.cardNumber = node);
  }, []);

  const cardHolderRef = React.useCallback((node: any) => {
    return (cardElementsRef.cardHolder = node);
  }, []);

  const cardDateRef = React.useCallback((node: any) => {
    return (cardElementsRef.cardDate = node);
  }, []);

  return (
    <AppWrapper>
      <Form
        cardDateRef={formFieldsRefObj.cardDate}
        cardHolderRef={formFieldsRefObj.cardHolder}
        cardNumberRef={formFieldsRefObj.cardNumber}
        onCardInputBlur={onCardInputBlur}
        onCardInputFocus={onCardFormInputFocus}
        onUpdateStateValue={updateStateValue}
        code={state.code}
      >
        <Card
          cardNumber={state.cardNumber}
          cardHolder={state.cardHolder}
          cardMonth={state.cardMonth}
          cardYear={state.cardYear}
          cardCvv={state.cardCvv}
          isCardFlipped={state.isCardFlipped}
          currentFocusedElm={state.currentFocusedElm}
          onCardElementClick={focusFormFieldByKey}
          cardNumberRef={cardNumberRef}
          cardHolderRef={cardHolderRef}
          cardDateRef={cardDateRef}
          setCode={onSetCode}
        />
      </Form>
    </AppWrapper>
  );
};

export default MainScreen;
