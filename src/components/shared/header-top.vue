<template>
  <div class="header__top">
    <a href="tel:+380636256317">
      <img src="../../assets/images/tel_icon.png" alt />
      <p>+380636256317</p>
    </a>
    <div class="header__top--lang">
      <span>РУС</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header__top {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: $white-color;
    img {
      height: 25px;
      width: 25px;
      margin-bottom: 3px;
      margin-right: 5px;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
    }
  }

  &--lang {
    position: absolute;
    top: 18%;
    right: 3.7%;

    span {
      color: $white-color;
      font-size: 2rem;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>