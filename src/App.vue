<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {};
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    takeCards(apiUrl) {
      axios.get(apiUrl).then((response) => {
        const ygoCardsData = response.data.results;

        store.ygoCards = ygoCardsData;
      });
    },
  },

  created() {
    this.takeCards(store.apiUrl);
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
