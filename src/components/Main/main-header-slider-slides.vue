<template>
  <div class="v-carousel-item">
    <div class="image" :style="{backgroundImage: 'url('+require('./' + item_data.img)+')'}">"></div>
  </div>
</template>

<script>
export default {
  name: "v-carousel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss">
.v-carousel-item {
  width: 100%;

  .image {
    padding-top: 50%;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>

