<script>
import store from "../../src/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div
      class="row row-cols-6 row-cols-md-4 row-cols-sm-2 justify-content-center align-items-center g-2"
    >
      <div v-for="(card, index) in store.ygoCards" :key="index" class="col">
        <div class="card">
          <div>
            <img :src="card.card_images.image_url_small" />
          </div>

          <div class="card-body">
            <h5 class="card-title"><strong>Name : </strong>{{ card.name }}</h5>
            <h6><strong>Type : </strong>{{ card.type }}</h6>
            <p class="card-text">
              <strong>Frame Type : </strong>{{ card.frameType }}
            </p>
            <strong><strong>Archetype : </strong>{{ card.archetype }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
