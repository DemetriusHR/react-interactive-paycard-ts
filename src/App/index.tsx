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
  cardConfig: {
    maxLength: 19,
    name: "CVC",
    size: 3,
    type: ""
  },
  cardCvv: defaultCardCvv,
  cardHolder: defaultCardHolderName,
  cardMonth: defaultCardMonth,
  cardNumber: defaultCardNo,
  cardYear: defaultCardYear,
  currentFocusedElm: null,
  isCardFlipped: false
};

const cardElementsRef = {
  cardDate: null,
  cardHolder: null,
  cardNumber: null
};

const MainScreen = () => {
  const [state, setState] = React.useState(initialState);

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

  const onSetCardConfig = React.useCallback(
    (cardConfig: { name: ""; size: 0; type: ""; maxLength: 19 }) => {
      setState(prevState => ({
        ...prevState,
        cardConfig
      }));
    },
    []
  );

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
        cardConfig={state.cardConfig}
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
          setCardConfig={onSetCardConfig}
        />
      </Form>
    </AppWrapper>
  );
};

export default MainScreen;
