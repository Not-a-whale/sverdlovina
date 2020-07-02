<template>
  <div class="footer">
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="#" class="navigation__link">
            Про
            <br />компанію
          </a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Послуги</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Фотогалерея</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Блог</a>
        </li>
        <li class="navigation__item">
          <a href="#" class="navigation__link">Контакти</a>
        </li>
      </ul>
    </nav>
    <div class="form">
      <h3 class="form__heading">Залишити відгук</h3>
      <form action="submit" class="form__form">
        <div class="form__group">
          <label for="bottomFormInputName" class="form__label form__label--name">Ім'я</label>
          <input
            type="text"
            name="input-name"
            id="bottomFormInputName"
            class="form__input form__input--name"
          />
        </div>
        <div class="form__group">
          <label for="bottomFormInputText" class="form__label form__label--text">Відгук</label>
          <textarea
            rows="28"
            name="input-text"
            id="bottomFormInputText"
            class="form__input form__input--text"
          />
        </div>
        <button type="submit" class="form__button">Надіслати</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  height: 75vh;
  background: url("../../assets/images/waves.png") no-repeat center;
  background-size: 100% 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  justify-items: space-between;
  align-content: space-evenly;

  @include respond(tab-port) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content;
  }

  @include respond(tab-port) {
    height: 120vh;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    &__nav {
      transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);

      @include respond(tab-port) {
        width: 100%;
      }

      @include respond(phone) {
        margin-top: 7rem;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
      margin-top: 15rem;
      width: 100%;
      list-style: none;

      @include respond(tab-port) {
        display: inline-block;
        width: auto;
        width: 100%;
        list-style: none;
        text-align: center;
        margin-top: 0;
      }
    }

    &__item {
      margin: 0.5rem;
      text-decoration: none;
      @include respond(tab-port) {
        margin: 1rem;
        height: auto;
        width: auto;
        display: auto;
        background: none;
        &::before {
          display: none;
        }

        a {
          color: $primary-color-2;
        }
      }
    }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        width: auto;
        height: auto;
        padding: 0 2rem;
        font-size: 2.5rem;
        font-weight: 300;
        color: $white-color;
        text-decoration: none;
        text-transform: none;
        background-image: linear-gradient(
          120deg,
          transparent 0%,
          transparent 50%,
          $white-color 50%
        );
        background-size: 230%;
        white-space: nowrap;
        transition: all 0.4s;

        @include respond(tab-port) {
          padding: 0.5rem 2rem;
          font-size: 3rem;
          text-transform: uppercase;
          color: $primary-color-2;
        }
      }

      &:hover,
      &:active {
        background-position: 100%;
        color: $primary-color-2 !important;
        transform: translateX(1rem);
        z-index: 999999999;
      }

      br {
        display: none;
      }
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin-top: 3rem;
    &__form {
      height: 40rem;
      width: 31.8rem;
      background-color: #00000066;
      padding-bottom: 1rem;
      border-radius: 10px;
      align-self: center;
      justify-self: center;
      display: flex;
      flex-direction: column;
      justify-items: space-between;
      align-items: center;
      justify-content: space-around;

      @include respond(tab-port) {
        width: 80%;
      }
    }

    &__heading {
      font-size: 2.5rem;
      font-weight: normal;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    &__group {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      margin: 2% auto;
    }

    &__input {
      height: 4rem;
      border-radius: 5px;
      border: none;
      outline: none;
      font-size: 1.8rem;
      padding-left: 1rem;

      @media screen and (max-width: 450px) {
        height: 5rem;
        font-size: 2.5rem;
      }

      &--text {
        height: 15rem;
        margin-bottom: 0.5rem;
        padding-top: 1rem;
        font-size: 1.6rem;
        @include respond(tab-port) {
          height: 13rem;
        }
      }
    }

    &__label {
      font-size: 1.8rem;
      color: $white-color;
      padding-bottom: 5px;
      align-self: start;
      text-transform: uppercase;
    }

    &__button {
      height: 8.3rem;
      width: 90%;
      border-radius: 5px;
      text-align: center;
      outline: none;
      border: none;
      margin-bottom: 1rem;
      background: linear-gradient(
        to right top,
        $primary-color-1,
        $dark-blue-color
      );
      font-size: 1.9rem;
      font-weight: 700;
      color: $white-color;
      letter-spacing: 1px;
      opacity: 1;
      box-shadow: inset 7px 7px 7px 0px rgba(255, 255, 255, 0.3),
        inset -7px -7px 7px 0px rgba(0, 0, 0, 0.4);
      transition: 0.2s all ease;
      text-transform: uppercase;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        filter: brightness(110%);
        -webkit-filter: brightness(110%);
      }

      &:active {
        box-shadow: inset 7px 7px 7px 0px rgba(0, 0, 0, 0.4),
          inset -7px -7px 7px 0px rgba(255, 255, 255, 0.3);
        cursor: pointer;
        transform: scale(0.98);
        filter: brightness(110%);
        -webkit-filter: brightness(110%);
      }

      &:focus {
        filter: brightness(110%);
        -webkit-filter: brightness(110%);
      }

      @media screen and (max-width: 450px) {
        height: 9rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

<script>
export default {};
</script>
