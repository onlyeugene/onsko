<script setup lang="ts"></script>

<template>
  <footer class="bg-dark text-white py-16 mt-20">
    <div class="container mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2 text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.009 19"
              class="w-6 h-6 rotate"
              fill="currentColor"
              role="img"
              aria-hidden="false"
              aria-label="Logo"
            >
              <path
                d="M16.392 9.5A2.626 2.626 0 0 0 19 6.875a2.63 2.63 0 0 0-2.624-2.626c-.723 0-1.412.149-2.04.413a5.2 5.2 0 0 0 .413-2.04A2.62 2.62 0 0 0 12.124.003 2.62 2.62 0 0 0 9.5 2.607 2.626 2.626 0 0 0 6.876 0 2.63 2.63 0 0 0 4.25 2.625c0 .723.147 1.413.413 2.04a5.25 5.25 0 0 0-2.04-.413A2.623 2.623 0 0 0 .002 6.877a2.62 2.62 0 0 0 2.606 2.624A2.626 2.626 0 0 0 0 12.126a2.627 2.627 0 0 0 2.624 2.624 5.2 5.2 0 0 0 2.04-.413 5.2 5.2 0 0 0-.413 2.04 2.62 2.62 0 0 0 2.625 2.621A2.62 2.62 0 0 0 9.5 16.393 2.626 2.626 0 0 0 12.124 19a2.63 2.63 0 0 0 2.625-2.625c0-.723-.147-1.412-.413-2.04a5.2 5.2 0 0 0 2.04.413 2.624 2.624 0 0 0 .016-5.249m-6.895 1.626c-.723 0-1.414.148-2.04.413a5.2 5.2 0 0 0 .413-2.04 5.2 5.2 0 0 0-.413-2.04 5.2 5.2 0 0 0 2.04.413 5.2 5.2 0 0 0 2.04-.412 5.2 5.2 0 0 0-.413 2.04c0 .722.147 1.412.413 2.039a5.25 5.25 0 0 0-2.04-.413"
              />
            </svg>
            <h3 class="text-lg md:text-3xl font-bold font-poppins">onsko</h3>
          </div>
          <p class="text-gray-300 mb-6 font-manrope leading-relaxed max-w-md">
            Discover your natural radiance with our premium skincare collection.
            Crafted with care, designed for every skin type.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://instagram.com/_onlyeugene"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
            >
              <Icon
                name="uil:instagram"
                size="20"
                class="text-dark group-hover:text-white transition-colors duration-300"
              />
            </a>
            <NuxtLink
              to="#"
              class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group cursor-pointer"
            >
              <Icon
                name="uil:facebook"
                size="20"
                class="text-white group-hover:text-white transition-colors duration-300"
              />
            </NuxtLink>
            <NuxtLink
              to="#"
              class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300 group cursor-pointer"
            >
              <Icon
                name="uil:twitter"
                size="20"
                class="text-white group-hover:text-white transition-colors duration-300"
              />
            </NuxtLink>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4
            class="text-sm md:text-xl font-semibold font-poppins mb-6 text-secondary"
          >
            Quick Links
          </h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Shop All
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Best Sellers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                New Arrivals
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Categories
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                About Us
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Customer Care -->
        <div>
          <h4
            class="text-sm md:text-xl font-semibold font-poppins mb-6 text-secondary"
          >
            Customer Care
          </h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Contact Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Shipping Info
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Returns & Exchanges
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="#"
                class="text-gray-300 hover:text-secondary transition-colors duration-300 font-manrope cursor-pointer"
              >
                Privacy Policy
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="border-t border-gray-700 pt-12 pb-8">
        <div class="max-w-2xl mx-auto text-center">
          <h4
            class="text-base md:text-2xl font-semibold font-poppins mb-4 text-secondary"
          >
            Stay in the Glow
          </h4>
          <p class="text-gray-300 mb-6 font-manrope">
            Subscribe to our newsletter for exclusive offers, skincare tips, and
            new product launches.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors duration-300"
            />
            <button
              class="bg-secondary text-dark hover:text-white border-dark border hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold font-poppins transition-colors duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-8 mt-8">
        <div class="flex flex-col md:flex-row justify-between md:items-center items-start">
          <p class="text-gray-400 text-sm font-manrope">
            © {{ new Date().getFullYear() }} onsko. All rights reserved.
          </p>
          <div
            class="flex md:items-center items-start md:space-x-6 sapce-x-0 mt-4 md:mt-0 whitespace-nowrap md:flex-row flex-col"
          >
            <NuxtLink
              to="#"
              class="text-gray-400 hover:text-secondary text-sm font-manrope transition-colors duration-300 cursor-pointer"
            >
              Terms of Service
            </NuxtLink>
            <span class="text-gray-600">•</span>
            <NuxtLink
              to="#"
              class="text-gray-400 hover:text-secondary text-sm font-manrope transition-colors duration-300 cursor-pointer"
            >
              Privacy Policy
            </NuxtLink>
            <span class="text-gray-600">•</span>
            <NuxtLink
              to="#"
              class="text-gray-400 hover:text-secondary text-sm font-manrope transition-colors duration-300 cursor-pointer"
            >
              Cookies
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.rotate {
  animation: spin 10s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
