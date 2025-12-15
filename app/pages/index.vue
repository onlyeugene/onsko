<script setup lang="ts">
import BaseNavigation from "~/components/common/BaseNavigation.vue";
import Footer from "~/components/common/Footer.vue";
import Arrivals from "~/components/HomePages/Arrivals.vue";
import BestSellers from "~/components/HomePages/BestSellers.vue";
import Category from "~/components/HomePages/Category.vue";
import Contact from "~/components/HomePages/Contact.vue";
import HomeHero from "~/components/HomePages/HomeHero.vue";
import ImageDisplay from "~/components/HomePages/ImageDisplay.vue";
import Story from "~/components/HomePages/Story.vue";
import { cream, facemask } from "~~/lib";
</script>

<template>
  <div>
    <div class="relative">
      <div class="sticky top-20 z-50 w-full px-5">
        <BaseNavigation />
      </div>
      <HomeHero />
    </div>
    <div class="relative">
      <!-- Best Sellers - Sticky Section -->
      <div class="sticky top-0 z-10 flex items-center overflow-hidden">
        <BestSellers />
      </div>

      <!-- Spacer to allow scrolling -->
      <div class="h-[100vh] z-20 relative">
        <Arrivals />
        <Category />

        <div class="relative z-30">
          <!-- Additional content can go here -->

          <div class="sticky top-10 z-10 flex items-center overflow-hidden container">
            <!-- Story Component Placeholder -->
            <Story />
          </div>
          <div class="h-[100vh] z-20 relative mt-[500px] md:block hidden">
            <div
              class="sticky top-40 z-10 flex items-center bounce overflow-hidden"
            >
              <ImageDisplay :image="cream" align="end" alt="Cream product" />
            </div>

            <div class="h-[20vh] z-20 sticky mt-[500px] top-10">
              <ImageDisplay
                :image="facemask"
                align="start"
                alt="Face mask product"
              />
            </div>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    </div>

  </div>
</template>

<style scoped>
.bounce {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
