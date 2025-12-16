<script setup lang="ts">
// This page will handle 404 errors
</script>

<template>
  <div class="min-h-screen bg-[#F9F9F9] flex items-center justify-center px-4">
    <div class="max-w-2xl mx-auto text-center">
      <!-- 404 Illustration -->
      <div class="mb-8">
        <div class="relative">
          <div class="w-64 h-64 mx-auto mb-4 opacity-20">
            <svg
              viewBox="0 0 200 200"
              class="w-full h-full"
              fill="currentColor"
            >
              <circle cx="100" cy="100" r="80" fill="#627023" opacity="0.1" />
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#627023"
                stroke-width="2"
              />
              <circle cx="100" cy="80" r="8" fill="#627023" />
              <path
                d="M85 110 Q100 125 115 110"
                stroke="#627023"
                stroke-width="3"
                fill="none"
                stroke-linecap="round"
              />
              <circle cx="85" cy="75" r="3" fill="#627023" />
              <circle cx="115" cy="75" r="3" fill="#627023" />
            </svg>
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h1
              class="text-8xl md:text-9xl font-bold text-primary font-poppins"
            >
              404
            </h1>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
          Oops! Page Not Found
        </h2>
        <p
          class="text-lg text-gray-600 max-w-md mx-auto font-manrope leading-relaxed"
        >
          The page you're looking for seems to have wandered off into the
          skincare aisle. Don't worry, let's get you back on track to glowing
          skin!
        </p>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <NuxtLink
            to="/"
            class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 font-poppins shadow-lg hover:shadow-xl"
          >
            Go Home
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-poppins"
          >
            Shop Now
          </NuxtLink>
        </div>

        <!-- Fun Elements -->
        <div class="mt-12 space-y-4">
          <p class="text-sm text-gray-500 font-manrope">
            Popular pages you might like:
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/shop"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm"
            >
              Shop
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm"
            >
              Blog
            </NuxtLink>
            <NuxtLink
              to="/profile"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm"
            >
              Profile
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div
        class="absolute top-20 left-10 w-2 h-2bg-[#627023] rounded-full opacity-30"
      ></div>
      <div
        class="absolute top-40 right-16 w-1 h-1 bg-primary rounded-full opacity-40"
      ></div>
      <div
        class="absolute bottom-32 left-20 w-3 h-3 bg-[#627023] rounded-full opacity-20"
      ></div>
      <div
        class="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full opacity-30"
      ></div>
    </div>
  </div>
</template>

<style scoped>
/* Custom animations for 404 */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
