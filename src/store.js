import { reactive } from "vue";

const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  ygoCards: [],
});
export default store;
