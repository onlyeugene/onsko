<script setup lang="ts">
import { useWishlist } from "~/composables/useWishlist";
import { useCart } from "~/composables/useCart";
import { products } from "~~/lib";

const { wishlist, removeFromWishlist } = useWishlist();
const { addToCart } = useCart();

const handleRemoveFromWishlist = (productId: string) => {
  removeFromWishlist(productId);
};

const handleAddToCart = (productId: string) => {
  addToCart(productId, 1);
};

// Check if item is a best seller
const isBestSeller = (itemId: string) => {
  const product = products.find((p) => p.id === itemId);
  return product?.isBestSeller || false;
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
    <div class="mt-8">
      <div
        v-if="wishlist.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6"
      >
        <div
          v-for="item in wishlist"
          :key="item.id"
          class="overflow-hidden relative group"
        >
          <div class="relative">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-[400px] h-auto object-cover"
            />

            <!-- Best Seller Tag (always visible) -->
            <div
              v-if="isBestSeller(item.id)"
              class="absolute top-0 left-0 bg-[#627023] text-white px-4 py-2 text-xs font-semibold"
            >
              Best Seller
            </div>

            <!-- Remove from Wishlist Button - Visible only on hover -->
            <button
              @click="handleRemoveFromWishlist(item.id)"
              class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Icon
                name="uil:times"
                class="w-7 h-7 cursor-pointer text-white"
              />
            </button>
          </div>

          <!-- Product info always visible below the image -->
          <div class="mt-4">
            <h3 class="font-extralight text-gray-900 mb-2">
              {{ item.name }}
            </h3>
            <p class="text-gray-600 font-extralight mb-4">${{ item.price }}</p>

            <div class="flex gap-2">
              <button
                @click="handleAddToCart(item.id)"
                class="flex-1 bg-[#627023] text-white py-3 px-3 transition-colors text-sm font-medium"
              >
                Add to Cart
              </button>
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
    </div>
  </div>
</template>
