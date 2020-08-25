<template>
  <div class="header__nav">
    <div class="nav__brand">
      <a href="#">
        КП
        &laquo;свердловина&raquo;
      </a>
    </div>
    <div class="navigation">
      <input type="checkbox" name="navi-toggle" id="navi-toggle" class="navigation__checkbox" />
      <label for="navi-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
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
    </div>
  </div>
</template>

<style lang="scss">
.header__nav {
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $white-color;
  z-index: 1000000;

  @include respond(tab-port) {
    height: 0;
  }

  .nav__brand {
    a {
      text-transform: uppercase;
      font-family: $heading-font;
      font-size: 5.7rem;
      margin-left: 4rem;
      color: $primary-color-2;
      text-decoration: none;
      letter-spacing: 0.2rem;
      .quote {
        font-family: "Arial";
      }
    }

    @include respond(tab-port) {
      display: none;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 100%;

    @include respond(tab-port) {
      display: block;
      margin-right: 0;
      width: 100%;
    }

    &__checkbox {
      display: none;
    }

    &__checkbox:checked ~ div.navigation__background {
      transform: scale(50);
      background-color: orangered;
    }

    &__checkbox:checked ~ nav.navigation__nav {
      opacity: 1;
      width: 100%;
    }

    &__button {
      display: none;
      background-color: $primary-color-1;
      text-align: center;
      height: 7rem;
      width: 7rem;
      position: fixed;
      top: 6rem;
      right: 7rem;
      border-radius: 50%;
      z-index: 2000;
      box-shadow: 0 1 3rem rgba($font-color, 0.1);
      cursor: pointer;

      @include respond(tab-port) {
        display: block;
      }
    }

    &__background {
      display: none;
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 7rem;
      background-image: radial-gradient($primary-color-1, $primary-color-2);
      z-index: 1000;
      transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

      @include respond(tab-port) {
        display: block;
      }
    }

    &__nav {
      width: 100%;
      height: 10vh;

      @include respond(tab-port) {
        width: 0;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1500;
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    &__list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 1rem;
      width: 100%;
      height: 100%;

      @include respond(tab-port) {
        position: absolute;
        display: inline-block;
        width: auto;
        top: 75%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        list-style: none;
        text-align: center;
      }
    }

    &__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      vertical-align: middle;
      width: 20%;
      height: 95%;
      background: $white-color;
      transition: 0.4s all ease-in-out;
      z-index: 1;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
          to right top,
          $primary-color-1,
          $primary-color-2
        );
        z-index: -1;
        transition: 0.4s all ease-in-out;
        opacity: 0;
      }

      &:hover {
        cursor: pointer;
        transition: 0.4s all ease;
        a {
          color: $white-color;
        }
        &::before {
          opacity: 1;
        }
      }

      @include respond(tab-port) {
        margin: 1.5rem;
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
      text-decoration: none;
      font-size: 1.6rem;
      color: $font-color;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4s all ease;

      @include respond(tab-port) {
        &:link,
        &:visited {
          display: inline-block;
          width: auto;
          height: auto;
          padding: 1rem 2rem;
          font-size: 3rem;
          font-weight: 300;
          color: $white-color;
          text-decoration: none;
          text-transform: uppercase;
          background-image: linear-gradient(
            120deg,
            transparent 0%,
            transparent 50%,
            $white-color 50%
          );
          background-size: 230%;
          white-space: nowrap;
          transition: all 0.4s;
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

    &__icon {
      position: relative;
      margin-top: 3.5rem;
      &,
      &::before,
      &::after {
        width: 3rem;
        height: 3px;
        background-color: $white-color;
        display: none;
        transition: all 0.2s;

        @include respond(tab-port) {
          display: inline-block;
        }
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
      }

      &::before {
        top: 0.8rem;
      }
      &::after {
        bottom: 0.8rem;
      }
    }

    &__button {
      &:hover {
        .navigation__icon::after {
          bottom: 1rem;
        }
      }
    }
    &__button {
      &:hover {
        .navigation__icon::before {
          top: 1rem;
        }
      }
    }

    &__checkbox:checked + label {
      .navigation__icon {
        background-color: transparent;
      }
    }

    &__checkbox:checked + label {
      background-color: $white-color;
    }

    &__checkbox:checked + label {
      .navigation__icon::before {
        top: 0;
        transform: rotate(135deg);
        background-color: $primary-color-2;
      }
    }

    &__checkbox:checked + label {
      .navigation__icon::after {
        top: 0;
        transform: rotate(45deg);
        background-color: $primary-color-1;
      }
    }
  }
}
</style>