<script setup lang="ts">
import { ref } from "vue";
import { bestSellers } from "../../../lib/index";

const hoveredId = ref<string | null>(null);
</script>

<template>
  <div class="container my-8 md:my-10 px-4 md:px-0">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lowercase"
    >
      <h1 class="text-2xl md:text-[32px] font-semibold">Best sellers</h1>
      <button
        class="py-2 px-4 md:px-6 border text-base md:text-xl rounded-xl border-black font-semibold hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
      >
        View more
      </button>
    </div>

    <div
      class="flex md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-4 mt-6 overflow-x-auto md:overflow-x-visible scrollbar-hide"
    >
      <div
        v-for="best in bestSellers"
        :key="best.id"
        class="relative cursor-pointer flex-shrink-0 w-64 md:w-auto"
        @mouseenter="hoveredId = best.id"
        @mouseleave="hoveredId = null"
      >
        <div class="relative w-full">
          <img
            :src="best.image"
            :alt="best.name"
            class="w-full h-auto transition-opacity duration-500 ease-in-out rounded-md"
            :class="{ 'opacity-0': hoveredId === best.id }"
          />
          <img
            @click="$router.push(`/shop/${best.id}`)"
            :src="best.hoverImage"
            :alt="best.name"
            class="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-in-out rounded-md cursor-pointer"
            :class="{
              'opacity-100': hoveredId === best.id,
              'opacity-0': hoveredId !== best.id,
            }"
          />
          <button
            class="absolute top-2 left-2 md:top-4 md:left-4 border border-light bg-light font-light text-xs md:text-sm px-2 md:px-3"
          >
            best seller
          </button>
        </div>
        <div class="mt-3 md:mt-5 font-extralight text-[#2B312F]">
          <p class="text-sm md:text-base">{{ best.name }}</p>
          <p class="text-sm md:text-base">₦{{ best.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
