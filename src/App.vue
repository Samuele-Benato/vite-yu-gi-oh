<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import store from "../src/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    takeCards(apiUrl) {
      axios.get(apiUrl).then((response) => {
        const ygoCardsData = response.data.data;

        this.store.ygoCards = ygoCardsData;
      });
    },
  },

  created() {
    this.takeCards(this.store.apiUrl);
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped></style>
