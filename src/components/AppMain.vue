<script>
import AppCard from "./Appcard.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppCard,
  },
};
</script>

<template>
  <main class="py-5">
    <AppCard />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #119281;
}
</style>
