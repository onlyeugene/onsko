<script setup lang="ts">
import { category } from "~~/lib";

const getHoverClass = (style: string) => {
  const styleMap: Record<string, string> = {
    "bg-light": "hover:bg-light",
    "bg-primary": "hover:bg-orange-600",
    "bg-secondary": "hover:bg-secondary",
  };
  return styleMap[style] || "hover:bg-secondary";
};
</script>

<template>
  <div class="bg-white container py-8 md:py-10 px-4 md:px-0">
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 lowercase"
    >
      <h1 class="text-2xl md:text-[32px] font-semibold">Shop by category</h1>
      <div>
        <button
          class="py-2 px-4 md:px-6 border text-base md:text-xl rounded-xl border-black font-semibold hover:bg-secondary transition-colors duration-300 w-full sm:w-auto"
        >
          View more
        </button>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 md:w-full  gap-4 md:gap-5 items-center mt-8 md:mt-10"
    >
      <div v-for="cat in category" :key="cat.id">
        <div
          :class="`bg-gray-100 py-6 md:py-10 px-6 md:px-10 rounded-xl flex flex-col items-center cursor-pointer transition-all duration-300 ${getHoverClass(
            cat.style
          )} `"
        >
          <img :src="cat.image" :alt="cat.name" class="w-full rounded-xl" />
          <button
            class="border bg-transparent mt-3 md:mt-5 py-3 px-8 md:px-14 rounded-xl border-dark font-semibold hover:bg-secondary text-xl md:text-[42px] transition-colors duration-300"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
