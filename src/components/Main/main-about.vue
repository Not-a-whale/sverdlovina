<template>
  <div class="wrapper">
    <div class="heading">
      <h1 class="heading--text">Про компанію</h1>
      <div class="heading--underline"></div>
    </div>
    <div class="main__content">
      <section class="content__block">
        <div class="content__left">
          <h2 class="content__heading">
            Якісне буріння свердловин від надійної компанії.
          </h2>
          <p class="content__text">
            З моменту свого заснування у 1996 році, наша спеціалізована компанія
            здійснює якісне гідрогеологічне буріння свердловин будь-якої
            складності. Кваліфіковані фахівці компанії «Свердловина» ефективно
            користуються багаторічним досвідом і науковим підходом до проведення
            бурових операцій. У нашому розпорядженні є сучасна техніка, яка
            значно підвищує продуктивність робіт. Ми постійно займаємося
            проектуванням, бурінням і капітальним ремонтом свердловин, за весь
            період професійної діяльності компанія виконала роботи на більш ніж
            трьох тисячах об'єктах.
          </p>
          <button class="content__button">Читати далі</button>
        </div>
        <div class="content__right"></div>

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
    </div>
  </div>
</template>

<style lang="scss">
  .wrapper {
    width: 100%;
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
</style>
