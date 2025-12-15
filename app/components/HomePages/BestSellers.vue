<script setup lang="ts">
import { ref } from "vue";
import { bestSellers } from "../../../lib/index";

const hoveredId = ref<string | null>(null);
</script>

<template>
  <div class="container my-10">
    <div class="flex justify-between lowercase">
      <h1 class="text-[32px] font-semibold">Best sellers</h1>
      <button
        class="py-2 px-6 border text-xl rounded-xl border-black font-semibold hover:bg-secondary"
      >
        View more
      </button>
    </div>

    <div class="grid grid-cols-4 items-center gap-4 mt-6">
      <div
        v-for="best in bestSellers"
        :key="best.id"
        class="relative cursor-pointer"
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
          <button class="absolute top-4 left-4 border border-light bg-light font-light text-sm  px-3 ">best seller</button>
        </div>
        <div class="mt-5 font-extralight text-[#2B312F]">
          <p class="">{{ best.name }}</p>
          <p class="">₦{{ best.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
