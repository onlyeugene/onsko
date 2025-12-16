<script setup lang="ts">
import BaseNavigation from "~/components/common/BaseNavigation.vue";
import Footer from "~/components/common/Footer.vue";
import { blog } from "~~/lib";

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Get unique categories for filtering
const categories = computed(() => {
  const cats = blog.map((post) => post.category);
  return [...new Set(cats)];
});

const selectedCategory = ref<string>("All");

const filteredPosts = computed(() => {
  if (selectedCategory.value === "All") {
    return blog;
  }
  return blog.filter((post) => post.category === selectedCategory.value);
});
</script>

<template>
  <div class="bg-[#F9F9F9] min-h-screen">
    <!-- Navigation -->
    <div class="sticky top-10 z-50">
      <BaseNavigation />
    </div>


    <!-- Category Filter -->
    <section class=" pt-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            @click="selectedCategory = 'All'"
            :class="[
              'px-6 py-2 -full font-semibold transition-all duration-300 font-manrope',
              selectedCategory === 'All'
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            All Posts
          </button>
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 -full font-semibold transition-all duration-300 font-manrope',
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-12 md:py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            class="bg-white -2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <!-- Blog Image -->
            <div class="relative overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-[#627023] text-white px-3 py-1 -full text-xs font-semibold"
                >
                  {{ post.category }}
                </span>
              </div>
            </div>

            <!-- Blog Content -->
            <div class="p-6 border-gray-300">
              <!-- Meta Information -->
              <div
                class="flex items-center gap-4 text-sm text-gray-500 mb-3 font-manrope"
              >
                <span>{{ formatDate(post.date) }}</span>
                <span>•</span>
                <span>{{ post.readTime }}</span>
              </div>

              <!-- Title -->
              <h2
                class="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-poppins leading-tight hover:text-primary transition-colors cursor-pointer"
              >
                {{ post.title }}
              </h2>

              <!-- Excerpt -->
              <p class="text-gray-600 mb-4 font-manrope leading-relaxed">
                {{ post.excerpt }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  class="bg-gray-100 text-gray-700 px-2 py-1 -md text-xs font-medium"
                >
                  #{{ tag }}
                </span>
              </div>

              <!-- Author and Read More -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div
                    class="w-8 h-8 bg-primary -full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">
                      {{ post.author.charAt(0) }}
                    </span>
                  </div>
                  <span class="text-sm text-gray-700 font-manrope">{{
                    post.author
                  }}</span>
                </div>
                <NuxtLink
                  :to="`/blog/${post.slug}`"
                  class="text-primary hover:text-secondary font-semibold transition-colors flex items-center gap-1"
                >
                  Read More
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- No Posts Message -->
        <div v-if="filteredPosts.length === 0" class="text-center py-16">
          <div
            class="w-16 h-16 bg-gray-200 -full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">
            No posts found
          </h3>
          <p class="text-gray-500">Try selecting a different category.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
