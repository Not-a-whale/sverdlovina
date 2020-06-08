<template>
  <div class="header__nav">
    <div class="nav__brand">
      <a href="#">
        КП
        &laquo;свердловина&raquo;
      </a>
    </div>
    <ul class="nav__list">
      <li class="list__item">
        <a href="#">
          Про
          <br />компанію
        </a>
      </li>
      <li class="list__item">
        <a href="#">Послуги</a>
      </li>
      <li class="list__item">
        <a href="#">Фотогалерея</a>
      </li>
      <li class="list__item">
        <a href="#">Блог</a>
      </li>
      <li class="list__item">
        <a href="#">Контакти</a>
      </li>
    </ul>
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
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 1rem;
    width: 45%;
    height: 100%;
    li {
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

      a {
        text-decoration: none;
        font-size: 1.6rem;
        color: $font-color;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.4s all ease;
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
    }
  }
}
</style>