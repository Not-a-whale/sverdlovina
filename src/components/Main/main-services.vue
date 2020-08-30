<template>
  <div class="services">
    <div class="services__wrapper">
      <div class="heading">
        <h2 class="heading--text">Види послуг</h2>
        <span class="heading--underline"></span>
      </div>
      <div class="services__cards">
        <router-link to="/drilling" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img src="../../assets/images/Layer 37.png" alt="Drilling" class="card__image--pic" />
          </div>
          <p class="card__text">Буріння свердловин</p>
        </router-link>
        <router-link to="/water-drilling" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img
              src="../../assets/images/Layer 31 copy.png"
              alt="Water Drilling"
              class="card__image--pic"
            />
          </div>

          <p class="card__text">Буріння гідроекологічних свердловин на воду</p>
        </router-link>
        <router-link to="/pillars-of-the-earth" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img
              src="../../assets/images/Layer 32.png"
              alt="Pillar Drilling"
              class="card__image--pic"
              id="drill"
            />
          </div>
          <p class="card__text">Буріння свердловин під буронабивні палі</p>
        </router-link>
        <router-link to="/pillars-of-the-earth" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img
              src="../../assets/images/Layer 35.png"
              alt="Geoecological Drilling"
              class="card__image--pic"
            />
          </div>
          <p class="card__text">Гідроекологічні роботи</p>
        </router-link>
        <router-link to="/geo-find" tag="a" class="cards__card" exact>
          <div class="card__image geofind">
            <img
              src="../../assets/images/Layer 34.png"
              alt="Engineering and Geoecological findings"
              class="card__image--pic card__image--find"
              id="find"
            />
          </div>
          <p class="card__text">Інженерно-Геоекологічні та геодезичні вишукування</p>
        </router-link>
        <router-link to="/industrial-lowering" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img
              src="../../assets/images/Layer 33.png"
              alt="Lowering watter levels for building"
              class="card__image--pic"
            />
          </div>
          <p class="card__text">Будівельне водозниження</p>
        </router-link>
        <router-link to="/electro-chemo-protect" tag="a" class="cards__card" exact>
          <div class="card__image card__container">
            <img
              src="../../assets/images/Layer 29.png"
              alt="Outer immage of electrical protection block"
              class="card__image--outer"
            />
            <img
              src="../../assets/images/Layer 30.png"
              alt="Inner image of electrical protection block"
              class="card__image--inner"
              id="innerCircle"
            />
          </div>
          <p class="card__text">Електрохімзахист</p>
        </router-link>
        <router-link to="/plugging" tag="a" class="cards__card" exact>
          <div class="card__image">
            <img
              src="../../assets/images/Layer 58.png"
              alt="Drilling plugging"
              class="card__image--pic"
              id="plugging"
            />
          </div>
          <p class="card__text">Тампонування свердловини</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.services {
  background-color: $white-color;
  &__wrapper {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @include heading;

  &__cards {
    margin-top: 4rem;
    margin-bottom: 4rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
    justify-items: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
      margin-top: 2rem;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      margin-top: 1rem;
    }

    @media screen and (max-width: 420px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(8, 1fr);
      margin-top: 0.5rem;
    }

    .cards__card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: space-between;
      text-decoration: none;
      align-self: start;
      padding: 1rem;

      .card__container {
        position: relative;
      }

      .card__image {
        position: relative;
        width: 20rem;
        height: 20rem;
        margin: 1rem;
        background: linear-gradient(
          to right top,
          $primary-color-1,
          $primary-color-2
        );
        background-position: top right;
        border-radius: 6rem;
        transition: all 1s ease;
        z-index: 1;
        box-shadow: inset 4px 4px 4px 0px rgba(255, 255, 255, 0.3);

        @media screen and (max-width: 768px) {
          width: 30rem;
          height: 30rem;
        }

        img {
          width: 80%;
          height: 80%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        #find {
          position: absolute;
          top: -50%;
          left: -5rem;

          transform: scale(2);
        }
        #drill {
          width: 50%;
        }
        #plugging {
          top: 48%;
          left: 48%;
        }

        &::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 6rem;
          background: linear-gradient(to right top, #001fa4, #60d7ff);
          z-index: -1;
          transition: 0.4s all ease-in-out;
          opacity: 0;
        }

        &:hover {
          &::before {
            opacity: 1;
            transform: scale(1.02);
            box-shadow: inset 4px 4px 4px 0px rgba(255, 255, 255, 0.3),
              5px 5px 7px 0px rgba(0, 0, 0, 0.4);
          }
        }

        &:active {
          &::before {
            transform: scale(0.96);
            box-shadow: inset 3px 3px 3px 0px rgba(255, 255, 255, 0.3),
              4px 4px 5px 0px rgba(0, 0, 0, 0.4);
          }
        }

        &::after {
          transform: scale(0.95);
          box-shadow: inset 4px 4px 4px 0px rgba(255, 255, 255, 0.3),
            3px 3px 3px 0px rgba(0, 0, 0, 0.4);
        }

        &--outer,
        &--inner {
          position: absolute;
        }
        #innerCircle {
          width: 35%;
          height: 35%;
        }
      }
    }

    .card__text {
      font-size: 2rem;
      color: $font-color;
      text-transform: uppercase;

      @media screen and (max-width: 420px) {
        margin-top: 0.5rem;
        font-size: 3rem;
      }
    }
  }
}
</style>
