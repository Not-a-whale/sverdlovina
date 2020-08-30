<template>
  <div class="testimonials wrapper">
    <div class="heading">
      <h2 class="heading--text">Відгуки</h2>
      <span class="heading--underline"></span>
    </div>
    <div
      class="testimonials__content"
      ref="slider"
      @mousedown="mouseDown($event)"
      @mouseleave="mouseLeave($event)"
      @mouseup="mouseUp($event)"
      @mousemove="mouseMove($event)"
    >
      <div class="testimonials__testimonial testimonial-1">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              <p style="font-size: .1rem">look</p>

              <br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe
              expedita eum blanditiis doloribus sint commodi assumenda beatae.
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe
              exped>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe exped
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-2">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe
              expedita eum blanditiis doloribus sint commodi assumenda beatae.
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe
              exped>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda
              molestiae reiciendis aut officia? Inventore sapiente saepe exped
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-3">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda >Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              eaque doloremque tempore cum dolorem assumenda molestiae
              reiciendis aut officia? Inventore sapiente saepe exped>Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus eaque
              doloremque tempore cum dolorem assumenda molestiae reiciendis aut
              officia? Inventore sapiente saepe exped molestiae reiciendis aut
              officia? Inventore sapiente saepe expedita eum blanditiis
              doloribus sint commodi assumenda beatae.
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-4">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda >Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              eaque doloremque tempore cum dolorem assumenda molestiae
              reiciendis aut officia? Inventore sapiente saepe exped>Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus eaque
              doloremque tempore cum dolorem assumenda molestiae reiciendis aut
              officia? Inventore sapiente saepe expedmolestiae reiciendis aut
              officia? Inventore sapiente saepe expedita eum blanditiis
              doloribus sint commodi assumenda beatae.
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-5">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda >Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              eaque doloremque tempore cum dolorem assumenda molestiae
              reiciendis aut officia? Inventore sapiente saepe exped>Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus eaque
              doloremque tempore cum dolorem assumenda molestiae reiciendis aut
              officia? Inventore sapiente saepe expedmolestiae reiciendis aut
              officia? Inventore sapiente saepe expedita eum blanditiis
              doloribus sint commodi assumenda beatae.
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-6">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda >Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              eaque doloremque tempore cum dolorem assumenda molestiae
              reiciendis aut officia? Inventore sapiente saepe exped>Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus eaque
              doloremque tempore cum dolorem assumenda molestiae reiciendis aut
              officia? Inventore sapiente saepe expedmolestiae reiciendis aut
              officia? Inventore sapiente saepe expedita eum blanditiis
              doloribus sint commodi assumenda beatae.
            </p>
          </div>
        </div>
      </div>
      <div class="testimonials__testimonial testimonial-7">
        <div class="testimonial__person">
          <img src="../../assets/images/johnDoe.png" alt />
          <span class="person__name">John Doe</span>
        </div>
        <div class="testimonial__inside">
          <div class="inside__block">
            <p class="inside__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus eaque doloremque tempore cum dolorem assumenda >Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Temporibus
              eaque doloremque tempore cum dolorem assumenda molestiae
              reiciendis aut officia? Inventore sapiente saepe exped>Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Temporibus eaque
              doloremque tempore cum dolorem assumenda molestiae reiciendis aut
              officia? Inventore sapiente saepe expedmolestiae reiciendis aut
              officia? Inventore sapiente saepe expedita eum blanditiis
              doloribus sint commodi assumenda beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include heading;
.testimonials {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: scroll;
    overflow-y: hidden;
    user-select: none;
    cursor: pointer;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  &__testimonial {
    display: flex;
    margin: 2rem;
    .testimonial__person {
      margin: 1rem;
      img {
        width: 8.2rem;
        height: 8.2rem;
        border-radius: 50%;
      }

      span {
        font-size: 1.6rem;
        color: $white-color;
      }
    }
    .testimonial__inside {
      .inside__block {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 31.4rem;
        background-color: $white-color;
        border-radius: 10px;
        border-top-left-radius: 0;

        &::after {
          content: url("../../assets/images/triangle-testimonial.svg");
          position: absolute;
          width: 0;
          height: 0;
          left: -14px;
          right: auto;
          top: 23px;
          bottom: auto;
          transform: rotateZ(270deg);
        }

        p {
          font-size: 1.6rem;
          padding: 1.5rem;
          line-height: 2rem;
          text-align: left;
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      isDown: false,
      startX: null,
      scrollLeft: null
    };
  },
  methods: {
    mouseDown: function($event) {
      this.isDown = true;
      let slider = this.$refs.slider;
      this.startX = $event.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
    },
    mouseLeave: function($event) {
      this.isDown = false;
    },
    mouseUp: function($event) {
      this.isDown = false;
    },
    mouseMove: function($event) {
      let slider = this.$refs.slider;
      if (!this.isDown) return;
      $event.preventDefault;
      const x = $event.pageX - slider.offsetLeft;
      const walk = x - this.startX;
      slider.scrollLeft = this.scrollLeft - walk;
    }
  }
};
</script>
