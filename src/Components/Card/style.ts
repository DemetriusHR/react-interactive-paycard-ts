import styled from "styled-components";

const CardWrapper = styled.div`
  max-width: 450px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 480px) {
    max-width: 310px;
    height: 220px;
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    height: 180px;
  }

  &.-active {
    .card-item__side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
          rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
      }
    }
  }

  .card-item__focus {
    position: absolute;
    z-index: 3;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.65);

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgb(8, 20, 47);
      height: 100%;
      border-radius: 5px;
      filter: blur(25px);
      opacity: 0.5;
    }

    &.-active {
      opacity: 1;
    }
  }

  .card-item__side {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 16px 0 rgba(14, 42, 84, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.42, 0, 0, 1.05);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 100%;

    &.-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
      z-index: 2;
      padding: 0;
      height: 100%;

      .card-item__cover {
        transform: rotateY(-180deg);
      }
    }
  }

  .card-item__bg {
    max-width: 100%;
    display: block;
    max-height: 100%;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .card-item__cover {
    position: absolute;
    height: 100%;
    background-color: #1c1d27;
    left: 0;
    top: 0;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(6, 2, 29, 0.45);
    }
  }

  .card-item__top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 10px;

    @media screen and (max-width: 480px) {
      margin-bottom: 25px;
    }

    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }

  .card-item__chip {
    width: 60px;
    @media screen and (max-width: 480px) {
      width: 50px;
    }

    @media screen and (max-width: 360px) {
      width: 40px;
    }
  }

  .card-item__type {
    height: 45px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 100px;
    margin-left: auto;
    width: 100%;

    @media screen and (max-width: 480px) {
      height: 40px;
      max-width: 90px;
    }

    @media screen and (max-width: 360px) {
      height: 30px;
    }
  }

  .card-item__typeImg {
    max-width: 100%;
    object-fit: contain;
    max-height: 100%;
    object-position: top right;
  }

  .card-item__info {
    color: #fff;
    width: 100%;
    max-width: calc(100% - 85px);
    padding: 10px 15px;
    font-weight: 500;
    display: block;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      padding: 10px;
    }
  }

  .card-item__holder {
    opacity: 0.7;
    font-size: 13px;
    margin-bottom: 6px;
    @media screen and (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }

  .card-item__wrapper {
    font-family: "Source Code Pro", monospace;
    padding: 25px 15px;
    position: relative;
    z-index: 4;
    height: 100%;
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    user-select: none;
    @media screen and (max-width: 480px) {
      padding: 20px 10px;
    }
  }

  .card-item__name {
    font-size: 18px;
    line-height: 1;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .card-item__nameItem {
    display: inline-block;
    min-width: 8px;
    position: relative;
  }

  .card-item__number {
    font-weight: 500;
    line-height: 1;
    color: #fff;
    font-size: 27px;
    margin-bottom: 35px;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 21px;
      margin-bottom: 15px;
      padding: 10px 10px;
    }

    @media screen and (max-width: 360px) {
      font-size: 19px;
      margin-bottom: 10px;
      padding: 10px 10px;
    }
  }

  .card-item__numberItem {
    width: 16px;
    display: inline-block;

    &.-active {
      width: 30px;
    }

    @media screen and (max-width: 480px) {
      width: 13px;

      &.-active {
        width: 16px;
      }
    }

    @media screen and (max-width: 360px) {
      width: 12px;

      &.-active {
        width: 8px;
      }
    }
  }

  .card-item__content {
    color: #fff;
    display: flex;
    align-items: flex-start;
  }

  .card-item__date {
    flex-wrap: wrap;
    font-size: 18px;
    margin-left: auto;
    padding: 10px;
    display: inline-flex;
    width: 80px;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
  }

  .card-item__dateItem {
    position: relative;
    cursor: pointer;

    span {
      width: 22px;
      display: inline-block;
    }
  }

  .card-item__dateTitle {
    opacity: 0.7;
    font-size: 13px;
    padding-bottom: 6px;
    width: 100%;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: 12px;
      padding-bottom: 5px;
    }
  }

  .card-item__band {
    background: rgba(0, 0, 19, 0.8);
    width: 100%;
    height: 50px;
    margin-top: 30px;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 360px) {
      height: 40px;
      margin-top: 10px;
    }
  }

  .card-item__cvv {
    text-align: right;
    position: relative;
    z-index: 2;
    padding: 15px;

    .card-item__type {
      opacity: 0.7;
    }

    @media screen and (max-width: 360px) {
      padding: 10px 15px;
    }
  }

  .card-item__cvvTitle {
    padding-right: 10px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 5px;
  }

  .card-item__cvvBand {
    height: 45px;
    background: #fff;
    margin-bottom: 30px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    color: #1a3b5d;
    font-size: 18px;
    border-radius: 4px;
    box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);

    @media screen and (max-width: 480px) {
      height: 40px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }

  .slide-fade-right-enter {
    opacity: 0;
    transform: translateX(10px) rotate(45deg);
    pointer-events: nne;
  }

  .slide-fade-right-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    transform: translateX(0px) rotate(0deg);
    position: relative;
    opacity: 100;
  }

  .slide-fade-right-exit {
    transform: translateX(0px) rotate(0deg);
    pointer-events: none;
  }

  .slide-fade-right-exit-active {
    opacity: 0;
    transition: all 0.25s ease-in-out;
    transform: translateX(0px) rotate(-80deg);
    position: relative;
  }

  .slide-fade-up-enter {
    transform: translateY(15px);
    pointer-events: none;
    opacity: 0;
  }

  .slide-fade-up-enter-active {
    transition: all 0.25s ease-in-out;
    transition-delay: 0.1s;
    transform: translateY(0px);
    position: relative;
    opacity: 1;
  }

  .slide-fade-up-enter-done {
    opacity: 1;
  }

  .slide-fade-up-exit {
    transform: translateY(0px);
    pointer-events: none;
    opacity: 1;
  }

  .slide-fade-up-exit-active {
    transition: all 250ms ease-in-out;
    transform: translateY(-15px);
    position: relative;
    opacity: 0;
  }

  .slide-fade-up-exit-done {
    opacity: 0;
  }
`;

export default CardWrapper;
