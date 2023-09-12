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
      class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center align-items-center g-2"
    >
      <div v-for="(card, index) in store.ygoCards" :key="index" class="col">
        <div class="card">
          <div class="image-container">
            <img :src="card.card_images[0].image_url" />
          </div>

          <div class="card-body">
            <h4 class="mb-4"><strong>Name : </strong>{{ card.name }}</h4>
            <h6 class="m-0"><strong>Type : </strong>{{ card.type }}</h6>
            <h6 class="m-0">
              <strong>Frame Type : </strong>{{ card.frameType }}
            </h6>
            <h6 class="m-0">
              <strong>Archetype : </strong>{{ card.archetype }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  img {
    max-width: 100%;
  }
}
.card-body {
  h4 {
    font-size: 1.25rem;
    color: #1f1a29;
  }
  h6 {
    font-size: 1.2rem;
    color: #1f1a29;
  }

  strong {
    font-size: 0.9rem;
    color: #c38f43;
  }
}
</style>
