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
  <div class="bg-white container py-10">
    <div class="flex justify-between lowercase">
      <h1 class="text-[32px] font-semibold">Shop by category</h1>
      <button
        class="py-2 px-6 border text-xl rounded-xl border-black font-semibold hover:bg-secondary"
      >
        View more
      </button>
    </div>

    <div class="grid grid-cols-3 w-full gap-5 items-center mt-10">
      <div v-for="cat in category" :key="cat.id">
        <div
          :class="`bg-gray-100 py-10 px-10 rounded-xl flex flex-col items-center cursor-pointer transition-all duration-300 ${getHoverClass(
            cat.style
          )} `"
        >
          <img :src="cat.image" :alt="cat.name" class="w-full rounded-xl"/>
          <button
            class="border bg-transparent mt-5 py-1 px-14 rounded-xl border-dark font-semibold hover:bg-secondary text-[42px] transition-colors duration-300"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
