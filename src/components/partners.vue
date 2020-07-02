<template>
  <div class="wrapper partners">
    <div class="heading">
      <h2 class="heading--text">Нам довіряють</h2>
      <span class="heading--underline"></span>
    </div>
    <div class="partners__grid">
      <div class="partners__right">
        <a href="http://www.zb2.com.ua/">
          <img
            src="../assets/images/Zhitlobud.png"
            alt="Zhutlobud image"
            class="right__img partners__img"
          />
        </a>
      </div>
      <div class="partners__center">
        <div class="center__both">
          <a href="https://evrobud.renome.ua/">
            <img
              src="../assets/images/Renome.png"
              alt="Renome image"
              class="partners__img center__img--1"
            />
          </a>

          <a href="http://pankurchak.ua/">
            <img
              src="../assets/images/Pan_Kurchak.png"
              alt="Pan Kurchak image"
              class="partners__img center__img--2"
            />
          </a>
        </div>
        <div class="center__one">
          <a href="http://www.ukrcom.net/">
            <img
              src="../assets/images/UkrCom.png"
              alt="Ukrcom image"
              class="partners__img center__img--bottom"
            />
          </a>
        </div>
      </div>
      <div class="partners__left">
        <a href="http://www.lstm.com.ua/">
          <img
            src="../assets/images/LutskSantekhMontazh.png"
            alt="LutskSantechMontazh image"
            class="partners__img left__img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .partners {
    margin: 0 auto;
    background-color: $white-color;

    @include heading;

    &__grid {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: max-content;

      @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }

    &__right {
      padding-bottom: 10rem;
      padding-top: 2rem;

      @media screen and (max-width: 1000px) {
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
    }

    &__left {
      padding-top: 10rem;
      padding-bottom: 2rem;
      @media screen and (max-width: 1000px) {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }

    &__center {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
      gap: 1rem;
      padding: 6rem 0;

      @media screen and (max-width: 1000px) {
        padding: 1rem 1rem;
      }

      .center__both {
        display: grid;
        grid-template-rows: max-content;
        grid-template-columns: 1fr 1fr;
        justify-items: space-between;

        @media screen and (max-width: 420px) {
          grid-template-columns: 1fr;
          grid-template-rows: max-content max-content;
          padding: 1rem 1rem;
        }
      }

      .center__img--1,
      .center__img--2,
      .center__img--bottom {
        width: 25rem;
        height: 6.5rem;

        @media screen and (max-width: 768px) {
          width: 37rem;
          height: 8.8rem;
        }
      }

      .center__img--1 {
        justify-self: start;

        @media screen and (max-width: 768px) {
          margin: 1rem 0;
          justify-self: center;
        }
      }

      .center__img--2 {
        justify-self: end;

        @media screen and (max-width: 768px) {
          margin: 1rem 0;
          justify-self: center;
        }
      }

      .center__img--bottom {
        margin-top: 2rem;

        @media screen and (max-width: 768px) {
          margin-top: 1rem;
        }
      }
    }

    &__img {
      width: 23rem;
    }
  }
</style>
