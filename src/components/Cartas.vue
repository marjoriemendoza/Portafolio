<template>
  <div class="m-6">
    <div class="grid lg:grid-cols-2 bg-white rounded-lg text-center w-full border border-gray-300 shadow-lg p-6 hover:bg-purple-100" @click="toggleDescription">
      <img :src='image' alt="" class="w-96 h-96 bg-blue-500 mb-4 rounded-xl" />
      <div class="lg:flex lg:flex-col lg:items-start lg:ml-4" >
        <h2 class="font-bold text-black text-3xl text-center">{{ title }}</h2>
        <div class="lg:hidden text-indigo-500 text-right grid">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </div>
        <div class=" ml-0 m-4 text-left grid text-2xl " :class="{ 'hidden lg:grid': !isDescriptionVisible}"
>
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
<script lang="ts" setup>
import { FontAwesomeIcon } from "../plugins/fontawesome.ts";
</script>

<style scoped>

</style>