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
  </div>
</template>

<style scoped lang="scss">
.footer {
  height: 75vh;
  background: url("../../assets/images/waves.png") no-repeat center;
  background-size: 100% 100%;

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
}
</style>

<script>
export default {};
</script>
