<script>
export default {
  data() {
    return {
      title: "Yu-Gi-Oh Api Cards",
    };
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h1 class="py-4">{{ title }}</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #1f1a29;
}
h1 {
  text-align: center;
  font-weight: 700;
  font-style: italic;
  color: white;
  margin: 0;
}
</style>
