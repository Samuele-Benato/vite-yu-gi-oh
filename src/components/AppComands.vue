<script>
import store from "../../src/store";

export default {
  data() {
    return {
      store,
      type: "",
    };
  },

  emits: ["go-prev", "go-next", "filterSerch"],

  props: {
    showPrevButton: Boolean,
    showNextButton: Boolean,
  },
};
</script>

<template>
  <nav>
    <button
      v-if="showPrevButton"
      @click="$emit('go-prev')"
      type="button"
      class="btn btn-dark btn-lg m-2"
    >
      Prev
    </button>
    <button
      v-if="showNextButton"
      @click="$emit('go-next')"
      type="button"
      class="btn btn-dark btn-lg m-2"
    >
      Next
    </button>

    <select
      v-model="type"
      class="form-select w-25 m-2"
      aria-label="Default select example"
      @change="$emit('filterSerch', type)"
    >
      <option value="" selected>Scegli l'archetypo</option>
      <option
        v-for="archeType in store.ygoCardsArchetype"
        :value="archeType.archetype_name"
      >
        {{ archeType.archetype_name }}
      </option>
    </select>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #119281;
}
</style>
