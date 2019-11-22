import creditCardType from "credit-card-type";
import * as React from "react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup
} from "react-transition-group";
import usePrevious from "../Hooks/usePrevious";
import chip from "./imgs/chip/chip.png";
import { ICardProps } from "./interfaces";
import CardWrapper from "./style";
import {
  cardBackgroundName,
  cardTypeImg,
  defineClassActive,
  mapToNumeric
} from "./utils";

const Card: React.FC<ICardProps> = React.memo(
  ({
    cardHolder,
    cardNumber,
    cardMonth,
    cardYear,
    cardCvv,
    isCardFlipped,
    currentFocusedElm,
    cardNumberRef,
    onCardElementClick,
    cardHolderRef,
    setCardConfig,
    cardDateRef
  }) => {
    const prevProps = usePrevious({ currentFocusedElm });
    const [state, setState] = React.useState({
      backgroundImgname: cardBackgroundName(),
      counter: 0,
      style: {}
    });
    const [code, setStateCode] = React.useState({ name: "CVV" });

    const cardType = React.useMemo(() => {
      const numberCard = mapToNumeric(cardNumber);
      let flagCard = creditCardType(numberCard)[0];

      if (flagCard) {
        const maxLength = flagCard.lengths
          ? flagCard.lengths[flagCard.lengths.length - 1]
          : 19;
        if (setCardConfig) {
          setCardConfig({ ...flagCard.code, type: flagCard.type, maxLength });
        }

        setStateCode(flagCard.code);
        return flagCard.type;
      }

      flagCard = creditCardType("")[0];
      setCardConfig(flagCard.code);

      return "not-flag";
    }, [cardNumber, setCardConfig]);

    const outlineElementStyle = React.useCallback(
      (element: HTMLElement) =>
        element
          ? {
              height: `${element.offsetHeight}px`,
              transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`,
              width: `${element.offsetWidth}px`
            }
          : null,
      []
    );

    React.useEffect(() => {
      const currentFocusedElmPrev = prevProps
        ? prevProps.currentFocusedElm
        : null;
      if (currentFocusedElm && currentFocusedElm !== currentFocusedElmPrev) {
        const style = outlineElementStyle(currentFocusedElm);
        setState(prevState => ({ ...prevState, style }));
      }
    }, [currentFocusedElm, prevProps, outlineElementStyle]);

    const maskCardNumber = React.useCallback((cardNumberEntrance: string) => {
      const cardNumberSplit = cardNumberEntrance.split("");

      cardNumberSplit.forEach((_, index) => {
        if (index > 4 && index < cardNumberSplit.length - 4) {
          if (cardNumberSplit[index] !== " ") {
            cardNumberSplit[index] = "*";
          }
        }
      });

      return cardNumberSplit;
    }, []);

    const clickLabelNumber = React.useCallback(() => {
      if (onCardElementClick) {
        onCardElementClick("cardNumber");
      }
    }, [onCardElementClick]);

    const clickLabelHolder = React.useCallback(() => {
      if (onCardElementClick) {
        onCardElementClick("cardHolder");
      }
    }, [onCardElementClick]);

    const clickLabelDate = React.useCallback(() => {
      if (onCardElementClick) {
        onCardElementClick("cardDate");
      }
    }, [onCardElementClick]);

    const cardHolderArr = React.useMemo(() => cardHolder.split(""), [
      cardHolder
    ]);
    const cardNumberArr = React.useMemo(() => maskCardNumber(cardNumber), [
      maskCardNumber,
      cardNumber
    ]);
    const splitCardCvv = React.useMemo(() => cardCvv.split(""), [cardCvv]);

    return (
      <CardWrapper className={`${defineClassActive(isCardFlipped)}`}>
        <div className="card-item__side -front">
          <div
            className={`card-item__focus ${defineClassActive(
              currentFocusedElm
            )}`}
            style={state.style}
          />
          <div className="card-item__cover">
            <img
              alt=""
              src={state.backgroundImgname}
              className="card-item__bg"
            />
          </div>

          <div className="card-item__wrapper">
            <div className="card-item__top">
              <img src={chip} alt="" className="card-item__chip" />
              <div className="card-item__type">
                <img
                  alt={cardType}
                  src={cardTypeImg(cardType)}
                  className="card-item__typeImg"
                />
              </div>
            </div>
            <label
              className="card-item__number"
              ref={cardNumberRef}
              onClick={clickLabelNumber}
            >
              <TransitionGroup className="slide-fade-up" component="div">
                {cardNumber ? (
                  cardNumberArr.map((val: string, index: number) => (
                    <CSSTransition
                      classNames="slide-fade-up"
                      timeout={250}
                      key={index}
                    >
                      <div className="card-item__numberItem">{val}</div>
                    </CSSTransition>
                  ))
                ) : (
                  <CSSTransition classNames="slide-fade-up" timeout={250}>
                    <div className="card-item__numberItem">#</div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </label>
            <div className="card-item__content">
              <label
                className="card-item__info"
                onClick={clickLabelHolder}
                ref={cardHolderRef}
              >
                <div className="card-item__holder">Card Holder</div>
                <div className="card-item__name">
                  <TransitionGroup className="slide-fade-up" component="div">
                    {cardHolder === "FULL NAME" ? (
                      <CSSTransition classNames="slide-fade-up" timeout={250}>
                        <div>FULL NAME</div>
                      </CSSTransition>
                    ) : (
                      cardHolderArr.map((val, index) => (
                        <CSSTransition
                          timeout={250}
                          classNames="slide-fade-right"
                          key={index}
                        >
                          <span className="card-item__nameItem">{val}</span>
                        </CSSTransition>
                      ))
                    )}
                  </TransitionGroup>
                </div>
              </label>
              <div
                className="card-item__date"
                onClick={clickLabelDate}
                ref={cardDateRef}
              >
                <label className="card-item__dateTitle">Expires</label>
                <label className="card-item__dateItem">
                  <SwitchTransition in-out={true}>
                    {!cardMonth ? (
                      <CSSTransition
                        classNames="slide-fade-up"
                        timeout={250}
                        key={cardMonth}
                      >
                        <span>MM</span>
                      </CSSTransition>
                    ) : (
                      <CSSTransition
                        classNames="slide-fade-up"
                        timeout={250}
                        key={cardMonth}
                      >
                        <span>{cardMonth}</span>
                      </CSSTransition>
                    )}
                  </SwitchTransition>
                </label>
                /
                <label htmlFor="cardYear" className="card-item__dateItem">
                  <SwitchTransition out-in={true}>
                    {!cardYear ? (
                      <CSSTransition
                        classNames="slide-fade-up"
                        timeout={250}
                        key={cardYear}
                      >
                        <span>YY</span>
                      </CSSTransition>
                    ) : (
                      <CSSTransition
                        classNames="slide-fade-up"
                        timeout={250}
                        key={cardYear}
                      >
                        <span>{cardYear.toString().substr(-2)}</span>
                      </CSSTransition>
                    )}
                  </SwitchTransition>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="card-item__side -back">
          <div className="card-item__cover">
            <img
              alt=""
              src={state.backgroundImgname}
              className="card-item__bg"
            />
          </div>
          <div className="card-item__band" />
          <div className="card-item__cvv">
            <div className="card-item__cvvTitle">{code.name}</div>
            <div className="card-item__cvvBand">
              {splitCardCvv.map((_, index) => (
                <span key={index}>*</span>
              ))}
            </div>
            <div className="card-item__type">
              <img
                alt="card-type"
                src={cardTypeImg(cardType)}
                className="card-item__typeImg"
              />
            </div>
          </div>
        </div>
      </CardWrapper>
    );
  }
);

export default Card;
