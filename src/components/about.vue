<template>
  <div class="wrapper">
    <div class="main__heading">
      <h1 class="main__heading--text">Про компанію</h1>
      <div class="main__heading--underline"></div>
    </div>
    <div class="main__content">
      <section class="content__block">
        <h2 class="content__heading">Якісне буріння свердловин від надійної компанії.</h2>
        <p>З моменту свого заснування у 1996 році, наша спеціалізована компанія здійснює якісне гідрогеологічне буріння свердловин будь-якої складності. Кваліфіковані фахівці компанії «Свердловина» ефективно користуються багаторічним досвідом і науковим підходом до проведення бурових операцій. У нашому розпорядженні є сучасна техніка, яка значно підвищує продуктивність робіт. Ми постійно займаємося проектуванням, бурінням і капітальним ремонтом свердловин, за весь період професійної діяльності компанія виконала роботи на більш ніж трьох тисячах об'єктах.</p>
        <h2 class="content__heading">Спектр виконуваних робіт</h2>
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
        <p>Ми виконуємо буріння свердловин недорого та на високому якісному рівні. Встановлена на буріння свердловин ціна повністю відповідає актуальним запитам споживачів. Для державних та приватних підприємств, якими рясніє Львівська область, наша компанія формує найпривабливіші умови з оптимальним співвідношенням цінових та якісних показників.</p>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  .main__heading {
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $white-color;
    &--text {
      color: $font-color;
      font-size: 4.8rem;
      text-transform: uppercase;
    }
    &--underline {
      height: 2.1rem;
      width: 18.3rem;
      background: $background-gradient;
    }
  }
  .main__content {
    width: 100%;
    height: 75vh;
    background: url("./slider-3.jpg");
    background-position: 100% cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;

    .content__block {
      .content__heading {
        font-size: 2.4rem;
        text-align: center;
        padding: 1rem;
      }
      width: 80%;
      height: 80%;
      padding: 2rem;
      opacity: 1;
      background-color: $white-color;
      font-size: 1.6rem;
      line-height: 1.8rem;
    }
  }
}
</style>