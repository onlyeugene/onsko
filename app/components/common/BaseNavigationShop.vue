<script setup lang="ts">
import { useCart } from "~/composables/useCart";
import { useWishlist } from "~/composables/useWishlist";
import CartDropdown from "~/components/common/CartDropdown.vue";

const route = useRoute();
const { cartCount } = useCart();
const { wishlistCount } = useWishlist();
const isMenuOpen = ref(false);

const paths = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "/blog" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div
    class="w-full sticky top-0 mx-auto backdrop-blur-sm shadow-md z-80 max-w-[1440px] px-4 md:px-6 lg:px-8 rounded-none md:rounded-full bg-primary"
  >
    <!-- Main Navigation Bar -->
    <div
      class="flex items-center justify-between py-2 md:py-3 px-0 border-gray-200"
    >
      <!-- Logo Section -->
      <div class="flex items-center gap-1 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.009 19"
          class="w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
          role="img"
          aria-hidden="false"
          aria-label="Logo"
        >
          <path
            d="M16.392 9.5A2.626 2.626 0 0 0 19 6.875a2.63 2.63 0 0 0-2.624-2.626c-.723 0-1.412.149-2.04.413a5.2 5.2 0 0 0 .413-2.04A2.62 2.62 0 0 0 12.124.003 2.62 2.62 0 0 0 9.5 2.607 2.626 2.626 0 0 0 6.876 0 2.63 2.63 0 0 0 4.25 2.625c0 .723.147 1.413.413 2.04a5.25 5.25 0 0 0-2.04-.413A2.623 2.623 0 0 0 .002 6.877a2.62 2.62 0 0 0 2.606 2.624A2.626 2.626 0 0 0 0 12.126a2.627 2.627 0 0 0 2.624 2.624 5.2 5.2 0 0 0 2.04-.413 5.2 5.2 0 0 0-.413 2.04 2.62 2.62 0 0 0 2.625 2.621A2.62 2.62 0 0 0 9.5 16.393 2.626 2.626 0 0 0 12.124 19a2.63 2.63 0 0 0 2.625-2.625c0-.723-.147-1.412-.413-2.04a5.2 5.2 0 0 0 2.04.413 2.624 2.624 0 0 0 .016-5.249m-6.895 1.626c-.723 0-1.414.148-2.04.413a5.2 5.2 0 0 0 .413-2.04 5.2 5.2 0 0 0-.413-2.04 5.2 5.2 0 0 0 2.04.413 5.2 5.2 0 0 0 2.04-.412 5.2 5.2 0 0 0-.413 2.04c0 .722.147 1.412.413 2.039a5.25 5.25 0 0 0-2.04-.413"
          />
        </svg>
        <h1
          class="text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-white font-poppins font-semibold"
        >
          onsko
        </h1>
      </div>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-6">
        <NuxtLink
          v-for="item in paths"
          :key="item.name"
          :to="item.href"
          :class="[
            'text-sm transition-colors hover:text-light cursor-pointer',
            route.path === item.href ? 'text-light' : 'text-white',
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <!-- Desktop User Actions -->
      <div
        class="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-white"
      >
        <div class="flex items-center gap-4 lg:gap-6">
          <NuxtLink
            to="/profile"
            class="flex items-center gap-1 hover:text-light transition-colors"
          >
            <Icon name="uil:user" class="cursor-pointer w-4 h-4" />
            <p class="cursor-pointer hidden lg:block">User</p>
          </NuxtLink>
          <NuxtLink
            to="/profile?tab=my%20wishlist"
            class="flex items-center gap-1 hover:text-light transition-colors"
          >
            <Icon name="uil:heart" class="cursor-pointer w-4 h-4" />
            <span class="cursor-pointer">{{ wishlistCount }}</span>
          </NuxtLink>
          <!-- <CartDropdown /> -->
        </div>

        <div class="flex items-center gap-1 relative cursor-pointer">
          <input
            type="text"
            placeholder="Search"
            class="outline-none bg-transparent rounded-full hover:bg-[#ffffff1a] hover:border w-full px-3 py-2 placeholder:text-white transition-colors duration-200 cursor-pointer text-sm"
          />
          <Icon name="uil:search" class="absolute top-2.5 right-2 w-4 h-4" />
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <Icon
          name="uil:bars"
          class="w-5 h-5 text-white"
          :class="{ hidden: isMenuOpen }"
        />
        <Icon
          name="uil:times"
          class="w-5 h-5 text-white"
          :class="{ hidden: !isMenuOpen }"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-orange-400 px-4 py-4 shadow-lg z-50"
      >
        <!-- Mobile Search -->
        <div class="flex items-center gap-2 mb-4">
          <div class="flex items-center gap-1 relative cursor-pointer flex-1">
            <input
              type="text"
              placeholder="Search"
              class="outline-none bg-white/10 rounded-full border border-white/20 w-full px-3 py-2 placeholder:text-white/70 transition-colors duration-200 cursor-pointer text-sm text-white"
            />
            <Icon
              name="uil:search"
              class="absolute top-2.5 right-2 w-4 h-4 text-white/70"
            />
          </div>
        </div>

        <!-- Mobile Navigation Links -->
        <div class="space-y-2 mb-4">
          <NuxtLink
            v-for="item in paths"
            :key="item.name"
            :to="item.href"
            @click="closeMenu"
            :class="[
              'block py-2 px-3 rounded-md transition-colors text-sm',
              route.path === item.href
                ? 'text-light bg-white/10'
                : 'text-white hover:text-light hover:bg-white/10',
            ]"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile User Actions -->
        <div class="border-t border-orange-400 pt-4 space-y-3">
          <NuxtLink
            to="/profile"
            @click="closeMenu"
            class="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-white/10 transition-colors text-sm text-white"
          >
            <Icon name="uil:user" class="w-4 h-4" />
            <span>User</span>
          </NuxtLink>
          <NuxtLink
            to="/profile?tab=my%20wishlist"
            @click="closeMenu"
            class="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-white/10 transition-colors text-sm text-white"
          >
            <Icon name="uil:heart" class="w-4 h-4" />
            <span>Wishlist ({{ wishlistCount }})</span>
          </NuxtLink>
          <div class="flex items-center gap-2 py-2 px-3">
            <!-- <CartDropdown /> -->
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
