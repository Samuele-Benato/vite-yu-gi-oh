<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";
import AppComands from "./components/AppComands.vue";
import store from "../src/store";

export default {
  data() {
    return {
      store,
      isLoading: false,
    };
  },

  computed: {
    showNextPage() {
      return store.changePage.next ? true : false;
    },

    showPrevPage() {
      return store.changePage.prev ? true : false;
    },
  },

  components: {
    AppHeader,
    AppMain,
    AppLoader,
    AppComands,
  },

  methods: {
    takeCards(apiUrl) {
      this.isLoading = true;

      axios
        .get(apiUrl)
        .then((response) => {
          const ygoCardsData = response.data.data;

          this.store.ygoCards = ygoCardsData;
        })

        .catch((error) => {
          console.error(error);
          store.ygoCards = [];
          store.changePage.prev = null;
          store.changePage.next = null;
        })

        .finally(() => {
          this.isLoading = false;
        });
    },

    fetchArchetypes() {
      axios.get(store.apiArchetypeUrl).then((response) => {
        const ygoCardsArchetype = response.data;

        this.store.ygoCardsArchetype = ygoCardsArchetype;
      });
    },

    nextPage() {
      if (!store.changePage.next) return;
      this.takeCards(store.changePage.next);
    },

    prevPage() {
      if (!store.changePage.prev) return;
      this.takeCards(store.changePage.prev);
    },

    filterSerch() {
      const filterArcheType = store.apiArchetypeUrl + serchedTerm;
      console.log(filterArcheType);
    },
  },
  created() {
    this.takeCards(store.apiUrl);
    this.fetchArchetypes();
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" :loadingText="'Cards loading...'" />
  <AppHeader />
  <AppComands
    :showPrevButton="showPrevPage"
    :showNextButton="showNextPage"
    @go-prev="prevPage()"
    @go-next="nextPage()"
    @filterSerch="filterSerch()"
  />
  <AppMain />
</template>

<style lang="scss" scoped></style>
