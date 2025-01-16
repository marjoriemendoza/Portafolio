<template>
  <div class="m-6">
    <div class="flex flex-col bg-white rounded-lg items-center text-center w-full lg:h-full border border-gray-300 shadow-lg p-6 hover:bg-purple-100" >
      <img :src="image" alt="" class="w-64 h-64 bg-white mb-4 rounded-xl" />
      <div class="flex flex-col flex-grow lg:ml-4">
        <h2 class="font-bold text-black text-3xl text-center">{{ title }}</h2>
        <div class="ml-0 m-4 text-center grid text-2xl">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoadTrip",
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      isDescriptionVisible: false,
    };
  },
  methods: {
    toggleDescription(): void {
      this.isDescriptionVisible = !this.isDescriptionVisible;
    },
  },
});
</script>

<style scoped>
/* Asegúrate de que todas las tarjetas tengan la misma altura */
div {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 350px; /* Asegura una altura mínima */
}

img {
  object-fit: cover; /* Evita que la imagen se deforme */
}
</style>
