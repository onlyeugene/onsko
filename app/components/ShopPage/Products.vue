<script setup lang="ts">
import { products } from "~~/lib";

const browse = [
  { id: 1, name: "All Products" },
  { id: 2, name: "body care" },
  { id: 3, name: "face care" },
  { id: 4, name: "hair care" },
  { id: 5, name: "best sellers" },
  { id: 6, name: "new arrivals" },
];

const activeId = ref(1);
const priceOpen = ref(false);
const currentPrice = ref(500);

// Filter criteria mapping
const filterCriteria: Record<number, (product: any) => boolean> = {
  2: (product) => product.category === "body",
  3: (product) => product.category === "face",
  4: (product) => product.category === "hair",
  5: (product) => product.isBestSeller,
  6: (product) => product.isNew,
};

// Filtered products based on category and price
const filteredProducts = computed(() => {
  let filtered = products;

  // Apply category filter if criteria exists (id 1 = "All Products" - no filter)
  const categoryFilter = filterCriteria[activeId.value];
  if (categoryFilter) {
    filtered = filtered.filter(categoryFilter);
  }

  // Apply price filter
  filtered = filtered.filter((product) => product.price <= currentPrice.value);

  return filtered;
});
</script>

<template>
  <div class="container flex flex-col lg:flex-row pt-32 lg:pt-40 pb-16 lg:pb-20 gap-8 lg:gap-20 px-4 lg:px-0">
    <div class="space-y-8 lg:space-y-10 lg:sticky lg:top-60 h-fit z-0 lg:w-80">
      <!-- Browse by -->
      <div class="space-y-4">
        <h2 class="text-lg lg:text-xl font-semibold lowercase">Browse by</h2>
        <div class="border-b border-gray-400 w-32 lg:w-36" />

        <ul>
          <li
            v-for="item in browse"
            :key="item.id"
            @click="activeId = item.id"
            class="py-3 cursor-pointer transition-all duration-200"
            :class="
              activeId === item.id
                ? 'text-black underline underline-offset-4'
                : 'text-gray-600 hover:text-black hover:underline hover:underline-offset-4'
            "
          >
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- Filter by Price -->
      <div class="space-y-4">
        <h2 class="text-lg lg:text-xl font-semibold lowercase">Filter by</h2>
        <div class="border-b border-gray-400 w-32 lg:w-36" />

        <div
          class="flex items-center justify-between mt-4 cursor-pointer select-none"
          @click="priceOpen = !priceOpen"
        >
          <h3 class="font-medium">Price</h3>
          <Icon
            :name="priceOpen ? 'uil:minus' : 'uil:plus'"
            class="text-lg transition-transform duration-300"
            :class="{ 'rotate-180': priceOpen }"
          />
        </div>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-40"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 max-h-40"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="priceOpen" class="mt-6 space-y-2">
            <!-- THE MAGIC HAPPENS HERE -->
            <input
              type="range"
              class="custom-range w-full"
              min="0"
              max="1000"
              step="10"
              v-model="currentPrice"
              :style="{ '--progress': (currentPrice / 1000) * 100 + '%' }"
            />

            <div class="flex justify-between text-sm font-medium text-gray-700">
              <span>$0</span>
              <span>${{ currentPrice }}</span>
            </div>
          </div>
        </Transition>
        <div class="border-b border-gray-400 w-32 lg:w-36" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      <div
        v-for="item in filteredProducts"
        :key="item.id"
        class="relative p-3 group"
      >
        <img
        @click="$router.push(`/shop/${item.id}`)"
          :src="item.image"
          :alt="item.name"
          class="h-auto rounded-md transition-transform duration-200 group-hover:scale-105 cursor-pointer"
        />

        <!-- Best Seller Badge -->
        <div
          v-if="item.isBestSeller"
          class="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
        >
          Best Seller
        </div>

        <!-- New Badge -->
        <div
          v-if="item.isNew"
          class="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full"
        >
          New
        </div>

        <!-- Product Info -->
        <div class="mt-3 text-center">
          <h3 class="font-medium text-sm text-gray-900">{{ item.name }}</h3>
          <p class="text-gray-600 text-sm font-semibold">${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-range {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  background: transparent;
  cursor: pointer;
}

/* Track – light gray background */
.custom-range::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 2px;
  background: "#e5f5f5f";
  background: linear-gradient(
    to right,
    #000000 0%,
    #000000 var(--progress, 0%),
    #e5e7eb var(--progress, 0%),
    #e5e7eb 100%
  );
}

.custom-range::-moz-range-track {
  height: 4px;
  border-radius: 2px;
  border: none;
  background: #e5e7eb;
}

/* Progress fill for Firefox */
.custom-range::-moz-range-progress {
  background: #000000;
  height: 4px;
  border-radius: 2px;
}

/* Thumb */
.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #000;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-top: -8px;
}

.custom-range::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #000;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}
</style>
