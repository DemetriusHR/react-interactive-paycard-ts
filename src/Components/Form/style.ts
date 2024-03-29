import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 570px;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }

  .card-form__inner {
    background: #fff;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;

    @media screen and (max-width: 480px) {
      padding: 25px;
      padding-top: 165px;
    }

    @media screen and (max-width: 360px) {
      padding: 15px;
      padding-top: 165px;
    }
  }

  .card-form__row,
  .card-form__group {
    display: flex;
    align-items: flex-start;
  }

  .card-form__row {
    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  .card-form__col {
    flex: auto;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    @media screen and (max-width: 480px) {
      margin-right: 0;
      flex: unset;
      width: 100%;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.-cvv {
      max-width: 150px;
      @media screen and (max-width: 480px) {
        max-width: initial;
      }
    }
  }

  .card-form__group {
    flex-wrap: wrap;

    .card-input__input {
      flex: 1;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .card-form__button {
    width: 100%;
    height: 55px;
    background: #2364d2;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
    color: #fff;
    margin-top: 20px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      margin-top: 10px;
    }
  }

  .card-input {
    margin-bottom: 20px;

    &__label,
    &__input {
      width: 100%;
    }

    &__label {
      font-size: 14px;
      margin-bottom: 5px;
      font-weight: 500;
      color: #1a3b5d;
      display: block;
      user-select: none;
    }

    &__input {
      height: 50px;
      border-radius: 5px;
      box-shadow: none;
      border: 1px solid #ced6e0;
      transition: all 0.3s ease-in-out;
      font-size: 18px;
      padding: 5px 15px;
      background: none;
      color: #1a3b5d;
      font-family: "Source Sans Pro", sans-serif;

      &:hover,
      &:focus {
        border-color: #3d9cff;
      }

      &:focus {
        box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
      }
      &.-select {
        -webkit-appearance: none;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
        background-size: 12px;
        background-position: 90% center;
        background-repeat: no-repeat;
        padding-right: 30px;
      }
    }
  }

  .card-list {
    margin-bottom: -130px;

    @media screen and (max-width: 480px) {
      margin-bottom: -120px;
    }
  }
`;

export default FormWrapper;
