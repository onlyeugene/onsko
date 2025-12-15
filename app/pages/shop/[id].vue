<script setup lang="ts">
import BaseNavigationShop from "~/components/common/BaseNavigationShop.vue";
import Footer from "~/components/common/Footer.vue";
import { bestSellers, products } from "~~/lib";
import { useCart } from "~/composables/useCart";
import { useWishlist } from "~/composables/useWishlist";

const route = useRoute();
const router = useRouter();
const hoveredId = ref<string | null>(null);

const productId = route.params.id as string;
const product = products.find((p) => p.id === productId);

if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
  });
}

// Composables
const { addToCart } = useCart();
const { toggleWishlist, isInWishlist } = useWishlist();

// Quantity state
const quantity = ref(1);

// Quantity controls
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Add to cart handler
const handleAddToCart = () => {
  addToCart(product.id, quantity.value);
  // Optional: Show success message or toast
  console.log(`Added ${quantity.value} ${product.name}(s) to cart`);
};

// Favorite handler
const handleToggleFavorite = () => {
  toggleWishlist(product.id);
};

// Accordion states
const productInfoOpen = ref(false);
const refundPolicyOpen = ref(false);
const shippingInfoOpen = ref(false);
</script>

<template>
  <div class="bg-[#F2F0EB]">
    <div class="container relative">
      <div class="sticky top-20 z-10">
        <BaseNavigationShop />
      </div>
      <div class="pt-40 pb-20 flex items-center gap-5">
        <div class="w-full flex items-center justify-center rounded-2xl">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-[700px] object-contain rounded-2xl"
          />
        </div>

        <div class="w-full space-y-6 flex flex-col justify-start">
          <h1 class="font-semibold text-[28px]">{{ product.name }}</h1>
          <p class="font-extralight text-xl">${{ product.price }}</p>
          <h2 class="font-extralight">{{ product.description }}</h2>
          <div class="flex items-start">
            <div
              class="flex items-center border border-dark bg-light/20 rounded-lg"
            >
              <button
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
                class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Icon name="uil:minus" class="w-4 h-4 cursor-pointer" />
              </button>
              <span class="w-12 text-center font-medium text-gray-900">{{
                quantity
              }}</span>
              <button
                @click="increaseQuantity"
                class="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Icon name="uil:plus" class="w-4 h-4 cursor-pointer" />
              </button>
            </div>
          </div>

          <div class="flex items-center gap-4 mt-6 w-full">
            <button
              @click="handleAddToCart"
              class="border py-2 w-full border-dark rounded-md hover:bg-transparent bg-secondary font-extralight transition-colors"
            >
              add to cart
            </button>
            <button
              class="hover:bg-secondary font-extralight border py-2 w-full border-dark rounded-md transition-colors"
            >
              buy now
            </button>
            <button
              @click="handleToggleFavorite"
              :class="[
                'border py-2 w-1/4 border-dark rounded-md transition-colors',
                isInWishlist(product.id)
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'hover:bg-orange-600',
              ]"
            >
              <Icon
                name="uil:heart"
                :class="[
                  'w-4 h-4 font-light',
                  isInWishlist(product.id) ? 'text-white' : '',
                ]"
              />
            </button>
          </div>

          <div class="space-y-4">
            <!-- Product Info Accordion -->
            <div>
              <div
                class="flex items-center justify-between cursor-pointer"
                @click="productInfoOpen = !productInfoOpen"
              >
                <h2 class="font-light font-merriweather text-[26px]">
                  product info
                </h2>
                <Icon
                  :name="productInfoOpen ? 'uil:minus' : 'uil:plus'"
                  class="w-5 h-5 transition-transform duration-200"
                />
              </div>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0 overflow-hidden"
                enter-to-class="opacity-100 max-h-96 overflow-hidden"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96 overflow-hidden"
                leave-to-class="opacity-0 max-h-0 overflow-hidden"
              >
                <div
                  v-if="productInfoOpen"
                  class="mt-4 space-y-3 text-gray-600"
                >
                  <p class="font-extralight">
                    <strong>Usage:</strong>
                    {{
                      product.info?.usage ||
                      "Apply as directed for best results."
                    }}
                  </p>
                  <!-- <p class="font-extralight">
                    <strong>Volume:</strong>
                    {{ product.info?.volume || "Various sizes available." }}
                  </p>
                  <p class="font-extralight">
                    <strong>Skin/Hair Type:</strong>
                    {{
                      product.info?.skinType ||
                      product.info?.hairType ||
                      "Suitable for most types."
                    }}
                  </p>
                  <p class="font-extralight">
                    <strong>Shelf Life:</strong>
                    {{ product.info?.shelfLife || "12 months after opening." }}
                  </p>
                  <div class="mt-3">
                    <strong>Key Benefits:</strong>
                    <ul class="mt-2 space-y-1">
                      <li
                        v-for="benefit in product.benefits"
                        :key="benefit"
                        class="flex items-center gap-2"
                      >
                        <Icon
                          name="uil:check"
                          class="w-4 h-4 text-green-500 flex-shrink-0"
                        />
                        <span class="font-extralight">{{ benefit }}</span> -->
                  <!-- </li> -->
                  <!-- </ul> -->
                  <!-- </div> -->
                </div>
              </Transition>
            </div>
            <div class="w-full border-[0.2px] border-dark" />

            <!-- Return and Refund Policy Accordion -->
            <div>
              <div
                class="flex items-center justify-between cursor-pointer"
                @click="refundPolicyOpen = !refundPolicyOpen"
              >
                <h2 class="font-light font-merriweather text-[26px]">
                  return and refund policy
                </h2>
                <Icon
                  :name="refundPolicyOpen ? 'uil:minus' : 'uil:plus'"
                  class="w-5 h-5 transition-transform duration-200"
                />
              </div>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0 overflow-hidden"
                enter-to-class="opacity-100 max-h-96 overflow-hidden"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96 overflow-hidden"
                leave-to-class="opacity-0 max-h-0 overflow-hidden"
              >
                <div
                  v-if="refundPolicyOpen"
                  class="mt-4 space-y-3 text-gray-600"
                >
                  <p class="font-extralight text">
                    I’m a Return and Refund policy. I’m a great place to let
                    your customers know what to do in case they are dissatisfied
                    with their purchase. Having a straightforward refund or
                    exchange policy is a great way to build trust and reassure
                    your customers that they can buy with confidence.
                  </p>
                </div>
              </Transition>
            </div>
            <div class="w-full border-[0.2px] border-dark" />

            <!-- Shipping Info Accordion -->
            <div>
              <div
                class="flex items-center justify-between cursor-pointer"
                @click="shippingInfoOpen = !shippingInfoOpen"
              >
                <h2 class="font-light font-merriweather text-[26px]">
                  shipping info
                </h2>
                <Icon
                  :name="shippingInfoOpen ? 'uil:minus' : 'uil:plus'"
                  class="w-5 h-5 transition-transform duration-200"
                />
              </div>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0 overflow-hidden"
                enter-to-class="opacity-100 max-h-96 overflow-hidden"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96 overflow-hidden"
                leave-to-class="opacity-0 max-h-0 overflow-hidden"
              >
                <div
                  v-if="shippingInfoOpen"
                  class="mt-4 space-y-3 text-gray-600"
                >
                  <p class="font-extralight text">
                    I'm a shipping policy. I'm a great place to add more
                    information about your shipping methods, packaging and cost.
                    Providing straightforward information about your shipping
                    policy is a great way to build trust and reassure your
                    customers that they can buy from you with confidence.
                  </p>
                </div>
              </Transition>
            </div>
          </div>

          <div
            class="items-start flex justify-start place-items-end pt-20 gap-5"
          >
            <Icon name="uil:twitter" class="w-6 h-6" />
            <Icon name="uil:instagram" class="w-6 h-6" />
            <Icon name="uil:facebook" class="w-6 h-6" />
            <Icon name="uil:pinterest" class="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-10 px-10">
      <div class="flex justify-between lowercase">
        <h1 class="text-[32px] font-semibold">Best sellers</h1>
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
              @click="router.push(`/shop/${best.id}`)"
              :src="best.image"
              :alt="best.name"
              class="w-full h-auto transition-opacity duration-500 ease-in-out rounded-md cursor-pointer"
              :class="{ 'opacity-0': hoveredId === best.id }"
            />
            <img
              :src="best.hoverImage"
              @click="router.push(`/shop/${best.id}`)"
              :alt="best.name"
              class="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 ease-in-out rounded-md cursor-pointer"
              :class="{
                'opacity-100': hoveredId === best.id,
                'opacity-0': hoveredId !== best.id,
              }"
            />
            <!-- <button class="absolute top-4 left-4 border border-light bg-light font-light text-sm  px-3 ">best seller</button> -->
          </div>
          <div class="mt-5 font-extralight text-[#2B312F]">
            <p class="">{{ best.name }}</p>
            <p class="">₦{{ best.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
