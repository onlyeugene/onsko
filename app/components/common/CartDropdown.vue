<script setup lang="ts">
import { useCart } from "~/composables/useCart";

const {
  cart,
  cartTotal,
  cartCount,
  removeFromCart,
  updateQuantity,
  clearCart,
} = useCart();

const isOpen = ref(false);

const toggleCart = () => {
  isOpen.value = !isOpen.value;
};

const closeCart = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="">
    <!-- Cart Button -->
    <button
      @click="toggleCart"
      class="flex items-center gap-1 cursor-pointer relative"
    >
      <Icon name="uil:shopping-cart" class="cursor-pointer" />
      <span
        v-if="cartCount > 0"
        class="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ cartCount }}
      </span>
      <span v-else class="cursor-pointer">Cart</span>
    </button>

    <!-- Overlay -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="closeCart"
      ></div>
    </Transition>

    <!-- Cart Slide-out Panel -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
      >
        <!-- Cart Header -->
        <div
          class="p-6 border-b border-gray-200 flex items-center justify-between"
        >
          <h3 class="text-xl font-semibold">Shopping Cart</h3>
          <button
            @click="closeCart"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Icon name="uil:times" class="w-6 h-6" />
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto">
          <div v-if="cart.length > 0">
            <div
              v-for="item in cart"
              :key="item.id"
              class="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-start gap-3">
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div class="flex-1 min-w-0">
                  <h4 class="text-sm font-medium text-gray-900 mb-1">
                    {{ item.name }}
                  </h4>
                  <p class="text-sm text-gray-500 mb-3">${{ item.price }}</p>

                  <!-- Quantity Controls -->
                  <div class="flex items-center gap-2">
                    <button
                      @click="updateQuantity(item.id, item.quantity - 1)"
                      class="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span
                      class="text-sm font-medium min-w-[20px] text-center"
                      >{{ item.quantity }}</span
                    >
                    <button
                      @click="updateQuantity(item.id, item.quantity + 1)"
                      class="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  @click="removeFromCart(item.id)"
                  class="text-red-500 hover:text-red-700 p-1 flex-shrink-0 transition-colors"
                >
                  <Icon name="uil:trash" class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <!-- Empty Cart -->
          <div
            v-else
            class="flex-1 flex flex-col items-center justify-center p-8 text-center"
          >
            <Icon
              name="uil:shopping-cart"
              class="w-16 h-16 text-gray-300 mx-auto mb-4"
            />
            <p class="text-gray-500 mb-4">Your cart is empty</p>
            <NuxtLink
              to="/shop"
              @click="closeCart"
              class="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Start Shopping
            </NuxtLink>
          </div>
        </div>

        <!-- Cart Footer -->
        <div v-if="cart.length > 0" class="border-t border-gray-200 p-6">
          <div class="mb-4">
            <div
              class="flex items-center justify-between text-lg font-semibold"
            >
              <span>Total:</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
          </div>
          <div class="space-y-3">
            <button
              @click="clearCart"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Clear Cart
            </button>
            <NuxtLink
              to="/checkout"
              @click="closeCart"
              class="block w-full px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center font-medium"
            >
              Checkout
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
