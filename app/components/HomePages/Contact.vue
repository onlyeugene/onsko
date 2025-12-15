<script setup lang="ts">
    import { body, face, rowItems, secondItems } from "~~/lib";
    
    // Duplicate images for seamless infinite effect
    const firstRowImages = [...Array(12)].map(() => body);  // 12 copies
    const secondRowImages = [...Array(12)].map(() => face);
    
    const containerRef = ref<HTMLDivElement | null>(null);
    
    const scrollProgress = ref(0);
    
    const handleScroll = () => {
      if (!containerRef.value) return;
    
      const rect = containerRef.value.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
      // Trigger only when section is in/near viewport
      const startTrigger = -windowHeight * 0.5;
      const endTrigger = windowHeight * 0.5;
    
      if (rect.bottom < startTrigger || rect.top > windowHeight + endTrigger) {
        return;
      }
    
      // Progress from 0 → 1 as user scrolls through the section
      const progress = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - rect.top) / (windowHeight + rect.height)
        )
      );
    
      scrollProgress.value = progress;
    };
    
    // Smooth easing
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
    
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    });
    
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    </script>
    
    <template>
      <section ref="containerRef" class="py-20 container overflow-hidden">
        <div class="container mx-auto px-4 text-center">
          <Icon name="uil:instagram" class="w-12 h-12 mx-auto" />
          <h2 class="text-4xl md:text-5xl font-bold font-poppins mt-4">
            Follow us on instagram
          </h2>
          <p class="text-2xl md:text-3xl text-gray-700 mt-2">@_onlyeugene</p>
        </div>
    
        <!-- First Row: Moves Right Slowly -->
        <div class="relative mt-16 overflow-hidden">
          <div
            class="flex gap-4 md:gap-8"
            :style="{
              transform: `translateX(${easeOutQuad(scrollProgress) * 300 - 150}px)`,
              transition: 'transform 0.08s linear'
            }"
          >
            <!-- Duplicate set for seamless loop -->
            <div v-for="n in 2" :key="n" class="flex gap-4 md:gap-8 flex-shrink-0">
              <img
                v-for="(img) in rowItems"
                :key="img.id"
                :src="img.image"
                class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Instagram post"
              />
            </div>
          </div>
        </div>
    
        <!-- Second Row: Moves Left Faster -->
        <div class="relative mt-8 overflow-hidden">
          <div
            class="flex gap-4 md:gap-8 justify-start"
            :style="{
              transform: `translateX(${easeOutQuad(scrollProgress) * -500 + 250}px)`,
              transition: 'transform 0.08s linear'
            }"
          >
            <div v-for="n in 2" :key="n" class="flex gap-4 md:gap-8 flex-shrink-0">
              <img
                v-for="(img) in secondItems"
                :key="img.id"
                :src="img.image"
                class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                alt="Instagram post"
              />
            </div>
          </div>
        </div>
      </section>
    </template>