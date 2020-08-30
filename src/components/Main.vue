<template>
  <div>
    <header-slider :slider_data="sliderItems" :interval="7000"></header-slider>
    <about></about>
    <services></services>
    <partners></partners>
    <testimonials></testimonials>
  </div>
</template>

<script>
import About from "./Main/main-about.vue";
import HeaderSlider from "./Main/main-header-slider.vue";
import Partners from "./Main/main-partners.vue";
import Services from "./Main/main-services.vue";
import Testimonials from "./Main/main-testimonials";
export default {
  components: {
    headerSlider: HeaderSlider,
    About: About,
    Services: Services,
    Partners: Partners,
    Testimonials
  },
  data() {
    return {
      sliderItems: [
        { id: 1, name: "slider-1.jpg", img: "slider-1.jpg" },
        { id: 2, name: "slider-2.jpg", img: "slider-2.jpg" },
        { id: 3, name: "slider-3.jpg", img: "slider-3.jpg" }
      ]
    };
  }
};
</script>
