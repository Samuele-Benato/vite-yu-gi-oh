<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <main class="py-5">
    <div class="container">
      <div
        class="row-cols-6 row-cols-md-4 row-cols-sm-2 justify-content-center align-items-center g-2"
      >
        <div class="col">Column</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 90vh;
  background-color: #7300ff;
}
</style>
