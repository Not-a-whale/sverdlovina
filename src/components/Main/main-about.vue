<template>
  <div class="wrapper">
    <div class="heading">
      <h1 class="heading--text">Про компанію</h1>
      <div class="heading--underline"></div>
    </div>
    <section class="content">
      <div class="content__left">
        <h2 class="content__heading">Якісне буріння свердловин від надійної компанії.</h2>
        <p class="content__text">
          З моменту свого заснування у 1996 році, наша спеціалізована компанія
          здійснює якісне гідрогеологічне буріння свердловин будь-якої
          складності.
          <br />Кваліфіковані фахівці компанії
          <a href="#">«Свердловина»</a> ефективно
          користуються багаторічним досвідом і науковим підходом до проведення
          бурових операцій.
          <br />У нашому розпорядженні є сучасна техніка, яка
          значно підвищує продуктивність робіт.
          <br />Ми постійно займаємося
          проектуванням, бурінням і капітальним ремонтом свердловин, за весь
          період професійної діяльності компанія виконала роботи на більш ніж
          трьох тисячах об'єктах.
        </p>
        <button class="content__button">Читати далі &rarr;</button>
      </div>
      <div class="content__right">
        <div class="content__composition">
          <img
            src="../../assets/images/about/Photo-about-1.jpg"
            alt="Photo 1"
            class="content__composition__photo content__composition__photo--1"
          />
          <img
            src="../../assets/images/about/photo-about-2.jpg"
            alt="Photo 2"
            class="content__composition__photo content__composition__photo--2"
          />
          <img
            src="../../assets/images/about/photo-about-3.jpg"
            alt="Photo 3"
            class="content__composition__photo content__composition__photo--3"
          />
        </div>
      </div>

      <!--         <h2 class="content__heading">Спектр виконуваних робіт</h2>
        <p>У нас можливо замовити буріння свердловини таких типів:</p>
        <ul>
          <li>артезіанської - на воду:</li>
          <li>для установки буронабивних паль;</li>
          <li>з використанням колонкового буріння.</li>
        </ul>
        <p>
          Основним замовником бурових послуг є Рівненська область та інші територіальні райони.
          На території Закарпаття наша компанія займається проведенням гідрогеологічних робіт, а також інженерно-геологічними та інженерно-геодезичними дослідженнями. Ми ремонтуємо та тампонуємо свердловини, забезпечуємо будівельне водозниження та електрохімічний захист.
        </p>
        <h2 class="content__heading">Технічні можливості та цінові умови</h2>
      <p>Ми виконуємо буріння свердловин недорого та на високому якісному рівні. Встановлена на буріння свердловин ціна повністю відповідає актуальним запитам споживачів. Для державних та приватних підприємств, якими рясніє Львівська область, наша компанія формує найпривабливіші умови з оптимальним співвідношенням цінових та якісних показників.</p>-->
    </section>
    <!--  <section class="section-about">
      <div class="heading-secondary">Якісне буріння свердловин від надійної компанії.</div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="heading-tertiary">You're going to love nature</div>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore, accusantium asperiores deleniti reprehenderit excepturi ipsa explicabo enim eaque? Dolores provident voluptate consectetur nostrum dolore ipsa culpa voluptatem dolorum. Sit?</p>
          <div class="heading-tertiary">live adventures</div>
          <p
            class="paragraph"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore, accusantium asperiores deleniti reprehenderit excepturi ipsa explicabo enim eaque? Dolores provident voluptate consectetur nostrum dolore ipsa culpa voluptatem dolorum. Sit?</p>

          <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">

          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  @include heading;
  margin: 0 auto;
  background-color: $white-color;
  padding-bottom: 5rem;

  @include respond(tab-port) {
    padding-bottom: 2rem;
  }
  .content {
    display: flex;
    justify-content: space-between;

    @include respond(tab-port) {
      flex-direction: column;
    }

    &__left {
      width: 45%;
      margin-left: 2rem;

      a {
        color: #2674cc;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
      }

      @include respond(tab-port) {
        width: 100%;
        margin-left: 1rem;
        margin-bottom: 3rem;
      }
    }

    &__heading {
      font-size: 3.3rem;
      padding: 1rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__text {
      font-size: 2.2rem;
      line-height: 2.7rem;
      font-weight: 500;
      padding: 2rem;
      text-align: left;
    }

    &__button {
      transition: 0.2s all;
      outline: none;
      border: none;
      background-color: transparent;
      text-transform: uppercase;
      cursor: pointer;
      font-size: 2rem;
      padding: 2rem;
      &:link,
      &:visited {
        font-size: 1.6rem;
        color: $primary-color-2;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid $primary-color-2;
        padding: 3px;
        transition: all 0.2s;
      }

      &:hover {
        background-color: $primary-color-1;
        color: $white-color;
        box-shadow: 0 1rem 2rem rgba($font-color, 0.15);
        transform: translate(-2px);
      }

      &:active {
        box-shadow: 0 0.5rem 1rem rgba($font-color, 0.15);
        translate: 0;
      }
    }

    &__right {
      width: 45%;
      padding-top: 10rem;
      @include respond(tab-port) {
        width: 100%;
        padding-top: 10rem;
        padding-bottom: 10rem;
      }
    }

    &__composition {
      position: relative;
      transform: translateX(-5%);

      &:hover .content__composition__photo:not(:hover) {
        transform: scale(0.95);
      }

      @include respond(tab-port) {
        transform: translateX(0);
      }

      &__photo {
        width: 55%;
        box-shadow: 0 1.5rem 4rem rgba($font-color, 0.4);
        position: absolute;
        transition: 0.2s all;

        @include respond(tab-port) {
          float: left;
          position: relative;
          width: 33%;
          box-shadow: 0 1.5rem 3rem rgba($font-color, 0.2);
        }

        &--1 {
          left: 0;
          top: 2rem;

          @include respond(tab-port) {
            top: 0;
            transform: scale(1.2);
          }
        }

        &--2 {
          right: 0;
          top: -2rem;

          @include respond(tab-port) {
            left: -1rem;
            transform: scale(1.3);
            z-index: 100;
          }
        }

        &--3 {
          left: 20%;
          top: 10rem;

          @include respond(tab-port) {
            top: 2rem;
            left: 0;
            transform: scale(1.1);
          }
        }

        &:hover {
          transform: scale(1.05) translateY(5px);
          box-shadow: 0 2.5rem 4rem rgba($font-color, 0.5);
          z-index: 20;
          cursor: pointer;
        }
      }
    }

    img {
      width: 55%;

      @include respond(tab-port) {
        width: 33%;
      }
    }
  }
  /*   width: 100%;
  margin: 0 auto;
  @include heading;
  .main__content {
    width: 100%;

    .content__block {
      padding: 1rem 0 4rem 2%;
      margin: 0 auto 5rem auto;
      background: url("../../assets/images/white_background.jpg") no-repeat;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;

      @media screen and (max-width: 768px) {
        grid-template-rows: 40vh 60vh;
        grid-template-columns: 1fr;
        column-gap: 0;
        padding: 1rem;
      }

      @media screen and (max-width: 768px) {
        grid-template-rows: 40vh 40vh;
      }

      @media screen and (max-width: 600px) {
        grid-template-rows: 40vh 50vh;
      }

      @media screen and (max-width: 460px) {
        grid-template-rows: 65vh 40vh;
      }

      @media screen and (max-width: 430px) {
        grid-template-rows: 45vh 40vh;
      }

      @media screen and (max-width: 400px) {
        grid-template-rows: 55vh 40vh;
      }

      @media screen and (max-width: 340px) {
        grid-template-rows: 75vh 40vh;
      }

      .content__left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .content__heading {
          width: 90%;
          font-size: 3.4rem;
          padding-bottom: 3rem;
          font-weight: bold;

          @media screen and (max-width: 768px) {
            padding-bottom: 0.5rem;
            width: 90%;
          }
          @media screen and (max-width: 1024px) {
            padding-bottom: 0.5rem;
            width: 85%;
          }
        }

        .content__text {
          font-size: 2rem;
          text-align: left;
          width: 100%;
          padding-bottom: 2rem;

          @media screen and (max-width: 768px) {
            padding-bottom: 0.5rem;
            font-size: 2.7rem;
            text-align: center;
          }
        }

        .content__button {
          border: none;
          background: transparent;
          outline: none;
          font-size: 2.2rem;
          margin-bottom: 1rem;
          &:hover {
            cursor: pointer;
          }

          @media screen and (max-width: 1024px) {
            font-size: 3.4rem;
            margin-bottom: 0.5rem;
          }
        }
      }

      .content__right {
        display: flex;
        align-items: center;
        width: 100%;
        background: url("../../assets/images/main_image.jpg");
        background-size: 100% 100%;
      }
    }
  }
}

.heading-tertiary {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
}

.paragraph {
  font-size: 1.6rem;

  &:not(:last-child) {
    margin: 3rem;
  }
}

.btn-text {

}

.row {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 70vh;
  @include respond(tab-port) {
    flex-direction: column;
  }

  .col-1-of-2 {
    width: 50%;

    @include respond(tab-port) {
      width: 100%;
    }
  } */
}
</style>
