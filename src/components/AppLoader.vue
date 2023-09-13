<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  props: {
    loadingText: String,
  },
};
</script>

<template>
  <div class="loading-screen">
    <span>{{ loadingText }}</span>
  </div>
</template>

<style lang="scss" scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  backdrop-filter: blur(3px);
  color: white;
  font-size: 2rem;
}
</style>
