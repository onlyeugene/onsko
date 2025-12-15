<script setup lang="ts">
const route = useRoute();

const paths = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "/blog" },
];
</script>

<template>
  <div
    class="w-full max-w-[1440px] sticky top-0  mx-auto rounded-full bg-white/95 backdrop-blur-sm shadow-md"
  >
    <!-- Main Navigation Bar -->
    <div class="flex items-center justify-between py-1 px-6 border-gray-200">
      <!-- Logo Section -->
      <div class="flex items-center gap-1 text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.009 19"
          class="w-6 h-6"
          fill="currentColor"
          role="img"
          aria-hidden="false"
          aria-label="Logo"
        >
          <path
            d="M16.392 9.5A2.626 2.626 0 0 0 19 6.875a2.63 2.63 0 0 0-2.624-2.626c-.723 0-1.412.149-2.04.413a5.2 5.2 0 0 0 .413-2.04A2.62 2.62 0 0 0 12.124.003 2.62 2.62 0 0 0 9.5 2.607 2.626 2.626 0 0 0 6.876 0 2.63 2.63 0 0 0 4.25 2.625c0 .723.147 1.413.413 2.04a5.25 5.25 0 0 0-2.04-.413A2.623 2.623 0 0 0 .002 6.877a2.62 2.62 0 0 0 2.606 2.624A2.626 2.626 0 0 0 0 12.126a2.627 2.627 0 0 0 2.624 2.624 5.2 5.2 0 0 0 2.04-.413 5.2 5.2 0 0 0-.413 2.04 2.62 2.62 0 0 0 2.625 2.621A2.62 2.62 0 0 0 9.5 16.393 2.626 2.626 0 0 0 12.124 19a2.63 2.63 0 0 0 2.625-2.625c0-.723-.147-1.412-.413-2.04a5.2 5.2 0 0 0 2.04.413 2.624 2.624 0 0 0 .016-5.249m-6.895 1.626c-.723 0-1.414.148-2.04.413a5.2 5.2 0 0 0 .413-2.04 5.2 5.2 0 0 0-.413-2.04 5.2 5.2 0 0 0 2.04.413 5.2 5.2 0 0 0 2.04-.412 5.2 5.2 0 0 0-.413 2.04c0 .722.147 1.412.413 2.039a5.25 5.25 0 0 0-2.04-.413"
          />
        </svg>
        <h1 class="text-[32px] text-dark font-poppins font-semibold">onsko</h1>
      </div>

      <!-- Navigation Links -->
      <div class="flex items-center gap-6">
        <NuxtLink
          v-for="item in paths"
          :key="item.name"
          :to="item.href"
          :class="[
            'text-sm transition-colors hover:text-gray-600 cursor-pointer',
            { 'text-primary': route.path === item.href },
          ]"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <!-- User Actions -->
      <div class="flex items-center gap-6 text-sm text-dark space-x-4">
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-1 ">
            <Icon name="uil:user" class="cursor-pointer"/>
           <p class="cursor-pointer">User</p>
          </div>
          <div class="flex items-center gap-1 ">
            <Icon name="uil:heart" class="cursor-pointer"/>
            <span class="cursor-pointer">0</span>
          </div>
        </div>

        <div class="flex items-center gap-1 relative cursor-pointer">
          <input
            type="text"
            placeholder="Search"
            class="outline-none bg-transparent rounded-full hover:bg-[#ae3a0068] hover:border w-full px-3 py-2 placeholder:text-dark transition-colors duration-200 cursor-pointer"
          />
          <Icon name="uil:search" class="absolute top-3 right-2" />
        </div>
      </div>
    </div>
  </div>
</template>
