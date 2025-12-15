<script setup lang="ts">
import { useWishlist } from "~/composables/useWishlist";
import { useCart } from "~/composables/useCart";

const { wishlist, removeFromWishlist } = useWishlist();
const { addToCart } = useCart();

const handleRemoveFromWishlist = (productId: string) => {
  removeFromWishlist(productId);
};

const handleAddToCart = (productId: string) => {
  addToCart(productId, 1);
};
</script>

<template>
  <div>
    <div>
      <h1 class="font-semibold text-[26px]">My Wishlist</h1>
      <p class="font-extralight text-sm">
        View favorite products you've saved to your wishlist.
      </p>
    </div>
    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <!-- Wishlist Items -->
    <div v-if="wishlist.length > 0" class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in wishlist"
          :key="item.id"
          class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-48 object-cover"
            />
            <button
              @click="handleRemoveFromWishlist(item.id)"
              class="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
            >
              <Icon name="uil:trash" class="w-4 h-4 text-red-500" />
            </button>
          </div>

          <div class="p-4">
            <h3 class="font-medium text-gray-900 mb-2">{{ item.name }}</h3>
            <p class="text-gray-600 font-semibold mb-3">${{ item.price }}</p>
            <div class="flex gap-2">
              <button
                @click="handleAddToCart(item.id)"
                class="flex-1 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Add to Cart
              </button>
              <NuxtLink
                :to="`/shop/${item.id}`"
                class="flex-1 border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium text-center"
              >
                View Details
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty Wishlist -->
    <div v-else class="text-center my-32">
      <Icon name="uil:heart" class="w-16 h-16 text-gray-300 mx-auto mb-6" />
      <h2 class="text-xl mb-4 text-gray-600">Your wishlist is empty</h2>
      <p class="text-gray-500 mb-6">
        Start adding products you love to your wishlist!
      </p>
      <NuxtLink
        to="/shop"
        class="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
      >
        Start Shopping
      </NuxtLink>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />
  </div>
</template>
