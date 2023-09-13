import { reactive } from "vue";

const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  ygoCards: [],
  apiArchetypeUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  ygoCardsArchetype: [],
  changePage: {
    next: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=20",
    prev: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  },
});
export default store;
