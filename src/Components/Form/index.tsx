import * as React from "react";
import { IFormProps } from "./interfaces";
import FormWrapper from "./style";
import NumberCardTest from "./utils";

const currentYear = new Date().getFullYear();

const Form: React.FC<IFormProps> = React.memo(
  ({
    onUpdateStateValue,
    cardNumberRef,
    cardHolderRef,
    cardDateRef,
    cardCvvRef,
    onCardInputFocus,
    onCardInputBlur,
    cardConfig,
    children
  }) => {
    const [state, setState] = React.useState({
      cardMonth: "",
      cardNumber: "",
      cardYear: "",
      cursorIdx: 0,
      monthsArr: Array.from(new Array(12), (_, i) => {
        const month = i + 1;
        return month <= 9 ? "0" + month : month;
      }),
      yearsArr: Array.from(new Array(9), (_, i) => currentYear + i)
    });
    const [prevState, setPrevState] = React.useState(state);

    const updateMainState = React.useCallback(
      (name: string, value: string | boolean) => {
        onUpdateStateValue({
          name,
          value
        });
      },
      [onUpdateStateValue]
    );

    const handleFormChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        setState(prev => {
          setPrevState(prev);

          return { ...prev, [name]: value };
        });
        updateMainState(name, value);
      },
      [updateMainState]
    );

    const onCardNumberChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const cardNumber = NumberCardTest(value, cardConfig);

        setState(prev => {
          setPrevState(prev);

          return { ...prev, cardNumber: cardNumber.trimRight() };
        });
        updateMainState(name, cardNumber);
      },
      [updateMainState, cardConfig]
    );

    const onCvvFocus = React.useCallback(() => {
      updateMainState("isCardFlipped", true);
    }, [updateMainState]);

    const onCvvBlur = React.useCallback(() => {
      updateMainState("isCardFlipped", false);
    }, [updateMainState]);

    const onFocusInputNumber = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onCardInputFocus(e, "cardNumber");
      },
      [onCardInputFocus]
    );

    const onFocusInputHolder = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onCardInputFocus(e, "cardHolder");
      },
      [onCardInputFocus]
    );

    const onFocusInputDateMonth = React.useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        onCardInputFocus(e, "cardDate");
      },
      [onCardInputFocus]
    );

    const onFocusInputDateYear = React.useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        onCardInputFocus(e, "cardDate");
      },
      [onCardInputFocus]
    );

    React.useEffect(() => {
      const node = cardNumberRef.current;
      const { cardNumber: cardNum } = state;
      const { cardNumber: prevCardNum } = prevState;
      if (
        cardNum.length > prevCardNum.length ||
        cardNum[state.cursorIdx - 1] === " "
      ) {
        setState(prev => {
          setPrevState(prev);

          return { ...prev, cursorIdx: prevState.cursorIdx + 1 };
        });
      }

      node.selectionStart = node.selectionEnd = state.cursorIdx;
    }, [state, prevState, cardNumberRef]);

    const maxLengthInput = React.useMemo(
      () => (cardConfig.maxLength ? cardConfig.maxLength : 19),
      [cardConfig.maxLength]
    );

    return (
      <FormWrapper>
        <div className="card-list">{children}</div>
        <div className="card-form__inner">
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              type="tel"
              name="cardNumber"
              className="card-input__input"
              autoComplete="off"
              onChange={onCardNumberChange}
              maxLength={maxLengthInput}
              ref={cardNumberRef}
              onFocus={onFocusInputNumber}
              onBlur={onCardInputBlur}
              value={state.cardNumber}
            />
          </div>

          <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">
              Card Holder
            </label>
            <input
              type="text"
              className="card-input__input"
              autoComplete="off"
              name="cardHolder"
              onChange={handleFormChange}
              ref={cardHolderRef}
              onFocus={onFocusInputHolder}
              onBlur={onCardInputBlur}
            />
          </div>

          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">
                  Expiration Date
                </label>
                <select
                  className="card-input__input -select"
                  value={state.cardMonth}
                  name="cardMonth"
                  onChange={handleFormChange}
                  ref={cardDateRef}
                  onFocus={onFocusInputDateMonth}
                  onBlur={onCardInputBlur}
                >
                  <option value="" disabled={true}>
                    Month
                  </option>

                  {state.monthsArr.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <select
                  name="cardYear"
                  className="card-input__input -select"
                  value={state.cardYear}
                  onChange={handleFormChange}
                  onFocus={onFocusInputDateYear}
                  onBlur={onCardInputBlur}
                >
                  <option value="" disabled={true}>
                    Year
                  </option>

                  {state.yearsArr.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  {cardConfig.name}
                </label>
                <input
                  type="tel"
                  className="card-input__input"
                  maxLength={cardConfig.size}
                  autoComplete="off"
                  name="cardCvv"
                  onChange={handleFormChange}
                  onFocus={onCvvFocus}
                  onBlur={onCvvBlur}
                  ref={cardCvvRef}
                />
              </div>
            </div>
          </div>
        </div>
      </FormWrapper>
    );
  }
);

export default Form;
