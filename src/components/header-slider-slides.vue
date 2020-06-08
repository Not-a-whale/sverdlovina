<template>
  <div class="v-carousel-item">
    <img :src="require('./' + item_data.img)" />
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
  },
  mounted() {
    console.log(this.item_data.img);
  }
};
</script>

<style lang="scss">
.v-carousel-item {
  width: 100%;

  img {
    height: 100%;
    width: 100vw;
  }
}
</style>

