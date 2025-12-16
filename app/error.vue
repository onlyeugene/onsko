<script setup lang="ts">
import BaseNavigation from "~/components/common/BaseNavigation.vue";
import Footer from "~/components/common/Footer.vue";

// Error page props (automatically passed by Nuxt)
const props = defineProps<{
  error: {
    statusCode: number;
    statusMessage: string;
    message: string;
  };
}>();

// Handle error and provide recovery options
const handleError = () => {
  // Clear the error
  clearError();
};

// Get appropriate error message and icon
const getErrorConfig = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return {
        title: "Page Not Found",
        message: "The page you're looking for doesn't exist or has been moved.",
        icon: "search-off",
      };
    case 500:
      return {
        title: "Server Error",
        message: "Something went wrong on our end. Please try again later.",
        icon: "server-error",
      };
    case 403:
      return {
        title: "Access Forbidden",
        message: "You don't have permission to access this page.",
        icon: "lock",
      };
    default:
      return {
        title: "Something Went Wrong",
        message: "An unexpected error occurred. Please try again.",
        icon: "alert-circle",
      };
  }
};

const errorConfig = getErrorConfig(props.error.statusCode);
</script>

<template>
  <div class="min-h-screen bg-[#F9F9F9]">
    <!-- Navigation -->
    <div class="sticky top-10 z-50 ">
      <BaseNavigation />
    </div>

    <!-- Error Content -->
    <div class="flex items-center justify-center min-h-[80vh] px-4 py-16">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Error Icon/Illustration -->
        <div class="mb-8">
          <!-- <div
            class="w-32 h-32 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center"
          >
            <Icon
              :name="`uil:${errorConfig.icon}`"
              class="w-16 h-16 text-red-500"
            />
          </div> -->
          <div class="space-y-2">
            <h1
              class="text-6xl md:text-7xl font-bold text-gray-300 font-poppins"
            >
              {{ error.statusCode }}
            </h1>
            <div class="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </div>

        <!-- Error Details -->
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            {{ errorConfig.title }}
          </h2>
          <p
            class="text-lg text-gray-600 max-w-lg mx-auto font-manrope leading-relaxed"
          >
            {{ errorConfig.message }}
          </p>

          <!-- Error Details (in development) -->
          <div
            v-if="$config.public.dev"
            class="bg-gray-100 p-4 rounded-lg text-left max-w-lg mx-auto"
          >
            <h3 class="font-semibold text-gray-900 mb-2">Error Details:</h3>
            <p class="text-sm text-gray-600 font-mono">{{ error.message }}</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          <button
            @click="handleError"
            class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 font-poppins shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <NuxtLink
            to="/"
            class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 font-poppins"
          >
            Go Home
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="bg-[#627023] hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 font-poppins shadow-lg hover:shadow-xl"
          >
            Contact Support
          </NuxtLink>
        </div>

        <!-- Helpful Links -->
        <div class="mt-12 space-y-4">
          <p class="text-sm text-gray-500 font-manrope">
            You might find these helpful:
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <NuxtLink
              to="/"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm border"
            >
              🏠 Home
            </NuxtLink>
            <NuxtLink
              to="/shop"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm border"
            >
              🛍️ Shop
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm border"
            >
              📝 Blog
            </NuxtLink>
            <NuxtLink
              to="/profile"
              class="bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium text-gray-700 transition-colors shadow-sm border"
            >
              👤 Profile
            </NuxtLink>
          </div>
        </div>

        <!-- Support Information -->
        <div class="mt-12 p-6 bg-white rounded-xl shadow-sm border">
          <h3 class="font-semibold text-gray-900 mb-3 font-poppins">
            Need Help?
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div class="flex items-center gap-2">
              <Icon name="uil:envelope" class="w-4 h-4 text-primary" />
              <span class="text-gray-600">support@onsko.com</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="uil:phone" class="w-4 h-4 text-primary" />
              <span class="text-gray-600">1-800-ONS-KO</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Error page specific styles */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.error-icon {
  animation: pulse 2s ease-in-out infinite;
}

/* Subtle background pattern */
.error-bg {
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(98, 112, 35, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 75% 75%,
      rgba(255, 107, 53, 0.1) 0%,
      transparent 50%
    );
}
</style>
