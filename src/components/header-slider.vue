<template>
  <div class="wrapper">
    <div class="arrow arrow__right" @click="nextSlide()">
      <i class="fas fa-chevron-right"></i>
    </div>
    <div class="arrow arrow__left" @click="prevSlide()">
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="v-carousel" :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }">
      <v-carousel-item v-for="item in slider_data" :item_data="item" :key="slider_data.id"></v-carousel-item>
    </div>
    <div class="header__slider">
      <div class="slider__heading">
        <h2 class="heading__top">Всі види буріння</h2>
        <h2 class="heading__bottom">Гарантія</h2>
      </div>
      <form class="heading__form">
        <div class="form__input form__input--first-name">
          <label for="inputName" class="input__name">Ім'я</label>
          <input type="text" id="inputName" placeholder="Ім'я" />
        </div>
        <div class="form__input form__input--phone-number">
          <label for="inputPhoneNumber" class="input__phone-number">Номер Телефону</label>
          <input type="text" id="inputPhoneNumber" placeholder="Номер телефону" />
        </div>
        <div class="form__input form__input--email">
          <label for="inputEmail" class="input__email">Пошта</label>
          <input type="email" id="inputEmail" placeholder="Пошта" />
        </div>
        <div class="form__input">
          <button class="input__button">
            Надіслати
            <br />заявку
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import vCarouselItem from "./header-slider-slides";
export default {
  name: "v-carousel",
  components: {
    vCarouselItem
  },
  props: {
    slider_data: {
      type: Array,
      default: () => {}
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex <= 0) {
        this.currentSlideIndex = this.slider_data.length - 1;
      } else {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.slider_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }
  },
  mounted() {
    if (this.interval > 0) {
      let vm = this;
      setInterval(function() {
        vm.nextSlide();
      }, vm.interval);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;

  .arrow {
    position: absolute;
    z-index: 2;
    width: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: transparent;
      height: 3rem;
      width: 3rem;
      transition: all 0.4s ease;
      transform: translateY(-100%);
    }

    &:hover {
      cursor: pointer;
      svg {
        color: $white-color;
      }
    }
  }

  .arrow__right {
    position: absolute;
    top: 0;
    right: 0;
  }

  .v-carousel {
    display: flex;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all ease 0.5s;
  }

  .header__slider {
    box-sizing: border-box;
    width: 100%;
    height: 75vh;
    z-index: 1;
    .slider__heading {
      position: absolute;
      top: 5%;
      left: 4rem;

      .heading__top {
        font-size: 4.2rem;
        color: $dark-blue-color;
        color: $white-color;
      }

      .heading__bottom {
        font-size: 4.2rem;
        color: $dark-blue-color;
        text-align: left;
      }
    }

    form.heading__form {
      position: absolute;
      top: 50%;
      right: 4rem;
      height: 36rem;
      width: 31.8rem;
      background-color: rgba(0, 0, 0, 0.4);
      transform: translateY(-50%);

      .form__input {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        margin: 5% auto;
        input {
          height: 2.8rem;
          border-radius: 5px;
          border: none;
          outline: none;
          font-size: 1.8rem;
          padding-left: 0.5rem;
        }

        label {
          font-size: 1.8rem;
          color: $white-color;
          padding-bottom: 5px;
          align-self: start;
          text-transform: uppercase;
        }

        .input__button {
          height: 9.3rem;
          margin-top: 1.3rem;
          border-radius: 5px;
          outline: none;
          border: none;
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
        }
      }
    }
  }
}
</style>